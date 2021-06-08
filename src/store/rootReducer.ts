import { combineReducers } from '@reduxjs/toolkit';
import datePickerReducer from './slices/datePickerSlice';
import todosReducer from './slices/todoSlice';
import visibilityFilterReducer from './slices/visibilityFilterSlice';
import eventReducer from './slices/eventSlice';
import kanbanReducer from './slices/kanbanSlice';
import kanbanFilterReducer from './slices/kanbanFilterTypeSlice';
import dataTableReducer from './slices/dataTableSlice';

const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
  datePicker: datePickerReducer,
  events: eventReducer,
  kanban: kanbanReducer,
  kanbanFilter: kanbanFilterReducer,
  dataTable: dataTableReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
