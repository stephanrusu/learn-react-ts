export enum TaskProprity {
  blocker = 'BLOCKER',
  critical = "CRITICAL",
  major = "MAJOR",
  minor = "MINOR",
  trivial = "TRIVIAL"
};

export enum TaskType {
  task = "TASK",
  bug = "BUG",
  design = "DESIGN"
}

const initialBoards: Board[] = [
  {
    uuid: 'ntq5y153g',
    date: 1604613600000,
    title: 'To do',
    tasks: [
      {
        uuid: '8lvzs23uf',
        date: 1604613600000,
        title: 'Lorem ipsum dolor sit amet,',
        type: TaskType.task,
        project: 'Kanban Demo',
        priority: TaskProprity.major,
      },
      {
        uuid: '8e8v16b0a',
        date: 1604613600000,
        title: 'Lorem ipsum dolor sit amet,',
        type: TaskType.design,
        project: 'Kanban Demo',
        priority: TaskProprity.critical,
      }
    ],
  },
  {
    uuid: 'wewoprlx1',
    date: 1604613600000,
    title: 'In progress',
    tasks: [],
  },
  {
    uuid: 'sl0mm9cem',
    date: 1604613600000,
    title: 'In review',
    tasks: [],
  },
  {
    uuid: 'z73qbvdv1',
    date: 1604613600000,
    title: 'Done',
    tasks: [],
  }
];

export default initialBoards;
