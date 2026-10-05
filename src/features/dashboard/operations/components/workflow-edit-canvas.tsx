"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  ReactFlow,
  ReactFlowProvider,
  reconnectEdge,
  useEdgesState,
  useNodesState,
  type Connection,
  type Edge,
  type Node,
  type NodeTypes,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"

import {
  addWorkflowStep,
  connectWorkflowSteps,
  deleteWorkflowStep,
  getWorkflowEditFlowInitialData,
  getWorkflowFlowContentSize,
  getWorkflowStepDataFromApprover,
  isValidWorkflowConnection,
  isWorkflowAddNode,
  isWorkflowStepNode,
  repositionWorkflowAddNodes,
  syncWorkflowAfterReparent,
  updateWorkflowStep,
  WORKFLOW_EDIT_PAGE_COPY,
} from "../content/workflow-edit-content"
import type { WorkflowStepDrawerMode } from "../content/workflow-edit-types"
import {
  attachWorkflowNodeActions,
  type WorkflowNodeActions,
} from "../utils/workflow-edit-node-actions"
import { WorkflowAddNode } from "./workflow-add-node"
import { WorkflowStepDrawer } from "./workflow-step-drawer"
import { WorkflowStepNode } from "./workflow-step-node"
import { cn } from "@/shared/lib/cn"

const nodeTypes: NodeTypes = {
  workflowStep: WorkflowStepNode,
  workflowAdd: WorkflowAddNode,
}

const defaultEdgeOptions = {
  type: "smoothstep" as const,
  selectable: false,
  focusable: false,
  reconnectable: true,
  interactionWidth: 24,
  style: {
    stroke: "#D4D4D8",
    strokeWidth: 1.5,
    strokeDasharray: "6 6",
  },
}

type DrawerState = {
  mode: WorkflowStepDrawerMode
  stepId?: string
  addNodeId?: string
  approverId: string
}

const closedDrawerState: DrawerState = {
  mode: "edit",
  approverId: "",
}

export type WorkflowEditCanvasProps = {
  className?: string
  initialFlowData?: { nodes: Node[]; edges: Edge[] }
  addDrawerTitle?: string
  editDrawerTitle?: string
}

function WorkflowEditCanvasInner({
  className,
  initialFlowData,
  addDrawerTitle,
  editDrawerTitle,
}: WorkflowEditCanvasProps) {
  const initialData = useMemo(
    () => initialFlowData ?? getWorkflowEditFlowInitialData(),
    [initialFlowData]
  )
  const [nodes, setNodes, onNodesChange] = useNodesState(initialData.nodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialData.edges)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [drawerState, setDrawerState] = useState<DrawerState>(closedDrawerState)

  const nodesRef = useRef(nodes)
  const edgesRef = useRef(edges)
  nodesRef.current = nodes
  edgesRef.current = edges

  const withActions = useCallback(
    (nextNodes: Node[]) => attachWorkflowNodeActions(nextNodes, actionsRef),
    []
  )

  const actionsRef = useRef<WorkflowNodeActions>({
    onEditStep: () => {},
    onDeleteStep: () => {},
    onAddStep: () => {},
  })

  actionsRef.current = {
    onEditStep: (stepId) => {
      const stepNode = nodesRef.current.find((node) => node.id === stepId)
      if (!stepNode || !isWorkflowStepNode(stepNode)) return

      setDrawerState({
        mode: "edit",
        stepId,
        approverId: stepNode.data.approverId,
      })
      setDrawerOpen(true)
    },
    onDeleteStep: (stepId) => {
      const result = deleteWorkflowStep(stepId, nodesRef.current, edgesRef.current)
      setNodes(() => withActions(result.nodes))
      setEdges(() => result.edges)
    },
    onAddStep: (addNodeId) => {
      const addNode = nodesRef.current.find((node) => node.id === addNodeId)
      if (!addNode || !isWorkflowAddNode(addNode)) return

      setDrawerState({
        mode: "add",
        addNodeId,
        approverId: "john-wick",
      })
      setDrawerOpen(true)
    },
  }

  const handleSaveDrawer = useCallback(
    (approverId: string) => {
      const stepData = getWorkflowStepDataFromApprover(approverId)

      if (drawerState.mode === "edit" && drawerState.stepId) {
        setNodes((current) => withActions(updateWorkflowStep(drawerState.stepId!, current, stepData)))
        return
      }

      if (drawerState.mode === "add" && drawerState.addNodeId) {
        const addNode = nodesRef.current.find((node) => node.id === drawerState.addNodeId)
        if (!addNode || !isWorkflowAddNode(addNode)) return

        const result = addWorkflowStep(addNode, nodesRef.current, edgesRef.current, stepData)
        setNodes(withActions(result.nodes))
        setEdges(result.edges)
      }
    },
    [drawerState, setEdges, setNodes, withActions]
  )

  const handleConnect = useCallback(
    (connection: Connection) => {
      const result = connectWorkflowSteps(connection, nodesRef.current, edgesRef.current)
      setNodes(() => withActions(result.nodes))
      setEdges(() => result.edges)
    },
    [setEdges, setNodes, withActions]
  )

  const handleReconnect = useCallback(
    (oldEdge: Edge, newConnection: Connection) => {
      if (!newConnection.source || !newConnection.target) {
        return
      }

      const previousParentId =
        edgesRef.current.find(
          (edge) => edge.target === oldEdge.target && edge.source.startsWith("step-")
        )?.source ?? null

      const nextEdges = reconnectEdge(oldEdge, newConnection, edgesRef.current)
      const targetNode = nodesRef.current.find((node) => node.id === newConnection.target)

      const nextNodes = syncWorkflowAfterReparent(
        nodesRef.current,
        nextEdges,
        newConnection.target,
        previousParentId,
        targetNode && isWorkflowStepNode(targetNode) ? targetNode : undefined
      )

      setNodes(() => withActions(nextNodes))
      setEdges(() => nextEdges)
    },
    [setEdges, setNodes, withActions]
  )

  const isValidConnection = useCallback((connection: Edge | Connection) => {
    const source = nodesRef.current.find((node) => node.id === connection.source)
    const target = nodesRef.current.find((node) => node.id === connection.target)

    if (!source || !target || !isWorkflowStepNode(source) || !isWorkflowStepNode(target)) {
      return false
    }

    return isValidWorkflowConnection(connection, edgesRef.current)
  }, [])

  const handleNodeDragStop = useCallback(() => {
    setNodes((current) => withActions(repositionWorkflowAddNodes(current)))
  }, [setNodes, withActions])

  useEffect(() => {
    setNodes((current) => withActions(current))
  }, [setNodes, withActions])

  const contentSize = useMemo(() => getWorkflowFlowContentSize(nodes), [nodes])

  return (
    <>
      <div
        className={cn(
          "workflow-edit-canvas h-[min(80vh,900px)] min-h-[620px] overflow-auto rounded-3xl border border-neutral-200 bg-[#F7F7F8]",
          className
        )}
      >
        <div
          className="relative"
          style={{ width: contentSize.width, height: contentSize.height, minWidth: "100%" }}
        >
          <ReactFlow
            nodes={nodes as Node[]}
            edges={edges as Edge[]}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            defaultEdgeOptions={defaultEdgeOptions}
            defaultViewport={{ x: 0, y: 0, zoom: 1 }}
            minZoom={1}
            maxZoom={1}
            nodesDraggable
            nodesConnectable
            edgesReconnectable
            reconnectRadius={24}
            onConnect={handleConnect}
            onReconnect={handleReconnect}
            isValidConnection={isValidConnection}
            onNodeDragStop={handleNodeDragStop}
            elementsSelectable={false}
            edgesFocusable={false}
            nodesFocusable={false}
            panOnDrag={false}
            panOnScroll={false}
            zoomOnScroll={false}
            zoomOnPinch={false}
            zoomOnDoubleClick={false}
            selectNodesOnDrag={false}
            preventScrolling={false}
            proOptions={{ hideAttribution: true }}
            style={{ width: "100%", height: "100%" }}
            className="bg-[#F7F7F8] [&_.react-flow__handle]:!size-3 [&_.react-flow__handle]:!border-2 [&_.react-flow__handle]:!border-white [&_.react-flow__handle]:!bg-neutral-400 [&_.react-flow__handle]:hover:!bg-primary [&_.react-flow__node]:z-10"
          />
        </div>
      </div>

      <WorkflowStepDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        mode={drawerState.mode}
        approverId={drawerState.approverId}
        title={
          drawerState.mode === "add"
            ? (addDrawerTitle ?? WORKFLOW_EDIT_PAGE_COPY.addDrawerTitle)
            : (editDrawerTitle ?? WORKFLOW_EDIT_PAGE_COPY.editDrawerTitle)
        }
        onSave={handleSaveDrawer}
      />
    </>
  )
}

export function WorkflowEditCanvas(props: WorkflowEditCanvasProps) {
  return (
    <ReactFlowProvider>
      <WorkflowEditCanvasInner {...props} />
    </ReactFlowProvider>
  )
}

WorkflowEditCanvas.displayName = "WorkflowEditCanvas"
