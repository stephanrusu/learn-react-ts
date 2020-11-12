interface ITodo {
  text: string,
  complete: boolean,
  uuid: string
};

interface IPickDate {
  shown: number | date,
  picked: number | date
};

interface IEvent {
  startDate: number | string,
  endDate: number | string,
  uuid: string,
  allDay: boolean,
  title: string,
  description: string
}

interface TimeSlider {
  hours: number,
  minutes: number,
  ampm?: string
}

interface TimeDate {
  type: string,
  time: TimeSlider
}

interface Project {
  uuid: string,
  date: number | date,
  name: string
}

interface Task {
  uuid: string,
  date: number | date,
  title: string,
  type: KanbanTypeFilter,
  priority: KanbanPriorityFilter,
}

interface Board {
  uuid: string,
  date: number | date,
  title: string,
  color: string,
  allowNew?: boolean,
  tasks: {
    [uuid: string] : Task
  },
}

interface ProjectKanban {
  uuid: string,
  date: number | date,
  title: string,
  boards: {
    [uuid: string] : Board
  },
}

type CompleteTodo = (args: ITodo) => void;
type AddTodo = (args: string) => void;
type EditTodo = (args: ITodo) => void;
type RemoveTodo = (args: ITodo) => void;
type FilterTodo = () => Array;
type DisplayTodo = (args: boolean) => Array;

// Calendar types

type ShowMonth = (args: number) => void;
type QuickPick = (args: number) => void;
type PickDate = (args: Date) => void;
