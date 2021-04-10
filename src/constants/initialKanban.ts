import { Boards, KanbanPriorityFilter, KanbanTypeFilter } from './enums';

const initialKanban: ProjectKanban = {
  uuid: 'nigyhcmrs',
  date: 1604918663862,
  title: 'Kanban',
  boardsOrder: ['ntq5y153g', 'wewoprlx1', 'sl0mm9cem', 'z73qbvdv1'],
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
          type: KanbanTypeFilter.task,
          priority: KanbanPriorityFilter.major,
          description:
            'Carrot cake chocolate bar liquorice muffin. Gummies chocolate donut marzipan lollipop. Cheesecake danish danish pastry cupcake. Powder icing gummi bears. Macaroon cake cookie tiramisu cheesecake toffee marzipan donut. Sweet marshmallow tart tiramisu wafer chocolate. Sweet gingerbread bonbon dessert jujubes sweet chupa chups pastry.',
          comments: [],
          subTasks: [
            {
              text: 'Lorem ipsum dolor sit amet',
              complete: true,
              uuid: 'x4m5hnlkz',
            },
            {
              text: 'Consectetur adipiscing elit.',
              complete: false,
              uuid: 'aj39ghidc',
            },
          ],
        },
        '8e8v16b0a': {
          uuid: '8e8v16b0a',
          date: 1604613600000,
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          type: KanbanTypeFilter.design,
          priority: KanbanPriorityFilter.critical,
          description:
            'Caramels pudding jelly. Sweet wafer toffee halvah macaroon cake croissant gingerbread caramels. Bonbon gummies sesame snaps pudding bonbon powder. Sweet topping wafer. Gummi bears bonbon jelly jelly beans jujubes. Lemon drops topping muffin halvah bonbon icing chocolate cake toffee. Lemon drops bear claw tiramisu lemon drops tootsie roll ice cream cake.',
          comments: [],
          subTasks: [],
        },
        lud0xissi: {
          uuid: 'lud0xissi',
          date: 1604613600000,
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          type: KanbanTypeFilter.bug,
          priority: KanbanPriorityFilter.trivial,
          description:
            'Carrot cake chocolate bar liquorice muffin. Gummies chocolate donut marzipan lollipop. Cheesecake danish danish pastry cupcake. Powder icing gummi bears. Macaroon cake cookie tiramisu cheesecake toffee marzipan donut. Sweet marshmallow tart tiramisu wafer chocolate. Sweet gingerbread bonbon dessert jujubes sweet chupa chups pastry.',
          comments: [],
          subTasks: [],
        },
      },
    },
    wewoprlx1: {
      uuid: 'wewoprlx1',
      date: 1604613600000,
      title: Boards.inProgress,
      color: 'is-info',
      allowNew: true,
      tasks: {
        '98t5ma5pg': {
          uuid: '98t5ma5pg',
          date: 1604613600000,
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          type: KanbanTypeFilter.bug,
          priority: KanbanPriorityFilter.minor,
          description:
            'Carrot cake chocolate bar liquorice muffin. Gummies chocolate donut marzipan lollipop. Cheesecake danish danish pastry cupcake. Powder icing gummi bears. Macaroon cake cookie tiramisu cheesecake toffee marzipan donut. Sweet marshmallow tart tiramisu wafer chocolate. Sweet gingerbread bonbon dessert jujubes sweet chupa chups pastry.',
          comments: [],
          subTasks: [],
        },
        hc49m900w: {
          uuid: 'hc49m900w',
          date: 1604613600000,
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          type: KanbanTypeFilter.design,
          priority: KanbanPriorityFilter.major,
          description:
            'Carrot cake chocolate bar liquorice muffin. Gummies chocolate donut marzipan lollipop. Cheesecake danish danish pastry cupcake. Powder icing gummi bears. Macaroon cake cookie tiramisu cheesecake toffee marzipan donut. Sweet marshmallow tart tiramisu wafer chocolate. Sweet gingerbread bonbon dessert jujubes sweet chupa chups pastry.',
          comments: [],
          subTasks: [],
        },
      },
    },
    sl0mm9cem: {
      uuid: 'sl0mm9cem',
      date: 1604613600000,
      title: Boards.inReview,
      color: 'is-primary',
      allowNew: true,
      tasks: {
        otvgpj19o: {
          uuid: 'otvgpj19o',
          date: 1604613600000,
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          type: KanbanTypeFilter.bug,
          priority: KanbanPriorityFilter.blocker,
          description:
            'Caramels pudding jelly. Sweet wafer toffee halvah macaroon cake croissant gingerbread caramels. Bonbon gummies sesame snaps pudding bonbon powder. Sweet topping wafer. Gummi bears bonbon jelly jelly beans jujubes. Lemon drops topping muffin halvah bonbon icing chocolate cake toffee. Lemon drops bear claw tiramisu lemon drops tootsie roll ice cream cake.',
          comments: [],
          subTasks: [],
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
          type: KanbanTypeFilter.task,
          priority: KanbanPriorityFilter.critical,
          description:
            'Caramels pudding jelly. Sweet wafer toffee halvah macaroon cake croissant gingerbread caramels. Bonbon gummies sesame snaps pudding bonbon powder. Sweet topping wafer. Gummi bears bonbon jelly jelly beans jujubes. Lemon drops topping muffin halvah bonbon icing chocolate cake toffee. Lemon drops bear claw tiramisu lemon drops tootsie roll ice cream cake.',
          comments: [],
          subTasks: [],
        },
      },
    },
  },
};

export default initialKanban;
