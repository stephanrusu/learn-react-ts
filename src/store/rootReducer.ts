import { combineReducers } from '@reduxjs/toolkit';
import todosReducer from './todoSlice';
import visibilityFilterReducer from './visibilityFilterSlice';

const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
