import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { toggleSubTask } from '../../store/kanbanSlice';

interface Props {
  boardId: string;
  taskId: string;
}

function KanbanSubTask({ boardId, taskId }: Props) {
  const dispatch = useDispatch();

  const [collapseTasks, setCollapseTasks] = useState<boolean>(false);

  const task = useSelector((state: RootState) => state.kanban.boards[boardId].tasks[taskId]);

  const totalSubTasks = task.subTasks.length;
  const completedSubTasks = task.subTasks.filter((subtask: ITodo) => subtask.complete).length;

  const percentageCompleted = Math.round((completedSubTasks * 100) / totalSubTasks);

  return (
    <>
      <progress
        className="progress is-primary is-smaller"
        value={percentageCompleted}
        max="100"
        onClick={() => setCollapseTasks(!collapseTasks)}
      >
        {`${Math.round(percentageCompleted)}%`}
      </progress>
      <div className={`subtask-details list ${!collapseTasks ? 'is-hidden' : ''}`}>
        {task.subTasks.map((subTask: ITodo) => (
          <div className="list-item" key={subTask.uuid}>
            <div
              className={`toggle checkbox ${subTask.complete ? 'is-active' : ''}`}
              onClick={() => dispatch(toggleSubTask({ boardId, taskId, subTask }))}
            >
              <div className="toggle-inner"></div>
            </div>
            <div className="subtask-text">{subTask.text}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default KanbanSubTask;
