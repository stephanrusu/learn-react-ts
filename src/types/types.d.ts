// Todo types

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
