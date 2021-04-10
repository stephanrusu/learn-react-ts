/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types*/
import { KanbanPriorityFilter, KanbanTypeFilter } from '../constants/enums';

export const getKeyValue = <T extends Record<string, unknown>, K extends keyof T>(obj: T, key: K): T[K] => obj[key];

export const applyFilterTask = (obj: ListTask, predicate: any) =>
  Object.keys(obj)
    .filter((key) => predicate(obj[key]))
    .reduce((res, key) => Object.assign(res, { [key]: obj[key] }), {});

export const displayFilters = (list: ListTask, priority: KanbanPriorityFilter, type: KanbanTypeFilter): ListTask => {
  let filteredTasks = list;

  if (priority !== KanbanPriorityFilter.all) {
    filteredTasks = applyFilterTask(list, (task: Task) => task.priority === priority);
  }

  if (type !== KanbanTypeFilter.all) {
    filteredTasks = applyFilterTask(filteredTasks, (task: Task) => task.type === type);
  }
  return filteredTasks;
};

export const getUuid = () => {
  return Math.random().toString(36).substr(2, 9);
};
