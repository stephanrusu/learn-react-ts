// Todo types

interface ITodo {
  text: string,
  complete: boolean,
  uuid: string
};

type CompleteTodo = (args: ITodo) => void;
type AddTodo = (args: string) => void;
type EditTodo = (args: ITodo) => void;
type RemoveTodo = (args: ITodo) => void;
type FilterTodo = () => Array;
type DisplayTodo = (completed: boolean) => Array;

// Calendar types

type ShowMonth = (args: number) => void;
type QuickPick = (args: number) => void;
type PickDate = (args: Date) => void;

// Article types

interface IArticle {
  id: string,
  title: string,
  body: string
}

type InitialState = {
  articles: IArticle[]
}

type ArticleAction = {
  type: string,
  article: IArticle
}

type DispatchType = (args: ArticleAction) => ArticleAction;
