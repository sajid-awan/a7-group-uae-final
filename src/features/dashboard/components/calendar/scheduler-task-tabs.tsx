"use client"

import { useEffect, useRef, useState } from "react"
import {
  Clock,
  Download,
  FileText,
  ImageIcon,
  MoreVertical,
  Plus,
  SendHorizontal,
  SquarePen,
  Trash2,
} from "lucide-react"

import { useMounted } from "@/shared/hooks/use-mounted"
import { getInitials } from "@/shared/lib/get-initials"
import { cn } from "@/shared/lib/cn"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import { Button } from "@/shared/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs"
import { Textarea } from "@/shared/ui/textarea"
import { SCHEDULER_ATTACHMENT_ACCEPT, SCHEDULER_CURRENT_USER_AVATAR, SCHEDULER_MOCK_ACTIVITY, SCHEDULER_MOCK_ATTACHMENTS, SCHEDULER_MOCK_COMMENTS, SchedulerTaskAttachment, SchedulerTaskComment } from "@/features/dashboard/overview/content/scheduler-task-options"

const tabListClassName = "w-full gap-6"
const tabTriggerClassName = "px-0 pb-3 font-inter text-sm"

const panelClassName = "overflow-hidden rounded-xl border border-border bg-white"
const attachmentActionButtonClassName =
  "size-7 min-h-7 min-w-7 p-0 text-muted-foreground hover:text-foreground"

function getAttachmentKind(file: File): SchedulerTaskAttachment["kind"] {
  return file.type.startsWith("image/") ? "image" : "document"
}

function createAttachmentFromFile(file: File): SchedulerTaskAttachment {
  return {
    id: crypto.randomUUID(),
    title: file.name,
    ageLabel: "Just now",
    fileUrl: URL.createObjectURL(file),
    mimeType: file.type,
    kind: getAttachmentKind(file),
  }
}

function revokeAttachmentUrl(attachment: SchedulerTaskAttachment) {
  if (attachment.fileUrl?.startsWith("blob:")) {
    URL.revokeObjectURL(attachment.fileUrl)
  }
}

function SchedulerTabPlaceholder() {
  return (
    <div className="mt-6">
      <div className="flex gap-6 border-b border-border pb-3" aria-hidden>
        <span className="border-b-2 border-primary pb-3 font-inter text-sm text-primary">Attachments</span>
        <span className="font-inter text-sm text-muted-foreground">Comments</span>
        <span className="font-inter text-sm text-muted-foreground">Activity</span>
      </div>
      <div className={cn(panelClassName, "mt-4 divide-y divide-border")}>
        {SCHEDULER_MOCK_ATTACHMENTS.map((attachment) => (
          <SchedulerAttachmentRow key={attachment.id} attachment={attachment} />
        ))}
        <SchedulerAddAttachmentButton onFilesSelected={() => undefined} />
      </div>
    </div>
  )
}

function SchedulerAttachmentRow({
  attachment,
  onDelete,
}: {
  attachment: SchedulerTaskAttachment
  onDelete?: () => void
}) {
  const AttachmentIcon = attachment.kind === "image" ? ImageIcon : FileText

  const handleDownload = () => {
    /* istanbul ignore next -- download is disabled when fileUrl is missing */
    if (!attachment.fileUrl) return

    const link = document.createElement("a")
    link.href = attachment.fileUrl
    link.download = attachment.title
    link.rel = "noopener"
    link.click()
  }

  return (
    <div className="flex items-center gap-3 px-4 py-3.5">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
        <AttachmentIcon className="size-5 text-primary" aria-hidden />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate font-inter text-sm font-semibold text-neutral-900 font-inter">{attachment.title}</p>
        <p className="mt-0.5 flex items-center gap-1 font-inter text-xs text-muted-foreground">
          <Clock className="size-3.5 shrink-0" aria-hidden />
          {attachment.ageLabel}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-0.5">
        <Button
          type="button"
          variant="ghost"
          size="xs"
          shape="square"
          className={attachmentActionButtonClassName}
          aria-label={`Delete ${attachment.title}`}
          onClick={onDelete}
        >
          <Trash2 className="size-3.5" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="xs"
          shape="square"
          className={attachmentActionButtonClassName}
          aria-label={`Download ${attachment.title}`}
          disabled={!attachment.fileUrl}
          onClick={handleDownload}
        >
          <Download className="size-3.5" />
        </Button>
      </div>
    </div>
  )
}

function SchedulerAddAttachmentButton({ onFilesSelected }: { onFilesSelected: (files: FileList) => void }) {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <input
        ref={inputRef}
        type="file"
        accept={SCHEDULER_ATTACHMENT_ACCEPT}
        multiple
        className="sr-only"
        aria-label="Add attachment"
        onChange={(event) => {
          const files = event.target.files
          if (files && files.length > 0) {
            onFilesSelected(files)
          }
          event.target.value = ""
        }}
      />
      <button
        type="button"
        className="flex w-full items-center justify-center gap-2 px-4 py-3 font-inter text-xs font-medium text-foreground transition-colors hover:bg-muted/30"
        onClick={() => inputRef.current?.click()}
      >
        <span className="flex size-6 items-center justify-center rounded-full bg-primary/10">
          <Plus className="size-3.5 text-primary" aria-hidden />
        </span>
        Add Attachment
      </button>
    </>
  )
}

function SchedulerCommentComposer({
  value,
  onChange,
  onSend,
}: {
  value: string
  onChange: (value: string) => void
  onSend: () => void
}) {
  return (
    <div className="flex gap-3 border-b border-border px-4 py-4">
      <Avatar size="sm" className="mt-1">
        <AvatarImage src={SCHEDULER_CURRENT_USER_AVATAR} alt="Current user" />
        <AvatarFallback>{getInitials("Current User")}</AvatarFallback>
      </Avatar>
      <div className="relative min-w-0 flex-1">
        <Textarea
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="A little about the company and the team that you'll be working with."
          className="min-h-24 resize-none rounded-xl border-border pr-12 font-inter text-sm"
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          shape="square"
          className="absolute bottom-2 right-2 size-8 text-primary hover:bg-primary/10 hover:text-primary"
          aria-label="Send comment"
          onClick={onSend}
        >
          <SendHorizontal className="size-4" />
        </Button>
      </div>
    </div>
  )
}

function SchedulerCommentRow({ comment }: { comment: SchedulerTaskComment }) {
  return (
    <div className="flex gap-3 px-4 py-4">
      <Avatar size="sm" className="mt-0.5">
        <AvatarImage src={comment.authorAvatarUrl} alt={comment.authorName} />
        <AvatarFallback>{getInitials(comment.authorName)}</AvatarFallback>
      </Avatar>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <p className="font-inter text-sm">
            <span className="font-semibold text-foreground">{comment.authorName}</span>
            <span className="text-muted-foreground"> • {comment.timestamp}</span>
          </p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="xs"
                shape="pill"
                className="h-6 w-6 shrink-0 p-0 text-muted-foreground hover:text-foreground"
                aria-label={`Actions for comment by ${comment.authorName}`}
              >
                <MoreVertical className="size-3.5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit comment</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive focus:text-destructive">Delete comment</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <p className="mt-1 font-inter text-sm leading-relaxed text-muted-foreground">{comment.body}</p>
      </div>
    </div>
  )
}

function SchedulerActivityRow({
  title,
  ageLabel,
  description,
}: {
  title: string
  ageLabel: string
  description: string
}) {
  return (
    <div className="flex gap-3 px-4 py-4">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
        <SquarePen className="size-4 text-primary" aria-hidden />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <p className="font-inter text-sm font-semibold text-neutral-900 font-inter">{title}</p>
          <span className="shrink-0 font-inter text-xs text-muted-foreground">{ageLabel}</span>
        </div>
        <p className="mt-1 font-inter text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

export function SchedulerTaskTabs() {
  const mounted = useMounted()
  const [attachments, setAttachments] = useState(SCHEDULER_MOCK_ATTACHMENTS)
  const attachmentsRef = useRef(attachments)
  const [comments, setComments] = useState(SCHEDULER_MOCK_COMMENTS)
  const [commentDraft, setCommentDraft] = useState(
    "A little about the company and the team that you'll be working with."
  )

  useEffect(() => {
    attachmentsRef.current = attachments
  })

  useEffect(() => {
    return () => {
      attachmentsRef.current.forEach(revokeAttachmentUrl)
    }
  }, [])

  const handleFilesSelected = (files: FileList) => {
    const uploaded = Array.from(files).map(createAttachmentFromFile)
    setAttachments((current) => [...current, ...uploaded])
  }

  const handleDeleteAttachment = (attachmentId: string) => {
    setAttachments((current) => {
      const attachment = current.find((item) => item.id === attachmentId)
      if (attachment) revokeAttachmentUrl(attachment)
      return current.filter((item) => item.id !== attachmentId)
    })
  }

  const handleSendComment = () => {
    const trimmed = commentDraft.trim()
    if (!trimmed) return

    setComments((current) => [
      {
        id: `comment-${current.length + 1}`,
        authorName: "Muhammad Talal Khan",
        authorAvatarUrl: SCHEDULER_CURRENT_USER_AVATAR,
        timestamp: "Just now",
        body: trimmed,
      },
      ...current,
    ])
    setCommentDraft("")
  }

  if (!mounted) {
    return <SchedulerTabPlaceholder />
  }

  return (
    <Tabs defaultValue="attachments" className="mt-6 gap-4">
      <TabsList variant="line" className={tabListClassName}>
        <TabsTrigger variant="line" value="attachments" className={tabTriggerClassName}>
          Attachments
        </TabsTrigger>
        <TabsTrigger variant="line" value="comments" className={tabTriggerClassName}>
          Comments
        </TabsTrigger>
        <TabsTrigger variant="line" value="activity" className={tabTriggerClassName}>
          Activity
        </TabsTrigger>
      </TabsList>

      <TabsContent value="attachments" className="mt-0">
        <div className={cn(panelClassName, "divide-y divide-border")}>
          {attachments.map((attachment) => (
            <SchedulerAttachmentRow
              key={attachment.id}
              attachment={attachment}
              onDelete={() => handleDeleteAttachment(attachment.id)}
            />
          ))}
          <SchedulerAddAttachmentButton onFilesSelected={handleFilesSelected} />
        </div>
      </TabsContent>

      <TabsContent value="comments" className="mt-0">
        <div className={cn(panelClassName, "divide-y divide-border")}>
          <SchedulerCommentComposer
            value={commentDraft}
            onChange={setCommentDraft}
            onSend={handleSendComment}
          />
          {comments.map((comment) => (
            <SchedulerCommentRow key={comment.id} comment={comment} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="activity" className="mt-0">
        <div className={cn(panelClassName, "divide-y divide-border")}>
          {SCHEDULER_MOCK_ACTIVITY.map((entry) => (
            <SchedulerActivityRow
              key={entry.id}
              title={entry.title}
              ageLabel={entry.ageLabel}
              description={entry.description}
            />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}

SchedulerTaskTabs.displayName = "SchedulerTaskTabs"
