import path from "node:path"
import { fileURLToPath } from "node:url"

import fs from "fs-extra"
import { transform } from "@svgr/core"
import prettier from "prettier"
import { optimize } from "svgo"

type IconMeta = {
  componentName: string
  displayName: string
  fileName: string
  tags: string[]
  category: string
}

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const repoRoot = path.resolve(__dirname, "..")

const inputCandidates = [path.join(repoRoot, "public/general"), path.join(repoRoot, "public/assets/general")]
const outputRoot = path.join(repoRoot, "src/components/icons")
const outputGeneratedDir = path.join(outputRoot, "generated")
const outputIndexFile = path.join(outputRoot, "index.ts")
const outputListFile = path.join(outputRoot, "iconList.ts")

function toPascalCase(value: string): string {
  const cleaned = value
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join("")

  return /^\d/.test(cleaned) ? `N${cleaned}` : cleaned
}

function toWords(value: string): string[] {
  return value
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.toLowerCase())
}

function normalizeSvgColors(svg: string): string {
  return svg.replace(/\s(fill|stroke)=("|')([^"']+)\2/gi, (full, attr: string, quote: string, rawValue: string) => {
    const value = rawValue.trim().toLowerCase()

    if (value === "none" || value === "currentcolor" || value === "inherit" || value.startsWith("url(")) {
      return full
    }

    return ` ${attr}=${quote}currentColor${quote}`
  })
}

function componentTemplate(
  variables: { componentName: string; jsx: unknown },
  { tpl }: { tpl: (...args: unknown[]) => unknown }
) {
  return tpl`
import type { IconProps } from "../types"

const ${variables.componentName} = ({
  size = 24,
  width,
  height,
  color = "currentColor",
  className,
  strokeWidth = 1.5,
  ...props
}: IconProps) => ${variables.jsx}

export default ${variables.componentName}
` as string
}

function updateRootSvgTag(jsxBody: string): string {
  return jsxBody.replace(/<svg\b([^>]*)>/, (_match, attrs: string) => {
    let nextAttrs = attrs
      .replace(/\swidth=\{[^}]+\}|\swidth="[^"]*"|\swidth='[^']*'/g, "")
      .replace(/\sheight=\{[^}]+\}|\sheight="[^"]*"|\sheight='[^']*'/g, "")
      .replace(/\sclassName=\{[^}]+\}|\sclass="[^"]*"|\sclass='[^']*'/g, "")

    if (!/\{\.\.\.props\}/.test(nextAttrs)) {
      nextAttrs = `${nextAttrs} {...props}`
    }

    return `<svg\n      width={width ?? size}\n      height={height ?? size}\n      className={className}\n      aria-hidden="true"\n      role="img"\n      color={color}\n      strokeWidth={strokeWidth}${nextAttrs}>`
  })
}

function normalizeJsxColors(jsxBody: string): string {
  return jsxBody
    .replace(/stroke="currentColor"/g, "stroke={color}")
    .replace(/fill="currentColor"/g, "fill={color}")
    .replace(/strokeWidth=\{[^}]+\}/g, "strokeWidth={strokeWidth}")
}

function getCategory(tags: string[]): string {
  if (tags.length === 0) {
    return "general"
  }

  return tags[0]
}

async function resolveInputDir(): Promise<string> {
  for (const dir of inputCandidates) {
    if (await fs.pathExists(dir)) {
      return dir
    }
  }

  throw new Error(`No SVG source directory found. Checked: ${inputCandidates.join(", ")}`)
}

async function main() {
  const inputDir = await resolveInputDir()
  const sourceFiles = (await fs.readdir(inputDir))
    .filter((file: string) => file.toLowerCase().endsWith(".svg"))
    .sort((a: string, b: string) => a.localeCompare(b))

  if (sourceFiles.length === 0) {
    throw new Error(`No SVG files found in ${inputDir}`)
  }

  await fs.ensureDir(outputGeneratedDir)
  await fs.emptyDir(outputGeneratedDir)

  const iconMetas: IconMeta[] = []
  const nameCounts = new Map<string, number>()

  for (const fileName of sourceFiles) {
    const rawPath = path.join(inputDir, fileName)
    const rawSvg = await fs.readFile(rawPath, "utf8")

    const optimized = optimize(normalizeSvgColors(rawSvg), {
      multipass: true,
      plugins: [
        "preset-default",
      ],
    })

    if (!("data" in optimized)) {
      throw new Error(`Failed to optimize ${fileName}`)
    }

    const baseName = path.basename(fileName, ".svg")
    const pascalBase = toPascalCase(baseName)
    const baseComponentName = pascalBase.endsWith("Icon") ? pascalBase : `${pascalBase}Icon`
    const seen = nameCounts.get(baseComponentName) ?? 0
    const componentName = seen === 0 ? baseComponentName : `${baseComponentName}${seen + 1}`
    nameCounts.set(baseComponentName, seen + 1)

    const transformed = await transform(
      optimized.data,
      {
        typescript: true,
        icon: false,
        dimensions: false,
        expandProps: "end",
        jsxRuntime: "automatic",
        plugins: ["@svgr/plugin-jsx"],
        prettier: false,
        template: componentTemplate as never,
      },
      { componentName }
    )

    const componentSource = normalizeJsxColors(updateRootSvgTag(transformed))
    const formattedComponent = await prettier.format(componentSource, { parser: "typescript" })

    await fs.writeFile(path.join(outputGeneratedDir, `${componentName}.tsx`), formattedComponent, "utf8")

    const tags = Array.from(new Set([baseName.toLowerCase(), ...toWords(baseName), "general"]))

    iconMetas.push({
      componentName,
      displayName: componentName.replace(/Icon$/, ""),
      fileName,
      tags,
      category: getCategory(tags),
    })
  }

  const indexSource = `${iconMetas.map((meta) => `export { default as ${meta.componentName} } from "./generated/${meta.componentName}"`).join("\n")}
\nexport type { IconProps } from "./types"
`

  const iconListSource = `import type { ComponentType } from "react"

import type { IconProps } from "./types"
import {
${iconMetas.map((meta) => `  ${meta.componentName},`).join("\n")}
} from "./index"

export interface IconListItem {
  name: string
  componentName: string
  component: ComponentType<IconProps>
  fileName: string
  tags: string[]
  category: string
}

export const iconList: IconListItem[] = [
${iconMetas
  .map(
    (meta) =>
      `  { name: "${meta.displayName}", componentName: "${meta.componentName}", component: ${meta.componentName}, fileName: "${meta.fileName}", tags: [${meta.tags.map((tag) => `"${tag}"`).join(", ")}], category: "${meta.category}" },`
  )
  .join("\n")}
]
`

  const formattedIndex = await prettier.format(indexSource, { parser: "typescript" })
  const formattedIconList = await prettier.format(iconListSource, { parser: "typescript" })

  await fs.writeFile(outputIndexFile, formattedIndex, "utf8")
  await fs.writeFile(outputListFile, formattedIconList, "utf8")

  console.log(`Generated ${iconMetas.length} icon components from ${inputDir}`)
}

main().catch((error: unknown) => {
  console.error(error)
  process.exitCode = 1
})
