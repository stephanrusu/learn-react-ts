import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import initialKanban from '../constants/initialKanban';
import { getUuid } from '../utils';

interface AlterTask {
  taskId: string,
  boardId: string,
  task?: Task
};

interface NewTask {
  boardId: string,
  task: Task
};
interface NewSubTask {
  taskId: string,
  boardId: string,
  subTaskText: string
}
interface AlterSubTask {
  taskId: string,
  boardId: string,
  subTask?: ITodo
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

    createSubTask(state, action: PayloadAction<NewSubTask>) {
      const { boardId, taskId, subTaskText } = action.payload;
      let task = state.boards[boardId].tasks[taskId];

      task.subTasks.push({
        text: subTaskText,
        complete: false,
        uuid: getUuid()
      });
    },

    toggleSubTask(state, action: PayloadAction<AlterSubTask>) {
      const { boardId, taskId, subTask } = action.payload;

      if (subTask !== undefined) {
        let task = state.boards[boardId].tasks[taskId];
        let selectedSubTask = task.subTasks.find(sub => sub.uuid === subTask.uuid);

        if (selectedSubTask) {
          selectedSubTask.complete = !selectedSubTask.complete
        }
      }
    },

    removeSubTask(state, action: PayloadAction<AlterSubTask>) {
      const { boardId, taskId, subTask } = action.payload;

      if (subTask !== undefined) {
        let task = state.boards[boardId].tasks[taskId];
        task.subTasks = task.subTasks.filter(todo => todo.uuid !== subTask.uuid);
      }
    },

    updateProjectTitle(state, action: PayloadAction<string>) {
      state.title = action.payload
    },

    updateBoardsOrder(state, action: PayloadAction<string[]>) {
      state.boardsOrder = action.payload
    },
  }
});

export const {
  addTask, removeTask, addNewTask, updateProjectTitle, updateBoardsOrder, toggleSubTask, createSubTask, removeSubTask
} = kanbanSlice.actions;


export default kanbanSlice.reducer
