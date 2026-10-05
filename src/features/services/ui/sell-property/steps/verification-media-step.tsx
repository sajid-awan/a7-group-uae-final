"use client"

import { useEffect, useRef, useState } from "react"
import { FileImage, FileVideo } from "lucide-react"

import { FileUploadDropzone } from "@/shared/ui/file-upload-dropzone"
import { UploadFileRow } from "@/shared/ui/upload-file-row"

function formatFileSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`
}

function fileIcon(file: File) {
  return file.type.startsWith("video/") ? FileVideo : FileImage
}

export function VerificationMediaStep() {
  type UploadEntry = {
    id: string
    file: File
    progress: number
    status: "uploading" | "uploaded" | "removing"
  }

  const [entries, setEntries] = useState<UploadEntry[]>([])
  const timers = useRef<Record<string, number>>({})

  const handleFilesSelected = (selected: File[]) => {
    const newEntries = selected.map((file) => ({
      id: `${file.name}-${file.lastModified}-${Math.random().toString(36).slice(2, 9)}`,
      file,
      progress: 0,
      status: "uploading" as const,
    }))
    setEntries((prev) => [...prev, ...newEntries])
  }

  useEffect(() => {
    // Start simulated uploads for entries with status uploading and no timer.
    entries.forEach((entry) => {
      if (entry.status === "uploading" && timers.current[entry.id] == null) {
        const id = window.setInterval(() => {
          setEntries((prev) =>
            prev.map((e) => {
              if (e.id !== entry.id) return e
              const next = Math.min(100, e.progress + Math.floor(Math.random() * 15) + 5)
              if (next >= 100) {
                // clear timer
                const t = timers.current[entry.id]
                if (t) {
                  window.clearInterval(t)
                  delete timers.current[entry.id]
                }
                return { ...e, progress: 100, status: "uploaded" }
              }
              return { ...e, progress: next }
            })
          )
        }, 400)
        timers.current[entry.id] = id
      }
    })

    return () => {
      // cleanup on unmount
      Object.values(timers.current).forEach((t) => window.clearInterval(t))
      timers.current = {}
    }
  }, [entries])

  const removeFile = (id: string) => {
    setEntries((prev) => prev.map((e) => (e.id === id ? { ...e, status: "removing" } : e)))

    // simulate server-side removal delay, stop any ongoing timer
    window.setTimeout(() => {
      // clear upload timer if present
      if (timers.current[id]) {
        window.clearInterval(timers.current[id])
        delete timers.current[id]
      }
      setEntries((prev) => prev.filter((e) => e.id !== id))
    }, 700)
  }

  return (
    <div className="mt-7 space-y-4">
      <h2 className="text-xl font-inter leading-tight font-semibold text-a7-black">Upload Multiple Images & Video</h2>

      <FileUploadDropzone
        accept="image/*,video/*"
        multiple
        onFilesSelected={handleFilesSelected}
        className="px-4 py-8 sm:px-6 sm:py-12"
        title={
          <span className="text-sm leading-snug sm:text-lg">
            <span className="text-[#B68E45]">Click here</span> to upload or drop files here
          </span>
        }
      />

      {entries.length > 0 ? (
        <div className="space-y-3 pt-1">
          {entries.map((entry) => {
            const file = entry.file
            const Icon = fileIcon(file)
            const isImage = file.type.startsWith("image/")
            return (
              <UploadFileRow
                key={entry.id}
                name={file.name}
                sizeLabel={formatFileSize(file.size)}
                icon={Icon}
                iconClassName={isImage ? "text-[#B68E45]" : "text-[#B0B7C4]"}
                previewLabel={isImage && entry.status === "uploaded" ? "Preview" : undefined}
                progress={entry.progress}
                isRemoving={entry.status === "removing"}
                isUploaded={entry.status === "uploaded"}
                onRemove={() => removeFile(entry.id)}
              />
            )
          })}
        </div>
      ) : null}
    </div>
  )
}
