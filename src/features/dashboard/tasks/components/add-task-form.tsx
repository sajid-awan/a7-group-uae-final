"use client"

import { useState } from "react"

import type { AddTaskFormValues } from "../content/add-task-form-types"
import {
  ADD_TASK_AGENT_OPTIONS,
  ADD_TASK_FORM_COPY,
  ADD_TASK_PRIORITY_OPTIONS,
  ADD_TASK_STATUS_OPTIONS,
  ADD_TASK_TYPE_OPTIONS,
  createDefaultAddTaskFormValues,
} from "../content/tasks-content"
import { TaskDueDateField, TaskDueTimeField } from "./task-due-datetime-fields"
import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button"
import { Field, FieldContent, FieldLabel } from "@/shared/ui/field"
import {
  FormInputField,
  FormSelectField,
  formControlClassName,
} from "@/shared/ui/form-field"
import { RichTextEditor } from "@/shared/ui/rich-text-editor"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select"

export type AddTaskFormProps = {
  initialValues?: Partial<AddTaskFormValues>
  hideTitle?: boolean
  className?: string
  onCancel?: () => void
  onSubmit?: (values: AddTaskFormValues) => void
}

export function AddTaskForm({
  initialValues,
  hideTitle = false,
  className,
  onCancel,
  onSubmit,
}: AddTaskFormProps) {
  const [values, setValues] = useState<AddTaskFormValues>({
    ...createDefaultAddTaskFormValues(),
    ...initialValues,
  })

  const updateValues = (patch: Partial<AddTaskFormValues>) => {
    setValues((current) => ({ ...current, ...patch }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit?.(values)
  }

  return (
    <form className={cn("space-y-6", className)} onSubmit={handleSubmit}>
      {hideTitle ? null : (
        <h1 className="font-inter text-2xl font-semibold text-black">{ADD_TASK_FORM_COPY.title}</h1>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <FormInputField
          id="task-title"
          label="Task Title"
          value={values.title}
          onValueChange={(title) => updateValues({ title })}
          placeholder="Task title"
          required
        />
        <Field orientation="vertical">
          <FieldLabel htmlFor="task-type">
            Task Type <span className="text-destructive"> *</span>
          </FieldLabel>
          <FieldContent>
            <Select
              value={values.taskType || undefined}
              onValueChange={(taskType) =>
                updateValues({ taskType: taskType as AddTaskFormValues["taskType"] })
              }
            >
              <SelectTrigger id="task-type" className={formControlClassName}>
                <SelectValue placeholder="Select task type" />
              </SelectTrigger>
              <SelectContent>
                {ADD_TASK_TYPE_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FieldContent>
        </Field>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <FormSelectField
          id="task-status"
          label="Status"
          value={values.status}
          onValueChange={(status) => updateValues({ status: status as AddTaskFormValues["status"] })}
          options={[...ADD_TASK_STATUS_OPTIONS]}
          required
        />
        <FormSelectField
          id="assigned-agent"
          label="Assigned to agent"
          value={values.assignedAgentId}
          onValueChange={(assignedAgentId) => updateValues({ assignedAgentId })}
          options={[...ADD_TASK_AGENT_OPTIONS]}
          placeholder="Select agent"
        />
      </div>

      <Field orientation="vertical">
        <FieldLabel>
          {ADD_TASK_FORM_COPY.descriptionLabel}
          <span className="text-destructive"> *</span>
        </FieldLabel>
        <FieldContent>
          <RichTextEditor
            value={values.description}
            onChange={(description) => updateValues({ description })}
            placeholder={ADD_TASK_FORM_COPY.descriptionPlaceholder}
          />
        </FieldContent>
      </Field>

      <div className="grid gap-4 md:grid-cols-3">
        <FormSelectField
          id="task-priority"
          label="Priority"
          value={values.priority}
          onValueChange={(priority) => updateValues({ priority: priority as AddTaskFormValues["priority"] })}
          options={[...ADD_TASK_PRIORITY_OPTIONS]}
          required
        />
        <TaskDueDateField
          value={values.dueDate}
          onChange={(dueDate) => updateValues({ dueDate })}
          required
        />
        <TaskDueTimeField
          value={values.dueTime}
          onChange={(dueTime) => updateValues({ dueTime })}
          required
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" size="sm" className="rounded-lg px-6">
          {ADD_TASK_FORM_COPY.submitLabel}
        </Button>
        {onCancel ? (
          <Button type="button" variant="outline" size="sm" className="rounded-lg px-6" onClick={onCancel}>
            {ADD_TASK_FORM_COPY.cancelLabel}
          </Button>
        ) : null}
      </div>
    </form>
  )
}

AddTaskForm.displayName = "AddTaskForm"
