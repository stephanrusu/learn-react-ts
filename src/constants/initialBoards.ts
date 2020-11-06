export enum TaskProprity {
  blocker = 'BLOCKER',
  critical = "CRITICAL",
  major = "MAJOR",
  minor = "MINOR",
  trivial = "TRIVIAL"
};

export enum TaskType {
  bug = "BUG",
  task = "TASK",
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
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: TaskType.task,
        project: 'Kanban Demo',
        priority: TaskProprity.major,
      },
      {
        uuid: '8e8v16b0a',
        date: 1604613600000,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: TaskType.design,
        project: 'Kanban Demo',
        priority: TaskProprity.critical,
      },
      {
        uuid: 'lud0xissi',
        date: 1604613600000,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: TaskType.bug,
        project: 'Kanban Demo',
        priority: TaskProprity.trivial,
      },
    ],
  },
  {
    uuid: 'wewoprlx1',
    date: 1604613600000,
    title: 'In progress',
    tasks: [
      {
        uuid: '98t5ma5pg',
        date: 1604613600000,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: TaskType.bug,
        project: 'Kanban Demo',
        priority: TaskProprity.major,
      },
      {
        uuid: 'hc49m900w',
        date: 1604613600000,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: TaskType.design,
        project: 'Kanban Demo',
        priority: TaskProprity.major,
      },
    ],
  },
  {
    uuid: 'sl0mm9cem',
    date: 1604613600000,
    title: 'In review',
    tasks: [
      {
        uuid: 'otvgpj19o',
        date: 1604613600000,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: TaskType.bug,
        project: 'Kanban Demo',
        priority: TaskProprity.blocker,
      },
    ],
  },
  {
    uuid: 'z73qbvdv1',
    date: 1604613600000,
    title: 'Done',
    tasks: [
      {
        uuid: 'boc7qorhc',
        date: 1604613600000,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: TaskType.task,
        project: 'Kanban Demo',
        priority: TaskProprity.critical,
      },
    ],
  }
];

export default initialBoards;
