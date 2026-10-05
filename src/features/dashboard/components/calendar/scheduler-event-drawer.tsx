"use client"

import { useState } from "react"
import { Trash2 } from "lucide-react"

import {
  buildSchedulerEventRange,
  schedulerTimeValueToMinutes,
  splitSchedulerEventTimes,
} from "@/features/dashboard/utils/scheduler-event-utils"
import { SchedulerDueDateTimeFields } from "./scheduler-due-datetime-fields"
import { SchedulerTaskTabs } from "./scheduler-task-tabs"
import type { CalendarEvent } from "@/features/dashboard/content/dashboard-content-types"
import { SCHEDULER_ASSIGNEES, SCHEDULER_TASK_PRIORITIES, SCHEDULER_TASK_STATUSES, SCHEDULER_TASK_TYPES } from "@/features/dashboard/overview/content/scheduler-task-options"
import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"
import {
  SideDrawer,
  SideDrawerBody,
  SideDrawerContent,
  SideDrawerFooter,
  SideDrawerHeader,
} from "@/shared/ui/drawer"
import { Field, FieldContent, FieldError, FieldGroup, FieldLabel } from "@/shared/ui/field"
import { Input } from "@/shared/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select"
import { Textarea } from "@/shared/ui/textarea"

export type SchedulerEventDrawerProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  event: CalendarEvent | null
  mode: "add" | "edit"
  onSave: (event: CalendarEvent) => void
  onDelete?: (eventId: string) => void
}

const drawerFooterButtonClassName = "h-11 rounded-xl shadow-none"

function RequiredMark() {
  return <span className="text-destructive">*</span>
}

export function SchedulerEventDrawer({
  open,
  onOpenChange,
  event,
  mode,
  onSave,
  onDelete,
}: SchedulerEventDrawerProps) {
  const times = event ? splitSchedulerEventTimes(event.start, event.end) : { dueDate: "", startTime: "", endTime: "" }

  const [title, setTitle] = useState(event?.title ?? "")
  const [taskType, setTaskType] = useState(event?.taskType ?? "meeting")
  const [priority, setPriority] = useState(event?.priority ?? "medium")
  const [status, setStatus] = useState(event?.status ?? "in-progress")
  const [dueDate, setDueDate] = useState(times.dueDate)
  const [startTime, setStartTime] = useState(times.startTime)
  const [endTime, setEndTime] = useState(times.endTime)
  const [description, setDescription] = useState(event?.description ?? "")
  const [assignedTo, setAssignedTo] = useState(event?.assignedTo ?? "muhammad-talal-khan")
  const [error, setError] = useState<string | null>(null)

  const handleClose = () => onOpenChange(false)

  const handleSave = () => {
    /* istanbul ignore next */
    if (!event) return

    const trimmedTitle = title.trim()
    if (!trimmedTitle || !dueDate || !startTime || !endTime) {
      setError("Task title, due date, and from/to times are required.")
      return
    }

    if (schedulerTimeValueToMinutes(endTime) <= schedulerTimeValueToMinutes(startTime)) {
      setError("To time must be after from time.")
      return
    }

    const range = buildSchedulerEventRange(dueDate, startTime, endTime)

    onSave({
      ...event,
      ...range,
      title: trimmedTitle,
      taskType,
      priority,
      status,
      description,
      assignedTo,
    })
  }

  const handleDelete = () => {
    /* istanbul ignore next */
    if (!event || !onDelete) return
    onDelete(event.id)
  }

  return (
    <SideDrawer open={open} onOpenChange={onOpenChange}>
      <SideDrawerContent size="md">
        <SideDrawerHeader
          title={mode === "edit" ? "View & Update Task" : "Add Task"}
          description="Team members will be able to edit this post and republish changes."
          onClose={handleClose}
          closeLabel="Close task drawer"
        />

        <SideDrawerBody>
          <FieldGroup>
            <Field orientation="vertical">
              <FieldLabel htmlFor="scheduler-task-title" className="font-inter">
                Task Title <RequiredMark />
              </FieldLabel>
              <FieldContent>
                <Input
                  id="scheduler-task-title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Meeting with Mahmoud"
                  inputSize="sm"
                  radius="lg"
                  className="h-10"
                />
              </FieldContent>
            </Field>

            <Field orientation="vertical">
              <FieldLabel className="font-inter">
                Task Type <RequiredMark />
              </FieldLabel>
              <FieldContent>
                <Select value={taskType} onValueChange={setTaskType}>
                  <SelectTrigger className="h-10 w-full rounded-lg">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {SCHEDULER_TASK_TYPES.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FieldContent>
            </Field>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field orientation="vertical">
                <FieldLabel className="font-inter">
                  Priority <RequiredMark />
                </FieldLabel>
                <FieldContent>
                  <Select value={priority} onValueChange={setPriority}>
                    <SelectTrigger className="h-10 w-full rounded-lg">
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      {SCHEDULER_TASK_PRIORITIES.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FieldContent>
              </Field>

              <Field orientation="vertical">
                <FieldLabel className="font-inter">
                  Status <RequiredMark />
                </FieldLabel>
                <FieldContent>
                  <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger className="h-10 w-full rounded-lg">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      {SCHEDULER_TASK_STATUSES.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FieldContent>
              </Field>
            </div>

            <SchedulerDueDateTimeFields
              dueDate={dueDate}
              startTime={startTime}
              endTime={endTime}
              onDueDateChange={setDueDate}
              onStartTimeChange={setStartTime}
              onEndTimeChange={setEndTime}
            />

            <Field orientation="vertical">
              <FieldLabel htmlFor="scheduler-task-description" className="font-inter">
                Description
              </FieldLabel>
              <FieldContent>
                <Textarea
                  id="scheduler-task-description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="A little about the company and the team that you'll be working with."
                  className="min-h-28 rounded-lg"
                />
              </FieldContent>
            </Field>

            <Field orientation="vertical">
              <FieldLabel className="font-inter">Assigned To</FieldLabel>
              <FieldContent>
                <Select value={assignedTo} onValueChange={setAssignedTo}>
                  <SelectTrigger className="h-10 w-full rounded-lg">
                    <SelectValue placeholder="Select assignee" />
                  </SelectTrigger>
                  <SelectContent>
                    {SCHEDULER_ASSIGNEES.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FieldContent>
            </Field>

            {error ? <FieldError>{error}</FieldError> : null}
          </FieldGroup>

          <SchedulerTaskTabs />
        </SideDrawerBody>

        <SideDrawerFooter className="flex items-center justify-between gap-3">
          {mode === "edit" && onDelete ? (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-11 rounded-xl px-3 text-destructive hover:bg-destructive/10 hover:text-destructive"
              onClick={handleDelete}
            >
              <Trash2 className="size-4" aria-hidden />
              Delete
            </Button>
          ) : (
            <span />
          )}
          <div className="ml-auto flex gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className={cn(drawerFooterButtonClassName, "border-neutral-200 bg-white hover:bg-neutral-50")}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button type="button" size="sm" className={drawerFooterButtonClassName} onClick={handleSave}>
              Save
            </Button>
          </div>
        </SideDrawerFooter>
      </SideDrawerContent>
    </SideDrawer>
  )
}

SchedulerEventDrawer.displayName = "SchedulerEventDrawer"
