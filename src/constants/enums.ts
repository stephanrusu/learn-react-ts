export enum VisibilityFilter {
  ShowAll = "SHOW_ALL",
  ShowCompleted = "SHOW_COMPLETED",
  ShowActive = "SHOW_ACTIVE",
};

export enum Boards {
  toDo = 'To Do',
  inProgress = 'In Progress',
  inReview = 'In Review',
  done = 'Done',
}


export enum KanbanTypeFilter {
  all = 'All',
  bug = 'Bug',
  task = 'Task',
  design = 'Design',
};

export enum KanbanPriorityFilter {
  all = 'All',
  blocker = 'Blocker',
  critical = 'Critical',
  major = 'Major',
  minor = 'Minor',
  trivial = 'Trivial',
}
