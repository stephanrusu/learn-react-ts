import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { AppThunk, AppDispatch } from './index';
import initialTodos from '../../constants/initialTodos';
import { getUuid } from '../../utils';

const todoSlice = createSlice({
  name: 'todos',
  initialState: initialTodos,
  reducers: {
    createTodo(state, action: PayloadAction<string>) {
      state.push({
        text: action.payload,
        complete: false,
        uuid: getUuid(),
      });
    },
    toggleTodo(state, action: PayloadAction<ITodo>) {
      const todo = state.find((todo) => todo.uuid === action.payload.uuid);
      if (todo) {
        todo.complete = !todo.complete;
      }
    },
    removeTodo(state, action: PayloadAction<ITodo>) {
      return state.filter((todo) => todo.uuid !== action.payload.uuid);
    },
  },
});

// async option to write create todo method
// export const createTodo = (
//   text: string
// ): AppThunk => async (dispatch: AppDispatch) => {
//   const newTodo : Todo = {
//       id: Math.random().toString(36).substr(2, 9), // https://gist.github.com/gordonbrander/2230317,
//       completed: false,
//       text: text,
//   }

//   dispatch(todoSlice.actions.createTodo(newTodo))
// }
export const { createTodo, toggleTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
