"use client"

import Image from "@tiptap/extension-image"
import Link from "@tiptap/extension-link"
import Placeholder from "@tiptap/extension-placeholder"
import TextAlign from "@tiptap/extension-text-align"
import { Color } from "@tiptap/extension-color"
import { Extension } from "@tiptap/core"
import { TextStyle } from "@tiptap/extension-text-style"
import Underline from "@tiptap/extension-underline"
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  ImageIcon,
  Italic,
  Link2,
  List,
  ListOrdered,
  Strikethrough,
  Underline as UnderlineIcon,
} from "lucide-react"
import { useEffect } from "react"

import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select"

const FONT_SIZE_OPTIONS = [
  { label: "12", value: "12px" },
  { label: "14", value: "14px" },
  { label: "16", value: "16px" },
  { label: "18", value: "18px" },
] as const

const FontSize = Extension.create({
  name: "fontSize",
  addOptions() {
    return {
      types: ["textStyle"],
    }
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (element) => element.style.fontSize || null,
            renderHTML: (attributes) => {
              if (!attributes.fontSize) return {}
              return { style: `font-size: ${attributes.fontSize}` }
            },
          },
        },
      },
    ]
  },
})

const toolbarButtonClassName =
  "size-8 min-h-8 min-w-8 rounded-md border-0 bg-transparent p-0 text-muted-foreground shadow-none hover:bg-white/80 hover:text-foreground"

const toolbarDividerClassName = "mx-1 h-5 w-px shrink-0 bg-neutral-200"

export type RichTextEditorProps = {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  className?: string
  editorClassName?: string
  disabled?: boolean
}

function ToolbarButton({
  label,
  active,
  onClick,
  children,
}: {
  label: string
  active?: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="xs"
      shape="square"
      className={cn(toolbarButtonClassName, active && "bg-white text-foreground shadow-sm")}
      aria-label={label}
      aria-pressed={active ? "true" : "false"}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export function RichTextEditor({
  value = "",
  onChange,
  placeholder = "Description...",
  className,
  editorClassName,
  disabled = false,
}: RichTextEditorProps) {
  const editor = useEditor({
    immediatelyRender: false,
    editable: !disabled,
    extensions: [
      StarterKit.configure({
        heading: false,
        codeBlock: false,
        code: false,
        blockquote: false,
        horizontalRule: false,
      }),
      Underline,
      TextStyle,
      FontSize,
      Color,
      TextAlign.configure({ types: ["paragraph"] }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { class: "text-primary underline" },
      }),
      Image.configure({ HTMLAttributes: { class: "max-w-full rounded-lg" } }),
      Placeholder.configure({ placeholder }),
    ],
    content: value,
    editorProps: {
      attributes: {
        class: cn(
          "min-h-36 px-4 py-3 text-sm leading-relaxed text-foreground outline-none",
          "[&_p]:m-0 [&_p+p]:mt-2 [&_ul]:my-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:my-2 [&_ol]:list-decimal [&_ol]:pl-5",
          editorClassName
        ),
      },
    },
    onUpdate: ({ editor: currentEditor }) => {
      onChange?.(currentEditor.getHTML())
    },
  })

  useEffect(() => {
    if (!editor) return
    const currentHtml = editor.getHTML()
    const nextHtml = value || "<p></p>"
    if (value !== undefined && currentHtml !== nextHtml && value !== currentHtml) {
      editor.commands.setContent(nextHtml, { emitUpdate: false })
    }
  }, [editor, value])

  useEffect(() => {
    if (!editor) return
    editor.setEditable(!disabled)
  }, [disabled, editor])

  if (!editor) {
    return (
      <div
        className={cn(
          "overflow-hidden rounded-xl border border-neutral-200 bg-white",
          className
        )}
      >
        <div className="min-h-36 bg-muted/20" />
      </div>
    )
  }

  const setFontSize = (fontSize: string) => {
    editor.chain().focus().setMark("textStyle", { fontSize }).run()
  }

  const addLink = () => {
    const previousUrl = editor.getAttributes("link").href as string | undefined
    const url = window.prompt("Enter URL", previousUrl ?? "https://")
    if (url === null) return
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run()
      return
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run()
  }

  const addImage = () => {
    const url = window.prompt("Enter image URL")
    if (!url) return
    editor.chain().focus().setImage({ src: url }).run()
  }

  return (
    <div className={cn("overflow-hidden rounded-xl border border-neutral-200 bg-white", className)}>
      <div className="flex flex-wrap items-center gap-1 border-b border-neutral-200 bg-[#f4f7fb] px-3 py-2">
        <Select
          value={
            FONT_SIZE_OPTIONS.find((option) => editor.isActive("textStyle", { fontSize: option.value }))
              ?.value ?? "14px"
          }
          onValueChange={setFontSize}
        >
          <SelectTrigger className="h-8 w-[4.25rem] rounded-md border border-neutral-200 bg-white px-2 text-xs shadow-none">
            <SelectValue placeholder="14" />
          </SelectTrigger>
          <SelectContent>
            {FONT_SIZE_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <label className="relative flex size-8 cursor-pointer items-center justify-center rounded-md hover:bg-white/80">
          <span className="sr-only">Text color</span>
          <span className="text-xs font-semibold text-foreground">T</span>
          <input
            type="color"
            className="absolute inset-0 cursor-pointer opacity-0"
            value={(editor.getAttributes("textStyle").color as string | undefined) ?? "#111827"}
            onChange={(event) => editor.chain().focus().setColor(event.target.value).run()}
          />
        </label>

        <span className={toolbarDividerClassName} aria-hidden />

        <ToolbarButton
          label="Bold"
          active={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold className="size-3.5" />
        </ToolbarButton>
        <ToolbarButton
          label="Italic"
          active={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic className="size-3.5" />
        </ToolbarButton>
        <ToolbarButton
          label="Underline"
          active={editor.isActive("underline")}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <UnderlineIcon className="size-3.5" />
        </ToolbarButton>
        <ToolbarButton
          label="Strikethrough"
          active={editor.isActive("strike")}
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <Strikethrough className="size-3.5" />
        </ToolbarButton>

        <span className={toolbarDividerClassName} aria-hidden />

        <ToolbarButton
          label="Align left"
          active={editor.isActive({ textAlign: "left" })}
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
        >
          <AlignLeft className="size-3.5" />
        </ToolbarButton>
        <ToolbarButton
          label="Align center"
          active={editor.isActive({ textAlign: "center" })}
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
        >
          <AlignCenter className="size-3.5" />
        </ToolbarButton>
        <ToolbarButton
          label="Align right"
          active={editor.isActive({ textAlign: "right" })}
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
        >
          <AlignRight className="size-3.5" />
        </ToolbarButton>

        <span className={toolbarDividerClassName} aria-hidden />

        <ToolbarButton
          label="Numbered list"
          active={editor.isActive("orderedList")}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <ListOrdered className="size-3.5" />
        </ToolbarButton>
        <ToolbarButton
          label="Bulleted list"
          active={editor.isActive("bulletList")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <List className="size-3.5" />
        </ToolbarButton>

        <span className={toolbarDividerClassName} aria-hidden />

        <ToolbarButton label="Insert image" onClick={addImage}>
          <ImageIcon className="size-3.5" />
        </ToolbarButton>
        <ToolbarButton label="Insert link" active={editor.isActive("link")} onClick={addLink}>
          <Link2 className="size-3.5" />
        </ToolbarButton>
      </div>

      <EditorContent editor={editor} />
    </div>
  )
}

RichTextEditor.displayName = "RichTextEditor"
