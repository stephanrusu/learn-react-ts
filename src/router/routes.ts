export const ROUTE_ROOT = `/`;
export const ROUTE_TODO = `${ROUTE_ROOT}todo`;
export const ROUTE_CALENDAR = `${ROUTE_ROOT}calendar`;
export const ROUTE_ARTICLE = `${ROUTE_ROOT}article`;

export const ROUTE_KANBAN = `${ROUTE_ROOT}kanban`;
export const ROUTE_KANBAN_PROJECT = `${ROUTE_KANBAN}/project`;
export const ROUTE_KANBAN_CREATE = `${ROUTE_KANBAN}/create`;
export const ROUTE_KANBAN_TASK_SIMPLE = `${ROUTE_KANBAN}/view`;
export const ROUTE_KANBAN_TASK = `${ROUTE_KANBAN_TASK_SIMPLE}/:taskId`;
export const ROUTE_KANBAN_EDIT_SIMPLE = `${ROUTE_KANBAN}/edit`;
export const ROUTE_KANBAN_EDIT = `${ROUTE_KANBAN_EDIT_SIMPLE}/:taskId`;
