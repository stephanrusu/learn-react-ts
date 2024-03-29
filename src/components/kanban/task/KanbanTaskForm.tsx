import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { KanbanPriorityFilter, KanbanTypeFilter } from '../../../constants/enums';
import { RootState } from '../../../store/rootReducer';
import { addNewTask } from '../../../store/slices/kanbanSlice';
import { getUuid } from '../../../utils';
import ButtonFilterTypeForm from './ButtonFilterTypeForm';
import ButtonFilterPriorityForm from './ButtonFilterPriorityForm';
import { ROUTE_KANBAN } from '../../../router/routes';

function KanbanTaskForm(): React.ReactElement {
  const history = useHistory();
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const location = useLocation<any>();

  const { taskId } = useParams<RouteParams>();
  const boards = useSelector((state: RootState) => state.kanban.boards);

  const [taskTitle, setTaskTitle] = useState<string>('');
  const [taskDescription, setTaskDescription] = useState<string>('');
  const [taskType, setTaskType] = useState<KanbanTypeFilter>(KanbanTypeFilter.all);
  const [taskPriority, setTaskPriority] = useState<KanbanPriorityFilter>(KanbanPriorityFilter.all);

  const [taskTypeDropdown, setTaskTypeDropdown] = useState<boolean>(false);
  const [taskPriorityDropdown, setTaskPriorityDropdown] = useState<boolean>(false);

  const getBoard = (taskId: string) => {
    const boardsValues = Object.values(boards);
    const boardsLength = boardsValues.length;

    if (taskId !== undefined) {
      for (let i = 0; i < boardsLength; i += 1) {
        const board = boardsValues[i];
        if (board.tasks[taskId] !== undefined) {
          return board;
        }
      }
    }

    // if nothing found, return first board
    return boardsValues[0];
  };

  const boardId = location.state && location.state.boardId;
  // const background = location.state !== undefined ? location.state.background : location;

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
      comments: [],
      subTasks: [],
    };

    dispatch(addNewTask({ task: newTask, boardId: board.uuid }));
    closeForm();
  };

  const closeForm = () => {
    const background = location.state && location.state.background;

    if (background === undefined) {
      history.push(ROUTE_KANBAN);
    } else {
      history.goBack();
    }
  };

  const updateTaskType = (type: KanbanTypeFilter) => {
    setTaskType(type);
    setTaskTypeDropdown(false);
  };

  return (
    <div className="card kanban-card-form">
      <header className="card-header">
        <p className="card-header-title">{taskId !== undefined ? `Edit task - ${taskId}` : 'Create task'}</p>
        <div className="tags">
          <span className={`tag ${board.color}`}>{board.title}</span>
        </div>
      </header>
      <div className="card-content">
        <div className="content">
          <div className="group-filters">
            <div className="filter-column">
              <label className="label">Type</label>
              <div className="dropdown-container">
                <div className="dropdown-toggle" onClick={() => setTaskTypeDropdown(!taskTypeDropdown)}>
                  <span>{taskType}</span>
                  <div className="icon-toggle">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-down"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
                {taskTypeDropdown && (
                  <div className="dropdown-select">
                    <div className="filter-control">
                      <ButtonFilterTypeForm filterType={KanbanTypeFilter.bug} selectedFilter={taskType} activeAction={updateTaskType} />
                      <ButtonFilterTypeForm filterType={KanbanTypeFilter.design} selectedFilter={taskType} activeAction={updateTaskType} />
                      <ButtonFilterTypeForm filterType={KanbanTypeFilter.task} selectedFilter={taskType} activeAction={updateTaskType} />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="filter-column">
              <label className="label">Priority</label>
              <div className="dropdown-container">
                <div className="dropdown-toggle" onClick={() => setTaskPriorityDropdown(!taskPriorityDropdown)}>
                  <span>{taskPriority}</span>
                  <div className="icon-toggle">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-down"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
                {taskPriorityDropdown && (
                  <div className="dropdown-select">
                    <div className="filter-control">
                      <ButtonFilterPriorityForm
                        filterType={KanbanPriorityFilter.blocker}
                        selectedFilter={taskPriority}
                        activeAction={setTaskPriority}
                      />
                      <ButtonFilterPriorityForm
                        filterType={KanbanPriorityFilter.critical}
                        selectedFilter={taskPriority}
                        activeAction={setTaskPriority}
                      />
                      <ButtonFilterPriorityForm
                        filterType={KanbanPriorityFilter.major}
                        selectedFilter={taskPriority}
                        activeAction={setTaskPriority}
                      />
                      <ButtonFilterPriorityForm
                        filterType={KanbanPriorityFilter.minor}
                        selectedFilter={taskPriority}
                        activeAction={setTaskPriority}
                      />
                      <ButtonFilterPriorityForm
                        filterType={KanbanPriorityFilter.trivial}
                        selectedFilter={taskPriority}
                        activeAction={setTaskPriority}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="taskTitle">
              Title
            </label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Task title"
                id="taskTitle"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="taskDescription">
              Description
            </label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Task description"
                id="taskDescription"
                rows={3}
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <footer className="card-footer">
        <div className="card-footer-item">
          <button type="button" className="button is-white is-fullwidth" onClick={() => closeForm()}>
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
