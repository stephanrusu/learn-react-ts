import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import initialKanban from '../constants/initialKanban';

interface AlterTask {
  taskId: string,
  boardId: string,
  task?: Task
};
interface NewTask {
  boardId: string,
  task: Task
}
const kanbanSlice = createSlice({
  name: 'kanban',
  initialState: initialKanban,
  reducers: {
    addNewTask(state, action: PayloadAction<NewTask>) {
      const {boardId, task} = action.payload;

      state.boards[boardId].tasks[task.uuid] = action.payload.task;
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

    updateProjectTitle(state, action: PayloadAction<string>) {
      state.title = action.payload
    },

    updateBoardsOrder(state, action: PayloadAction<string[]>) {
      state.boardsOrder = action.payload
    },
  }
});

export const { addTask, removeTask, addNewTask, updateProjectTitle, updateBoardsOrder } = kanbanSlice.actions;


export default kanbanSlice.reducer
