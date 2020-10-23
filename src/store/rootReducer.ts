import { combineReducers } from '@reduxjs/toolkit';
import datePickerReducer from './datePickerSlice';
import todosReducer from './todoSlice';
import visibilityFilterReducer from './visibilityFilterSlice';

const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
  datePicker: datePickerReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
