import { combineReducers } from '@reduxjs/toolkit';
import datePickerReducer from './datePickerSlice';
import todosReducer from './todoSlice';
import visibilityFilterReducer from './visibilityFilterSlice';
import eventReducer from './eventSlice';
import kanbanReducer from './kanbanSlice';
import kanbanFilterTypeSlice from './kanbanFilterTypeSlice';

const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
  datePicker: datePickerReducer,
  events: eventReducer,
  kanban: kanbanReducer,
  kanbanFilter: kanbanFilterTypeSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
