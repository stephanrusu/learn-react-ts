type Todo = {
  text: string,
  complete: boolean,
  uuid: string
};

type TodoComplete = (selectedTodo: Todo) => void;
type AddTodo = (newTodo: Todo) => void;
type EditTodo = (selectedTodo: Todo) => void;
type RemoveTodo = (selectedTodo: Todo) => void;

type FilterTodo = (complete: boolean) => Array;
type AllTodo = () => Array;
