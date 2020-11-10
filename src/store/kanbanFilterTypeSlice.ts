import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { KanbanPriorityFilter, KanbanTypeFilter } from '../constants/enums';

const initialState = {
  type: KanbanTypeFilter.all,
  priority: KanbanPriorityFilter.all
};

const kanbanFilterSlice = createSlice({
  name: 'kanbanFilterType',
  initialState,
  reducers: {
    setTypeFilter(state, action: PayloadAction<KanbanTypeFilter>) {
      state.type = action.payload;
    },
    setPriorityFilter(state, action: PayloadAction<KanbanPriorityFilter>) {
      state.priority = action.payload;
    }
  }
});

export const { setTypeFilter, setPriorityFilter } = kanbanFilterSlice.actions;

export default kanbanFilterSlice.reducer;
