import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSubTask } from '../../../../store/kanbanSlice';
import { RootState } from '../../../../store/rootReducer';

interface Props {
  activeTab: string,
  boardId: string,
  taskId: string,
}

function TabActionSubtasks(props: Props) {
  const dispatch = useDispatch();
  const task = useSelector(
    (state: RootState) => state.kanban.boards[props.boardId].tasks[props.taskId]
  );
  const {boardId, taskId} = props;

  return (
    <div className={`${props.activeTab !== 'subtasks' ? 'is-hidden' : ''}`}>
      <div className={`subtask-details list`}>
        {
          task.subTasks.map((subTask: ITodo) => (
            <div className="list-item" key={subTask.uuid}>
              <div className="is-flex is-flex-row">
                <div className={`toggle checkbox ${subTask.complete ? 'is-active': ''}`}  onClick={() => dispatch(toggleSubTask({boardId, taskId, subTask})) }>
                  <div className="toggle-inner"></div>
                </div>
                <div className="subtask-text">
                  {subTask.text}
                </div>
              </div>
              <button className="button item-remove has-height-auto is-danger is-small">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default TabActionSubtasks;
