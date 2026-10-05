"use client"

import { useState } from "react"

import {
  isPermissionAccessItem,
  PERMISSION_SCOPE_SECTIONS,
  type PermissionAccessScope,
  type PermissionActionScope,
  type PermissionScopesFormValues,
} from "../content/permissions-scopes-content"
import {
  PermissionScopeModuleCard,
  PermissionScopeNestedGroup,
  PermissionScopeRow,
  PermissionScopeSectionCard,
} from "./permission-scopes-panel"
import { cn } from "@/shared/lib/cn"

export type PermissionScopesPanelProps = {
  value: PermissionScopesFormValues
  onChange: (value: PermissionScopesFormValues) => void
  className?: string
}

export function PermissionScopesPanel({ value, onChange, className }: PermissionScopesPanelProps) {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {}
    PERMISSION_SCOPE_SECTIONS.forEach((section) => {
      section.items.forEach((item) => {
        if (item.defaultExpanded) {
          initial[item.id] = true
        }
      })
    })
    return initial
  })

  const updateItem = (
    itemId: string,
    updater: (current: PermissionScopesFormValues["items"][string]) => PermissionScopesFormValues["items"][string]
  ) => {
    const current = value.items[itemId]
    if (!current) return

    onChange({
      ...value,
      items: {
        ...value.items,
        [itemId]: updater(current),
      },
    })
  }

  const handleToggleEnabled = (itemId: string, enabled: boolean) => {
    updateItem(itemId, (current) => ({ ...current, enabled }))
  }

  const handleAccessScopeChange = (itemId: string, scope: PermissionAccessScope) => {
    updateItem(itemId, (current) => ({ ...current, accessScope: scope }))
  }

  const handleActionScopeToggle = (itemId: string, scope: PermissionActionScope, checked: boolean) => {
    updateItem(itemId, (current) => ({
      ...current,
      actionScopes: checked
        ? [...current.actionScopes, scope]
        : current.actionScopes.filter((entry) => entry !== scope),
    }))
  }

  return (
    <div className={cn("space-y-4", className)}>
      {PERMISSION_SCOPE_SECTIONS.map((section) => (
        <PermissionScopeSectionCard key={section.id} title={section.label} defaultOpen={section.defaultOpen}>
          <div className="space-y-3">
            {section.items.map((item) =>
              item.children?.length ? (
                <PermissionScopeNestedGroup
                  key={item.id}
                  item={item}
                  state={value.items[item.id] ?? { enabled: false, accessScope: "", actionScopes: [] }}
                  childStates={value.items}
                  expanded={expandedItems[item.id] ?? false}
                  onExpandedChange={(expanded) =>
                    setExpandedItems((current) => ({ ...current, [item.id]: expanded }))
                  }
                  onToggleEnabled={handleToggleEnabled}
                  onAccessScopeChange={handleAccessScopeChange}
                  onActionScopeToggle={handleActionScopeToggle}
                />
              ) : (
                <PermissionScopeModuleCard key={item.id}>
                  <PermissionScopeRow
                    item={item}
                    state={value.items[item.id] ?? { enabled: false, accessScope: "", actionScopes: [] }}
                    onToggleEnabled={(enabled) => handleToggleEnabled(item.id, enabled)}
                    onAccessScopeChange={
                      isPermissionAccessItem(item.columns)
                        ? (scope) => handleAccessScopeChange(item.id, scope)
                        : undefined
                    }
                    onActionScopeToggle={
                      !isPermissionAccessItem(item.columns)
                        ? (scope, checked) => handleActionScopeToggle(item.id, scope, checked)
                        : undefined
                    }
                  />
                </PermissionScopeModuleCard>
              )
            )}
          </div>
        </PermissionScopeSectionCard>
      ))}
    </div>
  )
}

PermissionScopesPanel.displayName = "PermissionScopesPanel"
