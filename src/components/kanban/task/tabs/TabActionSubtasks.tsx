import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSubTask, removeSubTask, toggleSubTask } from '../../../../store/kanbanSlice';
import { RootState } from '../../../../store/rootReducer';

interface Props {
  activeTab: string;
  boardId: string;
  taskId: string;
}

function TabActionSubtasks(props: Props) {
  const dispatch = useDispatch();
  const task = useSelector((state: RootState) => state.kanban.boards[props.boardId].tasks[props.taskId]);
  const { boardId, taskId } = props;

  const [todoText, setTodoText] = useState<string>('');
  const [errorText, setErrorText] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);

    if (e.target.value.trim() !== '') {
      setErrorText(false);
    } else {
      setErrorText(true);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (todoText.trim() !== '') {
      dispatch(
        createSubTask({
          boardId: props.boardId,
          taskId: props.taskId,
          subTaskText: todoText,
        }),
      );
      setTodoText('');
    } else {
      setErrorText(true);
    }
  };

  return (
    <div className={`${props.activeTab !== 'subtasks' ? 'is-hidden' : ''}`}>
      <div className={`subtask-details list`}>
        {task.subTasks.map((subTask: ITodo) => (
          <div className="list-item" key={subTask.uuid}>
            <div className="is-flex is-flex-row">
              <div
                className={`toggle checkbox ${subTask.complete ? 'is-active' : ''}`}
                onClick={() => dispatch(toggleSubTask({ boardId, taskId, subTask }))}
              >
                <div className="toggle-inner"></div>
              </div>
              <div className="subtask-text">{subTask.text}</div>
            </div>
            <button
              className="button item-remove has-height-auto is-danger is-small"
              onClick={() => dispatch(removeSubTask({ boardId, taskId, subTask }))}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        ))}
      </div>
      <div className="mt-3 subtask-form">
        <form className="is-full-width" onSubmit={handleSubmit}>
          <div className="field is-grouped">
            <div className="control is-expanded">
              <input
                className={`input is-small ${errorText ? 'is-danger' : ''}`}
                type="text"
                placeholder="What do you need to do?"
                value={todoText}
                onChange={handleChange}
              />
              {errorText && <p className="help is-danger">This field is required</p>}
            </div>
            <div className="control">
              <button type="submit" className="button is-primary is-small">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-plus"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TabActionSubtasks;
