import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import initialKanban from '../constants/initialKanban';

interface AlterTask {
  taskId: string,
  boardId: string,
  task?: Task
};

const kanbanSlice = createSlice({
  name: 'kanban',
  initialState: initialKanban,
  reducers: {
    addNewTask(state, action: PayloadAction<Task>) {
      let firstBoard = Object.keys(state.boards)[0];

      state.boards[firstBoard].tasks[action.payload.uuid] = action.payload;
    },
    addTask(state, action: PayloadAction<AlterTask>) {
      const { boardId, taskId, task } = action.payload;

      if (task !== undefined) {
        state.boards[boardId].tasks[taskId] = task;
      }
    },
    removeTask(state, action: PayloadAction<AlterTask>) {
      const { boardId, taskId } = action.payload;
      delete state.boards[boardId].tasks[taskId];
    },
  }
});

export const { addTask, removeTask } = kanbanSlice.actions;


export default kanbanSlice.reducer
