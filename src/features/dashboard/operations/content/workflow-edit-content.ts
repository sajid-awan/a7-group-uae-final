import type { Edge, Node } from "@xyflow/react"

import { OPERATIONS_APPROVER_OPTIONS } from "./operations-content"
import type { WorkflowAddNodeData, WorkflowStepData } from "./workflow-edit-types"

export const WORKFLOW_EDIT_PAGE_COPY = {
  title: "Workflow Edit",
  subtitle: "Manage all task types for tasks",
  addDrawerTitle: "Approver Settings",
  editDrawerTitle: "Approver Settings",
} as const

export const WORKFLOW_STEP_WIDTH = 340
export const WORKFLOW_STEP_HEIGHT = 72
/** Vertical distance between step tops in a chained column. */
export const WORKFLOW_ROW_SPACING = 160
/** Gap between a step bottom edge and the add button below it. */
export const WORKFLOW_ADD_OFFSET = 8
export const WORKFLOW_ADD_SIZE = 32

const WORKFLOW_CANVAS_MIN_WIDTH = 900
const WORKFLOW_CANVAS_MIN_HEIGHT = 620
const WORKFLOW_CANVAS_PADDING = 48

const DASHED_EDGE_STYLE = {
  stroke: "#D4D4D8",
  strokeWidth: 1.5,
  strokeDasharray: "6 6",
}

const APPROVER_AVATARS: Record<string, string> = {
  italian: "https://i.pravatar.cc/96?img=32",
  "dilshod-mansurov": "https://i.pravatar.cc/96?img=15",
  "muhammad-talal": "https://i.pravatar.cc/96?img=12",
  "john-wick": "https://i.pravatar.cc/96?img=11",
  rashad: "https://i.pravatar.cc/96?img=47",
}

export function getWorkflowStepDataFromApprover(approverId: string): WorkflowStepData {
  const option = OPERATIONS_APPROVER_OPTIONS.find((item) => item.value === approverId)
  const label = option?.label ?? "Approver"

  return {
    approverId,
    name: label,
    email: `${approverId.replace(/-/g, ".")}@a7group.com`,
    avatarUrl: APPROVER_AVATARS[approverId] ?? "https://i.pravatar.cc/96?img=11",
  }
}

function centerX(totalWidth = 900) {
  return (totalWidth - WORKFLOW_STEP_WIDTH) / 2
}

function createStepNode(id: string, position: { x: number; y: number }, data: WorkflowStepData): Node<WorkflowStepData> {
  return {
    id,
    type: "workflowStep",
    position,
    data,
    draggable: true,
    connectable: true,
  }
}

function createAddNode(
  id: string,
  parentStepId: string | null,
  placement: WorkflowAddNodeData["placement"],
  position: { x: number; y: number },
  data?: Partial<WorkflowAddNodeData>
): Node<WorkflowAddNodeData> {
  return {
    id,
    type: "workflowAdd",
    position,
    data: { parentStepId, placement, ...data },
    draggable: false,
    selectable: false,
  }
}

function createEdge(id: string, source: string, target: string): Edge {
  return {
    id,
    source,
    target,
    type: "smoothstep",
    style: DASHED_EDGE_STYLE,
    selectable: false,
    focusable: false,
    interactionWidth: 0,
  }
}

export function getWorkflowEditFlowInitialData(): { nodes: Node[]; edges: Edge[] } {
  const rootX = centerX()
  const leftX = 40
  const rightX = rootX + WORKFLOW_STEP_WIDTH + 80

  const rootData = getWorkflowStepDataFromApprover("john-wick")

  const nodes: Node[] = [
    createStepNode("step-root", { x: rootX, y: 56 }, rootData),
    createStepNode("step-left", { x: leftX, y: 220 }, getWorkflowStepDataFromApprover("dilshod-mansurov")),
    createStepNode("step-right", { x: rightX, y: 220 }, getWorkflowStepDataFromApprover("muhammad-talal")),
    createAddNode("add-right", "step-right", "below", {
      x: rightX + WORKFLOW_STEP_WIDTH / 2 - WORKFLOW_ADD_SIZE / 2,
      y: 300,
    }),
    createAddNode("add-left", "step-left", "below", {
      x: leftX + WORKFLOW_STEP_WIDTH / 2 - WORKFLOW_ADD_SIZE / 2,
      y: 300,
    }),
    createStepNode("step-child", { x: rightX, y: 380 }, getWorkflowStepDataFromApprover("rashad")),
    createAddNode("add-child", "step-child", "below", {
      x: rightX + WORKFLOW_STEP_WIDTH / 2 - WORKFLOW_ADD_SIZE / 2,
      y: 460,
    }),
  ]

  const edges: Edge[] = [
    createEdge("edge-root-left", "step-root", "step-left"),
    createEdge("edge-root-right", "step-root", "step-right"),
    createEdge("edge-right-child", "step-right", "step-child"),
  ]

  return { nodes: finalizeWorkflowNodes(nodes), edges }
}

export function isWorkflowStepNode(node: Node): node is Node<WorkflowStepData> {
  return node.type === "workflowStep"
}

export function isWorkflowAddNode(node: Node): node is Node<WorkflowAddNodeData> {
  return node.type === "workflowAdd"
}

export function getStepSubtreeIds(stepId: string, edges: Edge[]): string[] {
  const children = edges
    .filter((edge) => edge.source === stepId)
    .map((edge) => edge.target)
    .filter((targetId) => targetId.startsWith("step-"))

  return [stepId, ...children.flatMap((childId) => getStepSubtreeIds(childId, edges))]
}

export function deleteWorkflowStep(
  stepId: string,
  nodes: Node[],
  edges: Edge[]
): { nodes: Node[]; edges: Edge[] } {
  const deletedStep = nodes.find((node) => node.id === stepId)
  if (!deletedStep || !isWorkflowStepNode(deletedStep)) {
    return { nodes, edges }
  }

  const parentEdge = edges.find((edge) => edge.target === stepId && edge.source.startsWith("step-"))
  const parentStepId = parentEdge?.source ?? null

  if (!parentStepId) {
    const stepIdsToRemove = new Set(getStepSubtreeIds(stepId, edges))

    const nextNodes = nodes.filter((node) => {
      if (isWorkflowStepNode(node) && stepIdsToRemove.has(node.id)) return false
      if (isWorkflowAddNode(node) && node.data.parentStepId && stepIdsToRemove.has(node.data.parentStepId)) {
        return false
      }
      return true
    })

    const nextEdges = edges.filter(
      (edge) => !stepIdsToRemove.has(edge.source) && !stepIdsToRemove.has(edge.target)
    )

    return { nodes: finalizeWorkflowNodes(nextNodes), edges: nextEdges }
  }

  const childIds = edges
    .filter((edge) => edge.source === stepId && edge.target.startsWith("step-"))
    .map((edge) => edge.target)

  let nextNodes = nodes.filter((node) => {
    if (node.id === stepId && isWorkflowStepNode(node)) return false
    if (isWorkflowAddNode(node) && node.data.parentStepId === stepId) return false
    return true
  })

  let nextEdges = edges.filter((edge) => edge.source !== stepId && edge.target !== stepId)

  for (const childId of childIds) {
    nextEdges.push(createEdge(`edge-${parentStepId}-${childId}-${Date.now()}`, parentStepId, childId))
  }

  if (childIds.length === 0) {
    nextNodes.push(
      createAddNode(
        `add-replace-${Date.now()}`,
        parentStepId,
        "below",
        {
          x: deletedStep.position.x + WORKFLOW_STEP_WIDTH / 2 - WORKFLOW_ADD_SIZE / 2,
          y: deletedStep.position.y + WORKFLOW_STEP_HEIGHT + WORKFLOW_ADD_OFFSET,
        },
        {
          slotPosition: { x: deletedStep.position.x, y: deletedStep.position.y },
        }
      )
    )
  }

  return { nodes: finalizeWorkflowNodes(nextNodes), edges: nextEdges }
}

function getAddNodePosition(stepNode: Node<WorkflowStepData>, placement: WorkflowAddNodeData["placement"]) {
  if (placement === "above") {
    return {
      x: stepNode.position.x + WORKFLOW_STEP_WIDTH / 2 - WORKFLOW_ADD_SIZE / 2,
      y: stepNode.position.y - WORKFLOW_ADD_SIZE - WORKFLOW_ADD_OFFSET,
    }
  }

  return {
    x: stepNode.position.x + WORKFLOW_STEP_WIDTH / 2 - WORKFLOW_ADD_SIZE / 2,
    y: stepNode.position.y + WORKFLOW_STEP_HEIGHT + WORKFLOW_ADD_OFFSET,
  }
}

export function repositionWorkflowAddNodes(nodes: Node[]): Node[] {
  return nodes.map((node) => {
    if (!isWorkflowAddNode(node) || !node.data.parentStepId) return node

    const parent = nodes.find((item) => item.id === node.data.parentStepId)
    if (!parent || !isWorkflowStepNode(parent)) return node

    return {
      ...node,
      position: getAddNodePosition(parent, node.data.placement),
    }
  })
}

export function ensureCanvasPadding(nodes: Node[]): Node[] {
  if (nodes.length === 0) return nodes

  let minY = Infinity
  let minX = Infinity

  for (const node of nodes) {
    minY = Math.min(minY, node.position.y)
    minX = Math.min(minX, node.position.x)
  }

  const shiftY = minY < WORKFLOW_CANVAS_PADDING ? WORKFLOW_CANVAS_PADDING - minY : 0
  const shiftX = minX < WORKFLOW_CANVAS_PADDING ? WORKFLOW_CANVAS_PADDING - minX : 0

  if (shiftY === 0 && shiftX === 0) return nodes

  return nodes.map((node) => ({
    ...node,
    position: {
      x: node.position.x + shiftX,
      y: node.position.y + shiftY,
    },
  }))
}

function stripAboveAddNodes(nodes: Node[]): Node[] {
  return nodes.filter((node) => !(isWorkflowAddNode(node) && node.data.placement === "above"))
}

function finalizeWorkflowNodes(nodes: Node[]): Node[] {
  return repositionWorkflowAddNodes(ensureCanvasPadding(stripAboveAddNodes(nodes)))
}

function getStepPositionRelativeTo(
  reference: Node,
  placement: WorkflowAddNodeData["placement"]
): { x: number; y: number } {
  if (placement === "above") {
    return {
      x: reference.position.x,
      y: reference.position.y - WORKFLOW_ROW_SPACING,
    }
  }

  return {
    x: reference.position.x,
    y: reference.position.y + WORKFLOW_ROW_SPACING,
  }
}

function getDirectChildStepId(parentStepId: string, edges: Edge[]): string | null {
  const childEdge = edges.find(
    (edge) => edge.source === parentStepId && edge.target.startsWith("step-")
  )

  return childEdge?.target ?? null
}

function getStepDescendantIds(stepId: string, edges: Edge[]): string[] {
  const childId = getDirectChildStepId(stepId, edges)
  if (!childId) return []

  return [childId, ...getStepDescendantIds(childId, edges)]
}

function shiftSubtreeNodes(nodes: Node[], rootStepId: string, edges: Edge[], deltaY: number): Node[] {
  const stepIds = new Set([rootStepId, ...getStepDescendantIds(rootStepId, edges)])

  return nodes.map((node) => {
    if (stepIds.has(node.id)) {
      return { ...node, position: { ...node.position, y: node.position.y + deltaY } }
    }

    if (isWorkflowAddNode(node) && node.data.parentStepId && stepIds.has(node.data.parentStepId)) {
      return { ...node, position: { ...node.position, y: node.position.y + deltaY } }
    }

    return node
  })
}

export function addWorkflowStep(
  addNode: Node<WorkflowAddNodeData>,
  nodes: Node[],
  edges: Edge[],
  stepData: WorkflowStepData
): { nodes: Node[]; edges: Edge[] } {
  const parentStepId = addNode.data.parentStepId
  if (!parentStepId) {
    return { nodes, edges }
  }

  const parentStep = nodes.find((node) => node.id === parentStepId)
  if (!parentStep || !isWorkflowStepNode(parentStep)) {
    return { nodes, edges }
  }

  const newStepId = `step-${nodes.filter((node) => isWorkflowStepNode(node)).length + 1}-${Date.now()}`
  const newAddId = `add-${Date.now()}`
  const placement = addNode.data.placement
  const existingChildId = getDirectChildStepId(parentStepId, edges)
  const existingChild = existingChildId
    ? nodes.find((node) => node.id === existingChildId)
    : undefined

  const newStepPosition = addNode.data.slotPosition
    ? addNode.data.slotPosition
    : placement === "above"
      ? getStepPositionRelativeTo(parentStep, "above")
      : existingChild && isWorkflowStepNode(existingChild)
        ? { x: existingChild.position.x, y: existingChild.position.y }
        : getStepPositionRelativeTo(parentStep, "below")

  const newStep = createStepNode(newStepId, newStepPosition, stepData)
  let nextNodes = nodes.filter((node) => node.id !== addNode.id)
  let nextEdges = [...edges]

  if (placement === "above") {
    const incomingEdges = edges.filter((edge) => edge.target === parentStepId)
    nextEdges = edges.filter((edge) => edge.target !== parentStepId)
    incomingEdges.forEach((edge) => {
      nextEdges.push(createEdge(`edge-${edge.source}-${newStepId}`, edge.source, newStepId))
    })
    nextEdges.push(createEdge(`edge-${newStepId}-${parentStepId}`, newStepId, parentStepId))

    const newAddBelow = createAddNode(newAddId, newStepId, "below", getAddNodePosition(newStep, "below"))
    nextNodes.push(newStep, newAddBelow)
  } else {
    const newAddNode = createAddNode(newAddId, newStepId, "below", getAddNodePosition(newStep, "below"))

    if (existingChildId && !addNode.data.slotPosition) {
      nextEdges = edges.filter(
        (edge) => !(edge.source === parentStepId && edge.target === existingChildId)
      )
      nextEdges.push(createEdge(`edge-${parentStepId}-${newStepId}`, parentStepId, newStepId))
      nextEdges.push(createEdge(`edge-${newStepId}-${existingChildId}`, newStepId, existingChildId))
      nextNodes = shiftSubtreeNodes(nextNodes, existingChildId, edges, WORKFLOW_ROW_SPACING)
    } else {
      nextEdges.push(createEdge(`edge-${parentStepId}-${newStepId}`, parentStepId, newStepId))
    }

    nextNodes.push(newStep, newAddNode)
  }

  return { nodes: finalizeWorkflowNodes(nextNodes), edges: nextEdges }
}

export function getWorkflowFlowContentSize(nodes: Node[]): { width: number; height: number } {
  if (nodes.length === 0) {
    return { width: WORKFLOW_CANVAS_MIN_WIDTH, height: WORKFLOW_CANVAS_MIN_HEIGHT }
  }

  let minX = Infinity
  let minY = Infinity
  let maxX = 0
  let maxY = 0

  for (const node of nodes) {
    const width = isWorkflowAddNode(node) ? WORKFLOW_ADD_SIZE : WORKFLOW_STEP_WIDTH
    const height = isWorkflowAddNode(node) ? WORKFLOW_ADD_SIZE : WORKFLOW_STEP_HEIGHT

    minX = Math.min(minX, node.position.x)
    minY = Math.min(minY, node.position.y)
    maxX = Math.max(maxX, node.position.x + width)
    maxY = Math.max(maxY, node.position.y + height)
  }

  return {
    width: Math.max(WORKFLOW_CANVAS_MIN_WIDTH, maxX - minX + WORKFLOW_CANVAS_PADDING * 2),
    height: Math.max(WORKFLOW_CANVAS_MIN_HEIGHT, maxY - minY + WORKFLOW_CANVAS_PADDING * 2),
  }
}

export function updateWorkflowStep(
  stepId: string,
  nodes: Node[],
  stepData: WorkflowStepData
): Node[] {
  return nodes.map((node) => (node.id === stepId && isWorkflowStepNode(node) ? { ...node, data: stepData } : node))
}

function getStepAncestorIds(stepId: string, edges: Edge[]): string[] {
  const parentId = getWorkflowStepParentId(stepId, edges)
  if (!parentId) return []
  return [parentId, ...getStepAncestorIds(parentId, edges)]
}

function wouldCreateWorkflowCycle(sourceId: string, targetId: string, edges: Edge[]) {
  return getStepAncestorIds(sourceId, edges).includes(targetId)
}

function getWorkflowStepParentId(stepId: string, edges: Edge[]) {
  return edges.find((edge) => edge.target === stepId && edge.source.startsWith("step-"))?.source ?? null
}

function ensureBelowAddNode(nodes: Node[], stepId: string) {
  const hasBelowAdd = nodes.some(
    (node) => isWorkflowAddNode(node) && node.data.parentStepId === stepId && node.data.placement === "below"
  )

  if (hasBelowAdd) {
    return nodes
  }

  const stepNode = nodes.find((node) => node.id === stepId)
  if (!stepNode || !isWorkflowStepNode(stepNode)) {
    return nodes
  }

  return [
    ...nodes,
    createAddNode(`add-${stepId}-${Date.now()}`, stepId, "below", getAddNodePosition(stepNode, "below")),
  ]
}

function ensureReplacementAddAfterChildRemoved(
  nodes: Node[],
  edges: Edge[],
  parentStepId: string,
  removedChild: Node<WorkflowStepData>
) {
  const stillHasChildren = edges.some(
    (edge) => edge.source === parentStepId && edge.target.startsWith("step-")
  )

  if (stillHasChildren) {
    return nodes
  }

  const alreadyHasReplacement = nodes.some(
    (node) =>
      isWorkflowAddNode(node) &&
      node.data.parentStepId === parentStepId &&
      Boolean(node.data.slotPosition)
  )

  if (alreadyHasReplacement) {
    return nodes
  }

  return [
    ...nodes,
    createAddNode(
      `add-replace-${Date.now()}`,
      parentStepId,
      "below",
      {
        x: removedChild.position.x + WORKFLOW_STEP_WIDTH / 2 - WORKFLOW_ADD_SIZE / 2,
        y: removedChild.position.y + WORKFLOW_STEP_HEIGHT + WORKFLOW_ADD_OFFSET,
      },
      {
        slotPosition: { x: removedChild.position.x, y: removedChild.position.y },
      }
    ),
  ]
}

export function connectWorkflowSteps(
  connection: { source?: string | null; target?: string | null },
  nodes: Node[],
  edges: Edge[]
): { nodes: Node[]; edges: Edge[] } {
  const source = connection.source
  const target = connection.target

  if (!source || !target || source === target) {
    return { nodes, edges }
  }

  const sourceNode = nodes.find((node) => node.id === source)
  const targetNode = nodes.find((node) => node.id === target)

  if (!sourceNode || !targetNode || !isWorkflowStepNode(sourceNode) || !isWorkflowStepNode(targetNode)) {
    return { nodes, edges }
  }

  if (wouldCreateWorkflowCycle(source, target, edges)) {
    return { nodes, edges }
  }

  const previousParentId = getWorkflowStepParentId(target, edges)

  if (previousParentId === source) {
    return { nodes, edges }
  }

  const nextEdges = [
    ...edges.filter((edge) => !(edge.target === target && edge.source.startsWith("step-"))),
    createEdge(`edge-${source}-${target}-${Date.now()}`, source, target),
  ]

  const nextNodes = syncWorkflowAfterReparent(nodes, nextEdges, target, previousParentId, targetNode)

  return { nodes: nextNodes, edges: nextEdges }
}

export function syncWorkflowAfterReparent(
  nodes: Node[],
  edges: Edge[],
  targetId: string,
  previousParentId: string | null,
  targetNode?: Node<WorkflowStepData>
): Node[] {
  const resolvedTargetNode =
    targetNode ??
    nodes.find((node) => node.id === targetId && isWorkflowStepNode(node))

  if (!resolvedTargetNode || !isWorkflowStepNode(resolvedTargetNode)) {
    return nodes
  }

  let nextNodes = [...nodes]

  if (previousParentId) {
    nextNodes = ensureReplacementAddAfterChildRemoved(
      nextNodes,
      edges,
      previousParentId,
      resolvedTargetNode
    )
  }

  return finalizeWorkflowNodes(ensureBelowAddNode(nextNodes, targetId))
}

export function isValidWorkflowConnection(
  connection: { source?: string | null; target?: string | null },
  edges: Edge[]
) {
  const source = connection.source
  const target = connection.target

  if (!source || !target || source === target) {
    return false
  }

  if (getWorkflowStepParentId(target, edges) === source) {
    return false
  }

  return !wouldCreateWorkflowCycle(source, target, edges)
}
