enum TaskProprity {
  blocker = 'Blocker',
  critical = 'Critical',
  major = 'Major',
  minor = 'Minor',
  trivial = 'Trivial',
}

enum TaskType {
  bug = 'Bug',
  task = 'Task',
  design = 'Design',
}

enum Boards {
  toDo = 'To Do',
  inProgress = 'In Progress',
  inReview = 'In Review',
  done = 'Done',
}

const initialKanban: ProjectKanban = {
  uuid: 'nigyhcmrs',
  date: 1604918663862,
  title: 'Kanban',
  boards: {
    ntq5y153g: {
      uuid: 'ntq5y153g',
      date: 1604613600000,
      title: Boards.toDo,
      color: 'is-link',
      allowNew: true,
      tasks: {
        '8lvzs23uf': {
          uuid: '8lvzs23uf',
          date: 1604613600000,
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          type: TaskType.task,
          priority: TaskProprity.major,
        },
        '8e8v16b0a': {
          uuid: '8e8v16b0a',
          date: 1604613600000,
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          type: TaskType.design,
          priority: TaskProprity.critical,
        },
        lud0xissi: {
          uuid: 'lud0xissi',
          date: 1604613600000,
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          type: TaskType.bug,
          priority: TaskProprity.trivial,
        },
      },
    },
    wewoprlx1: {
      uuid: 'wewoprlx1',
      date: 1604613600000,
      title: Boards.inProgress,
      color: 'is-info',
      tasks: {
        '98t5ma5pg': {
          uuid: '98t5ma5pg',
          date: 1604613600000,
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          type: TaskType.bug,
          priority: TaskProprity.minor,
        },
        hc49m900w: {
          uuid: 'hc49m900w',
          date: 1604613600000,
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          type: TaskType.design,
          priority: TaskProprity.major,
        },
      },
    },
    sl0mm9cem: {
      uuid: 'sl0mm9cem',
      date: 1604613600000,
      title: Boards.inReview,
      color: 'is-primary',
      tasks: {
        otvgpj19o: {
          uuid: 'otvgpj19o',
          date: 1604613600000,
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          type: TaskType.bug,
          priority: TaskProprity.blocker,
        },
      },
    },
    z73qbvdv1: {
      uuid: 'z73qbvdv1',
      date: 1604613600000,
      title: Boards.done,
      color: 'is-success',
      tasks: {
        boc7qorhc: {
          uuid: 'boc7qorhc',
          date: 1604613600000,
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          type: TaskType.task,
          priority: TaskProprity.critical,
        },
      },
    },
  },
};

export default initialKanban;
