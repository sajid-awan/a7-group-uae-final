"use client"

import { useState } from "react"
import { FileImage, FileVideo, ImagePlus, Upload } from "lucide-react"

import { FileUploadDropzone } from "@/shared/ui/file-upload-dropzone"
import { UploadFileRow } from "@/shared/ui/upload-file-row"
import { CodeBlock, DemoBlock } from "@/shared/ui/docs-blocks"

export default function FileUploadDocsPage() {
  const [pickedCount, setPickedCount] = useState(0)

  return (
    <div className="mx-auto p-6 md:p-8">
      <header className="mb-10 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Components</p>
        <h1 className="mt-1 font-heading text-2xl font-semibold tracking-tight">File upload</h1>
        <p className="mt-2 text-muted-foreground">
          Dashed dropzones for drag-and-drop uploads and file rows for progress / preview. Use{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">variant</code> on{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">FileUploadDropzone</code> for layout density.
        </p>
      </header>

      <div className="space-y-10">
        <section className="space-y-4">
          <h2 className="text-lg font-medium">Import</h2>
          <CodeBlock>{`import { FileUploadDropzone } from "@/shared/ui/file-upload-dropzone"
import { UploadFileRow } from "@/shared/ui/upload-file-row"`}</CodeBlock>
        </section>

        <DemoBlock
          title="Dropzone variants"
          description="default (large marketing) · compact (with button) · minimal · emphasized."
          code={`<FileUploadDropzone variant="default" title={<>...</>} />
<FileUploadDropzone variant="compact" title="Drag & drop" description="JPG, PNG up to 20MB" />
<FileUploadDropzone variant="minimal" icon={Upload} title="Upload file" />
<FileUploadDropzone variant="emphasized" showAction title="Add documents" />`}
        >
          <div className="grid w-full max-w-2xl gap-6">
            <FileUploadDropzone
              variant="default"
              title={
                <>
                  <span className="text-[#B68E45]">Click here</span> to upload or drop files here
                </>
              }
            />
            <FileUploadDropzone
              variant="compact"
              title="Drag & drop files here or click to upload"
              description="JPG, PNG, MP4 up to 20MB"
            />
            <FileUploadDropzone variant="minimal" icon={Upload} title="Upload a file" description="PDF, DOCX, or images" />
            <FileUploadDropzone
              variant="emphasized"
              icon={ImagePlus}
              showAction
              actionLabel="Browse files"
              title="Add property photos"
              description="High-resolution images recommended"
            />
          </div>
        </DemoBlock>

        <DemoBlock
          title="Custom icon"
          description="Pass any `LucideIcon` via the `icon` prop."
          code={`<FileUploadDropzone variant="compact" icon={Upload} title="Upload" />`}
        >
          <div className="w-full max-w-md">
            <FileUploadDropzone
              variant="compact"
              icon={Upload}
              title="Upload documents"
              description="Max 10MB per file"
              accept="image/*,video/*,.pdf"
              multiple
              onFilesSelected={(files) => setPickedCount(files.length)}
            />
            {pickedCount > 0 ? (
              <p className="text-sm text-muted-foreground">
                {pickedCount} file{pickedCount === 1 ? "" : "s"} selected in last pick
              </p>
            ) : null}
          </div>
        </DemoBlock>

        <DemoBlock
          title="Upload file rows"
          description="List uploaded files with optional preview label or progress bar."
          code={`<UploadFileRow
  name="Picture.png"
  sizeLabel="5.7MB"
  icon={FileImage}
  iconClassName="text-[#B68E45]"
  previewLabel="Preview"
/>
<UploadFileRow name="Video.mp4" sizeLabel="5.7MB" icon={FileVideo} progress={48} />`}
        >
          <div className="w-full max-w-md space-y-3">
            <UploadFileRow
              name="Picture.png"
              sizeLabel="5.7MB"
              icon={FileImage}
              iconClassName="text-[#B68E45]"
              previewLabel="Preview"
            />
            <UploadFileRow name="Video.mp4" sizeLabel="5.7MB" icon={FileVideo} progress={48} />
            <UploadFileRow name="Picture.png" sizeLabel="5.7MB" icon={FileImage} progress={10} />
          </div>
        </DemoBlock>

        <DemoBlock
          title="Combined (dropzone + rows)"
          description="Typical sell-property verification step pattern."
          code={`<FileUploadDropzone variant="default" title={...} />
<div className="space-y-3">
  <UploadFileRow ... />
</div>`}
        >
          <div className="w-full max-w-lg space-y-4">
            <FileUploadDropzone
              variant="default"
              title={
                <>
                  <span className="text-[#B68E45]">Click here</span> to upload or drop files here
                </>
              }
            />
            <div className="space-y-3">
              <UploadFileRow
                name="Picture.png"
                sizeLabel="5.7MB"
                icon={FileImage}
                iconClassName="text-[#B68E45]"
                previewLabel="Preview"
              />
              <UploadFileRow name="Video.mp4" sizeLabel="5.7MB" icon={FileVideo} progress={48} />
            </div>
          </div>
        </DemoBlock>
      </div>
    </div>
  )
}
