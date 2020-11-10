import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum KanbanTypeFilter {
  all = 'All',
  bug = 'Bug',
  task = 'Task',
  design = 'Design',
};

export enum KanbanPriorityFilter {
  all = 'All',
  blocker = 'Blocker',
  critical = 'Critical',
  major = 'Major',
  minor = 'Minor',
  trivial = 'Trivial',
}

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
