import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { KanbanPriorityFilter, KanbanTypeFilter } from '../../../constants/enums';
import { RootState } from '../../../store/rootReducer';
import { addNewTask } from '../../../store/kanbanSlice';
import { getUuid } from '../../../utils';

function KanbanTaskForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation<any>();

  const { taskId } = useParams<RouteParams>();
  const boards = useSelector(
    (state: RootState) => state.kanban.boards
  );

  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [taskType, setTaskType] = useState<KanbanTypeFilter|string>("");
  const [taskPriority, setTaskPriority] = useState<KanbanPriorityFilter|string>("");

  const getBoard = (taskId: string) => {
    // ignore key as there is an uuid inside a board
    for (const [, board] of Object.entries(boards)) {
      if (board.tasks[taskId] !== undefined) {
        return board;
      }
    }
    // if nothing found, return first board
    return boards[0];
  };
  const boardId = location.state && location.state.boardId;
  const background = location.state !== undefined ? location.state.background : location;

  const board = boardId === undefined ? getBoard(taskId) : boards[boardId];
  useEffect(() => {
    if (taskId !== undefined && board !== undefined) {
      const task = board.tasks[taskId];
      setTaskTitle(task.title);
      setTaskDescription(task.description);
      setTaskType(task.type);
      setTaskPriority(task.priority);
    }
  }, [taskId, board]);

  const saveTask = () => {
    const task = board.tasks[taskId];
    const newTask: Task = {
      uuid: taskId !== undefined ? task.uuid : getUuid(),
      date: taskId !== undefined ? task.date : new Date().getTime(),
      title: taskTitle,
      description: taskDescription,
      type: taskType,
      priority: taskPriority,
    };

    dispatch(addNewTask({ task: newTask, boardId: board.uuid }));
    history.push(background);
  }

  return (
    <div className="card kanban-card-form">
      <header className="card-header">
        <p className="card-header-title">{taskId !== undefined ? 'Edit task': 'Create task'}</p>
        <div className="tags">
          <span className={`tag ${board.color}`}>{board.title}</span>
        </div>
      </header>
      <div className="card-content">
        <div className="content">
          <div className="field">
            <label className="label" htmlFor="taskTitle">Title</label>
            <div className="control">
              <input className="input" type="text" placeholder="Task title" id="taskTitle"
                value={taskTitle} onChange={(e) => setTaskTitle(e.target.value) } />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="taskDescription">Description</label>
            <div className="control">
              <textarea className="textarea" placeholder="Task description" id="taskDescription" rows={3}
              value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="field">
            <label className="label">Type</label>
            <div className="buttons control">
              <button type="button"
                className={`button is-info is-light is-small ${KanbanTypeFilter.bug === taskType ? 'is-active' : ''}`}
                onClick={() => setTaskType(KanbanTypeFilter.bug)}
              >{KanbanTypeFilter.bug}
              </button>
              <button type="button"
                className={`button is-info is-light is-small ${KanbanTypeFilter.design === taskType ? 'is-active' : ''}`}
                onClick={() => setTaskType(KanbanTypeFilter.design)}
              >{KanbanTypeFilter.design}
              </button>
              <button type="button"
                className={`button is-info is-light is-small ${KanbanTypeFilter.task === taskType ? 'is-active' : ''}`}
                onClick={() => setTaskType(KanbanTypeFilter.task)}
              >{KanbanTypeFilter.task}
              </button>
            </div>
          </div>
          <div className="field">
            <label className="label">Priority</label>
            <div className="buttons control">
              <button type="button"
                className={`button is-info is-light is-small ${KanbanPriorityFilter.blocker === taskPriority ? 'is-active' : ''}`}
                onClick={() => setTaskPriority(KanbanPriorityFilter.blocker)}
              >{KanbanPriorityFilter.blocker}
              </button>
              <button type="button"
                className={`button is-info is-light is-small ${KanbanPriorityFilter.critical === taskPriority ? 'is-active' : ''}`}
                onClick={() => setTaskPriority(KanbanPriorityFilter.critical)}
              >{KanbanPriorityFilter.critical}
              </button>
              <button type="button"
                className={`button is-info is-light is-small ${KanbanPriorityFilter.major === taskPriority ? 'is-active' : ''}`}
                onClick={() => setTaskPriority(KanbanPriorityFilter.major)}
              >{KanbanPriorityFilter.major}
              </button>
              <button type="button"
                className={`button is-info is-light is-small ${KanbanPriorityFilter.minor === taskPriority ? 'is-active' : ''}`}
                onClick={() => setTaskPriority(KanbanPriorityFilter.minor)}
              >{KanbanPriorityFilter.minor}
              </button>
              <button type="button"
                className={`button is-info is-light is-small ${KanbanPriorityFilter.trivial === taskPriority ? 'is-active' : ''}`}
                onClick={() => setTaskPriority(KanbanPriorityFilter.trivial)}
              >{KanbanPriorityFilter.trivial}
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="card-footer">
        <div className="card-footer-item">
          <button type="button" className="button is-white is-fullwidth" onClick={() => history.push(background)}>
            Cancel
          </button>
        </div>
        <div className="card-footer-item">
          <button type="button" className="button is-link is-fullwidth" onClick={() => saveTask()}>
            Save
          </button>
        </div>
      </footer>
    </div>
  );
}

export default KanbanTaskForm;
