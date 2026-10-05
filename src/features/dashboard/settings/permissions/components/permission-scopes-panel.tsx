"use client"

import { ChevronDown } from "lucide-react"

import {
  isPermissionAccessItem,
  PERMISSION_SCOPE_ACCESS_COLUMNS,
  PERMISSION_SCOPE_COLUMN_LABELS,
  type PermissionAccessScope,
  type PermissionActionScope,
  type PermissionScopeColumn,
  type PermissionScopeItem,
  type PermissionScopeState,
} from "../content/permissions-scopes-content"
import { cn } from "@/shared/lib/cn"
import { Checkbox } from "@/shared/ui/checkbox"
import { RadioField, RadioGroup } from "@/shared/ui/radio-group"

const scopeCheckboxAccent = "#b68c40"
const scopeColumnClassName = "flex w-14 flex-col items-center gap-1.5"

type PermissionScopeColumnsHeaderProps = {
  columns: PermissionScopeColumn[]
  className?: string
}

export function PermissionScopeColumnsHeader({ columns, className }: PermissionScopeColumnsHeaderProps) {
  return (
    <div className={cn("flex items-end justify-end gap-5 pr-1", className)}>
      {columns.map((column) => (
        <p key={column} className={cn(scopeColumnClassName, "text-center text-[11px] font-medium text-muted-foreground")}>
          {PERMISSION_SCOPE_COLUMN_LABELS[column]}
        </p>
      ))}
    </div>
  )
}

type PermissionScopeAccessControlsProps = {
  itemId: string
  columns: PermissionAccessScope[]
  value: PermissionAccessScope | ""
  onChange: (scope: PermissionAccessScope) => void
}

function PermissionScopeAccessControls({
  itemId,
  columns,
  value,
  onChange,
}: PermissionScopeAccessControlsProps) {
  return (
    <RadioGroup
      value={value}
      onValueChange={(next) => onChange(next as PermissionAccessScope)}
      size="sm"
      variant="primary"
      className="flex items-end gap-5"
    >
      {columns.map((column) => (
        <div key={column} className={scopeColumnClassName}>
          <RadioField
            value={column}
            aria-label={`${itemId} ${PERMISSION_SCOPE_COLUMN_LABELS[column]}`}
          />
          <span className="text-[11px] font-medium text-muted-foreground">
            {PERMISSION_SCOPE_COLUMN_LABELS[column]}
          </span>
        </div>
      ))}
    </RadioGroup>
  )
}

type PermissionScopeActionControlsProps = {
  itemLabel: string
  columns: PermissionActionScope[]
  values: PermissionActionScope[]
  onToggle: (scope: PermissionActionScope, checked: boolean) => void
}

function PermissionScopeActionControls({
  itemLabel,
  columns,
  values,
  onToggle,
}: PermissionScopeActionControlsProps) {
  return (
    <div className="flex items-end gap-5">
      {columns.map((column) => (
        <div key={column} className={scopeColumnClassName}>
          <Checkbox
            checked={values.includes(column)}
            onCheckedChange={(checked) => onToggle(column, checked === true)}
            size="sm"
            accentColor={scopeCheckboxAccent}
            aria-label={`${itemLabel} ${PERMISSION_SCOPE_COLUMN_LABELS[column]}`}
          />
          <span className="text-[11px] font-medium text-muted-foreground">
            {PERMISSION_SCOPE_COLUMN_LABELS[column]}
          </span>
        </div>
      ))}
    </div>
  )
}

type PermissionScopeRowProps = {
  item: PermissionScopeItem
  state: PermissionScopeState
  nested?: boolean
  expandable?: boolean
  expanded?: boolean
  onExpandedChange?: (expanded: boolean) => void
  onToggleEnabled?: (enabled: boolean) => void
  onAccessScopeChange?: (scope: PermissionAccessScope) => void
  onActionScopeToggle?: (scope: PermissionActionScope, checked: boolean) => void
}

export function PermissionScopeRow({
  item,
  state,
  nested = false,
  expandable = false,
  expanded = false,
  onExpandedChange,
  onToggleEnabled,
  onAccessScopeChange,
  onActionScopeToggle,
}: PermissionScopeRowProps) {
  const Icon = item.icon
  const isAccess = isPermissionAccessItem(item.columns)

  return (
    <div className="flex items-center justify-between gap-6">
      <div className={cn("flex min-w-0 items-center gap-2.5", nested ? "pl-1" : null)}>
        {!nested && onToggleEnabled ? (
          <Checkbox
            checked={state.enabled}
            onCheckedChange={(checked) => onToggleEnabled(checked === true)}
            size="sm"
            accentColor={scopeCheckboxAccent}
            aria-label={`Enable ${item.label}`}
          />
        ) : null}
        {nested ? <span className="size-1.5 shrink-0 rounded-full bg-neutral-300" aria-hidden /> : null}
        {Icon ? (
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#FBF4EA] text-primary">
            <Icon className="size-4" aria-hidden />
          </span>
        ) : null}
        {item.label ? (
          <span className="truncate text-sm font-semibold text-foreground">{item.label}</span>
        ) : null}
        {expandable ? (
          <button
            type="button"
            className="shrink-0 text-muted-foreground"
            aria-label={expanded ? `Collapse ${item.label}` : `Expand ${item.label}`}
            aria-expanded={expanded}
            onClick={() => onExpandedChange?.(!expanded)}
          >
            <ChevronDown className={cn("size-4 transition-transform", expanded ? "rotate-180" : undefined)} />
          </button>
        ) : null}
      </div>

      {isAccess && onAccessScopeChange ? (
        <PermissionScopeAccessControls
          itemId={item.id}
          columns={item.columns as PermissionAccessScope[]}
          value={state.accessScope}
          onChange={onAccessScopeChange}
        />
      ) : null}

      {!isAccess && onActionScopeToggle ? (
        <PermissionScopeActionControls
          itemLabel={item.label}
          columns={item.columns as PermissionActionScope[]}
          values={state.actionScopes}
          onToggle={onActionScopeToggle}
        />
      ) : null}
    </div>
  )
}

type PermissionScopeModuleCardProps = {
  children: React.ReactNode
  className?: string
}

export function PermissionScopeModuleCard({ children, className }: PermissionScopeModuleCardProps) {
  return (
    <div className={cn("rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3.5", className)}>
      {children}
    </div>
  )
}

type PermissionScopeNestedGroupProps = {
  item: PermissionScopeItem
  state: PermissionScopeState
  childStates: Record<string, PermissionScopeState>
  expanded: boolean
  onExpandedChange: (expanded: boolean) => void
  onToggleEnabled: (itemId: string, enabled: boolean) => void
  onAccessScopeChange: (itemId: string, scope: PermissionAccessScope) => void
  onActionScopeToggle: (itemId: string, scope: PermissionActionScope, checked: boolean) => void
}

export function PermissionScopeNestedGroup({
  item,
  state,
  childStates,
  expanded,
  onExpandedChange,
  onToggleEnabled,
  onAccessScopeChange,
  onActionScopeToggle,
}: PermissionScopeNestedGroupProps) {
  if (!item.children?.length) return null

  return (
    <PermissionScopeModuleCard className="space-y-3">
      <PermissionScopeRow
        item={item}
        state={state}
        expandable
        expanded={expanded}
        onExpandedChange={onExpandedChange}
        onToggleEnabled={(enabled) => onToggleEnabled(item.id, enabled)}
        onAccessScopeChange={(scope) => onAccessScopeChange(item.id, scope)}
      />

      {expanded ? (
        <div className="relative ml-[127px] space-y-4">
          <div className="absolute left-0 -top-[20px] h-[calc(100%+1px)] bottom-2 border-l border-neutral-300" aria-hidden />
          {item.children.map((child) => (
            <div key={child.id} className="relative pl-6">
              <div className="absolute left-0 top-1/2 w-6 -translate-y-1/2 border-t border-neutral-300" aria-hidden />
              <PermissionScopeRow
                item={child}
                state={childStates[child.id] ?? { enabled: false, accessScope: "", actionScopes: [] }}
                nested
                onActionScopeToggle={(scope, checked) => onActionScopeToggle(child.id, scope, checked)}
              />
            </div>
          ))}
        </div>
      ) : null}
    </PermissionScopeModuleCard>
  )
}

type PermissionScopeSectionCardProps = {
  title: string
  defaultOpen?: boolean
  children: React.ReactNode
}

export function PermissionScopeSectionCard({ title, defaultOpen = true, children }: PermissionScopeSectionCardProps) {
  if (!title) {
    return <div className="space-y-3">{children}</div>
  }

  return (
    <details className="group rounded-2xl border border-neutral-200 bg-neutral-50" open={defaultOpen}>
      <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-semibold text-foreground [&::-webkit-details-marker]:hidden">
        {title}
        <ChevronDown className="size-4 text-muted-foreground transition-transform group-open:rotate-180" />
      </summary>
      <div className="space-y-3 border-t border-neutral-200 px-3 py-3">{children}</div>
    </details>
  )
}

export { PERMISSION_SCOPE_ACCESS_COLUMNS }
