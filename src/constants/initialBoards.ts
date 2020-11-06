export enum TaskProprity {
  blocker = 'Blocker',
  critical = "Critical",
  major = "Major",
  minor = "Minor",
  trivial = "Trivial",
};

export enum TaskType {
  bug = "Bug",
  task = "Task",
  design = "Design",
}

export enum Boards {
  toDo = "To Do",
  inProgress = "In Progress",
  inReview = "In Review",
  done = "Done",
}

const initialBoards: Board[] = [
  {
    uuid: 'ntq5y153g',
    date: 1604613600000,
    title: Boards.toDo,
    color: 'is-link',
    allowNew: true,
    tasks: [
      {
        uuid: '8lvzs23uf',
        date: 1604613600000,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: TaskType.task,
        project: 'Kanban',
        priority: TaskProprity.major,
      },
      {
        uuid: '8e8v16b0a',
        date: 1604613600000,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: TaskType.design,
        project: 'Kanban',
        priority: TaskProprity.critical,
      },
      {
        uuid: 'lud0xissi',
        date: 1604613600000,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: TaskType.bug,
        project: 'Kanban',
        priority: TaskProprity.trivial,
      },
    ],
  },
  {
    uuid: 'wewoprlx1',
    date: 1604613600000,
    title: Boards.inProgress,
    color: 'is-info',
    tasks: [
      {
        uuid: '98t5ma5pg',
        date: 1604613600000,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: TaskType.bug,
        project: 'Kanban',
        priority: TaskProprity.major,
      },
      {
        uuid: 'hc49m900w',
        date: 1604613600000,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: TaskType.design,
        project: 'Kanban',
        priority: TaskProprity.major,
      },
    ],
  },
  {
    uuid: 'sl0mm9cem',
    date: 1604613600000,
    title: Boards.inReview,
    color: 'is-primary',
    tasks: [
      {
        uuid: 'otvgpj19o',
        date: 1604613600000,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: TaskType.bug,
        project: 'Kanban',
        priority: TaskProprity.blocker,
      },
    ],
  },
  {
    uuid: 'z73qbvdv1',
    date: 1604613600000,
    title: Boards.done,
    color: 'is-success',
    tasks: [
      {
        uuid: 'boc7qorhc',
        date: 1604613600000,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        type: TaskType.task,
        project: 'Kanban',
        priority: TaskProprity.critical,
      },
    ],
  }
];

export default initialBoards;
