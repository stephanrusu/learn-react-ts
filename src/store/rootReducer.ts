import { combineReducers } from '@reduxjs/toolkit';
import datePickerReducer from './datePickerSlice';
import todosReducer from './todoSlice';
import visibilityFilterReducer from './visibilityFilterSlice';
import eventReducer from './eventSlice';

const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
  datePicker: datePickerReducer,
  events: eventReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
