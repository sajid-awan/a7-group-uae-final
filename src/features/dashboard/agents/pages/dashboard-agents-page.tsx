"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  CalendarDays,
  Download,
  Pencil,
  Plus,
  RefreshCw,
  Trash2,
} from "lucide-react";

import type {
  DashboardAgentRow,
  DashboardAgentStatus,
} from "../content/dashboard-agents-types";
import { DashboardAgentsGridView } from "../../components/dashboard-agents-grid-view";
import { DashboardToolbarIconButton } from "../../components/dashboard-toolbar-icon-button";
import { DashboardViewModeToolbar } from "../../components/dashboard-view-mode-toolbar";
import type { DashboardViewMode } from "@/features/dashboard/content/dashboard-view-mode";
import {
  DASHBOARD_HEADER_ACTION_BUTTON_CLASSNAME,
  DASHBOARD_HEADER_OUTLINE_BUTTON_CLASSNAME,
  DASHBOARD_TABLE_ROW_CLASSNAME,
  DASHBOARD_TABLE_WRAPPER_CLASSNAME,
} from "@/features/dashboard/content/dashboard-view-mode";
import { getInitials } from "@/shared/lib/get-initials";
import {
  dashboardAgentDetailPath,
  dashboardAgentEditPath,
} from "@/shared/lib/constants/routes";
import { cn } from "@/shared/lib/cn";
import { ActionTooltip } from "@/shared/ui/action-tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import { ListingPagination } from "@/shared/ui/listing-pagination";
import { Switch } from "@/shared/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/shared/ui/tabs";

const TABLE_PAGE_SIZE = 11;
const GRID_PAGE_SIZE = 12;

type DashboardAgentsViewMode = DashboardViewMode;

const tabListClassName =
  "h-auto w-full justify-start gap-6 rounded-none border-b border-border bg-transparent p-0";
const tabTriggerClassName =
  "rounded-none px-0 pb-3 font-inter text-sm data-[state=active]:text-primary";

export type DashboardAgentsPageProps = {
  agents: DashboardAgentRow[];
  className?: string;
};

function filterAgents(
  agents: DashboardAgentRow[],
  tab: DashboardAgentStatus,
  query: string,
) {
  const normalizedQuery = query.trim().toLowerCase();

  return agents.filter((agent) => {
    if (agent.status !== tab) return false;
    if (!normalizedQuery) return true;

    return (
      agent.name.toLowerCase().includes(normalizedQuery) ||
      agent.email.toLowerCase().includes(normalizedQuery) ||
      agent.mobile.toLowerCase().includes(normalizedQuery)
    );
  });
}

export function DashboardAgentsPage({
  agents: initialAgents,
  className,
}: DashboardAgentsPageProps) {
  const [agents, setAgents] = useState<DashboardAgentRow[]>(() =>
    initialAgents.map((agent) => ({
      ...agent,
      isActive: agent.status === "active",
    })),
  );
  const [activeTab, setActiveTab] = useState<DashboardAgentStatus>("active");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [viewMode, setViewMode] = useState<DashboardAgentsViewMode>("table");

  const pageSize = viewMode === "grid" ? GRID_PAGE_SIZE : TABLE_PAGE_SIZE;

  const filteredAgents = useMemo(
    () => filterAgents(agents, activeTab, search),
    [agents, activeTab, search],
  );

  const pageCount = Math.max(1, Math.ceil(filteredAgents.length / pageSize));
  const safePage = Math.min(page, pageCount);

  const visibleAgents = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return filteredAgents.slice(start, start + pageSize);
  }, [filteredAgents, pageSize, safePage]);

  const handleTabChange = (value: string) => {
    setActiveTab(value as DashboardAgentStatus);
    setPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const handleToggleActive = (
    targetAgent: DashboardAgentRow,
    checked: boolean,
  ) => {
    setAgents((current) =>
      current.map((agent) =>
        agent.id === targetAgent.id &&
        agent.email === targetAgent.email &&
        agent.mobile === targetAgent.mobile
          ? { ...agent, isActive: checked }
          : agent,
      ),
    );
  };

  const handleDeleteAgent = (agentId: string) => {
    setAgents((current) => current.filter((agent) => agent.id !== agentId));
  };

  const handleViewModeChange = (mode: DashboardAgentsViewMode) => {
    setViewMode(mode);
    setPage(1);
  };

  return (
    <div className={cn("space-y-6 p-4 sm:p-6 font-inter", className)}>
      <section className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-inter text-2xl font-semibold text-black">
            All Agents
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Lorem Ipsum is simply dummy text industry.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            className={DASHBOARD_HEADER_OUTLINE_BUTTON_CLASSNAME}
            aria-label="Selected date: Today"
          >
            <CalendarDays className="size-4 text-muted-foreground" aria-hidden />
            Today
          </Button>
          <Button
            type="button"
            size="sm"
            className={DASHBOARD_HEADER_ACTION_BUTTON_CLASSNAME}
          >
            <Plus className="size-4" aria-hidden />
            Add New Agent
          </Button>
        </div>
      </section>

      <Tabs value={activeTab} onValueChange={handleTabChange}>
        <TabsList variant="line" className={tabListClassName}>
          <TabsTrigger
            variant="line"
            value="active"
            className={tabTriggerClassName}
          >
            Active Agents
          </TabsTrigger>
          <TabsTrigger
            variant="line"
            value="archived"
            className={tabTriggerClassName}
          >
            Archived Agents
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <DashboardViewModeToolbar
        searchValue={search}
        onSearchChange={handleSearchChange}
        searchPlaceholder="Search for agents"
        searchAriaLabel="Search for agents"
        viewMode={viewMode}
        onViewModeChange={handleViewModeChange}
        trailingActions={
          <>
            <DashboardToolbarIconButton label="Download">
              <Download className="size-3.5" />
            </DashboardToolbarIconButton>
            <DashboardToolbarIconButton label="Refresh">
              <RefreshCw className="size-3.5" />
            </DashboardToolbarIconButton>
          </>
        }
      />

      {viewMode === "grid" ? (
        <DashboardAgentsGridView
          agents={visibleAgents}
          page={safePage}
          pageCount={pageCount}
          onPageChange={setPage}
        />
      ) : (
        <div className={DASHBOARD_TABLE_WRAPPER_CLASSNAME}>
          <Table>
            <TableHeader>
              <TableRow
                className={cn(
                  DASHBOARD_TABLE_ROW_CLASSNAME,
                  "hover:bg-transparent",
                )}
              >
                <TableHead className="min-w-[240px] font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Full Name
                </TableHead>
                <TableHead className="min-w-[140px] font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Mobile
                </TableHead>
                <TableHead className="text-center font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Listings
                </TableHead>
                <TableHead className="text-center font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Leads
                </TableHead>
                <TableHead className="text-center font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Calls
                </TableHead>
                <TableHead className="text-center font-inter text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Whatsapp
                </TableHead>
                <TableHead className="w-[120px] text-right">
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {visibleAgents.length === 0 ? (
                <TableRow className={DASHBOARD_TABLE_ROW_CLASSNAME}>
                  <TableCell
                    colSpan={7}
                    className="py-10 text-center text-sm text-muted-foreground"
                  >
                    No agents found.
                  </TableCell>
                </TableRow>
              ) : (
                visibleAgents.map((agent) => (
                  <TableRow
                    key={agent.id}
                    className={cn(DASHBOARD_TABLE_ROW_CLASSNAME, "group")}
                  >
                    <TableCell>
                      <Link
                        href={dashboardAgentDetailPath(agent.id)}
                        className="flex items-center gap-3 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <Avatar size="md" shape="circle">
                          <AvatarImage src={agent.imageUrl} alt={agent.name} />
                          <AvatarFallback>
                            {getInitials(agent.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="min-w-0">
                          <p className="truncate font-inter text-sm font-semibold uppercase text-foreground group-hover:text-primary">
                            {agent.name}
                          </p>
                          <p className="truncate font-inter text-xs text-muted-foreground">
                            {agent.email}
                          </p>
                        </div>
                      </Link>
                    </TableCell>
                    <TableCell className="whitespace-nowrap font-inter text-sm text-foreground">
                      {agent.mobile}
                    </TableCell>
                    <TableCell className="text-center font-inter text-sm text-foreground">
                      {agent.listings}
                    </TableCell>
                    <TableCell className="text-center font-inter text-sm text-foreground">
                      {agent.leads}
                    </TableCell>
                    <TableCell className="text-center font-inter text-sm text-foreground">
                      {agent.calls}
                    </TableCell>
                    <TableCell className="text-center font-inter text-sm text-foreground">
                      {agent.whatsapp}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center justify-end gap-1">
                        <ActionTooltip
                          label={agent.isActive ? "Deactivate" : "Activate"}
                        >
                          <span className="inline-flex">
                            <Switch
                              id={`agent-active-${agent.id}-${agent.email}`}
                              checked={agent.isActive}
                              onCheckedChange={(checked) =>
                                handleToggleActive(agent, checked === true)
                              }
                              aria-label={`Toggle ${agent.name} active status`}
                            />
                          </span>
                        </ActionTooltip>
                        <ActionTooltip label="Delete">
                          <Button
                            type="button"
                            variant="ghost"
                            size="xs"
                            shape="pill"
                            className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
                            aria-label={`Delete ${agent.name}`}
                            onClick={() => handleDeleteAgent(agent.id)}
                          >
                            <Trash2 className="size-4" />
                          </Button>
                        </ActionTooltip>
                        <ActionTooltip label="Edit">
                          <Button
                            asChild
                            variant="ghost"
                            size="xs"
                            shape="pill"
                            className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
                          >
                            <Link
                              href={dashboardAgentEditPath(agent.id)}
                              aria-label={`Edit ${agent.name}`}
                            >
                              <Pencil className="size-4" />
                            </Link>
                          </Button>
                        </ActionTooltip>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>

          {filteredAgents.length > pageSize ? (
            <div className="border-t border-neutral-200 px-4 py-4">
              <ListingPagination
                page={safePage}
                pageCount={pageCount}
                onPageChange={setPage}
              />
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

DashboardAgentsPage.displayName = "DashboardAgentsPage";
