type Todo = {
  text: string,
  complete: boolean,
  uuid: string
};

type CompleteTodo = (selectedTodo: Todo) => void;
type AddTodo = (newTodoText: string) => void;
type EditTodo = (selectedTodo: Todo) => void;
type RemoveTodo = (selectedTodo: Todo) => void;
type FilterTodo = (display: boolean |string) => Array;
