import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { format } from 'date-fns';
import { ROUTE_KANBAN_TASK_SIMPLE } from '../../router/routes';
import { addTask, removeTask } from '../../store/kanbanSlice';
import { RootState } from '../../store/rootReducer';

interface Props {
  taskId: string;
  boardId: string;
}

function KanbanCard({ boardId, taskId }: Props): React.ReactElement {
  const dispatch = useDispatch();
  const location = useLocation();

  const projectTitle = useSelector((state: RootState) => state.kanban.title);

  const task = useSelector((state: RootState) => state.kanban.boards[boardId].tasks[taskId]);

  const boardsOrder = useSelector((state: RootState) => state.kanban.boardsOrder);

  const boardIndex = boardsOrder.indexOf(boardId);
  const isBoardFirst = boardIndex === 0;
  const isBoardLast = boardIndex === boardsOrder.length - 1;

  const moveTask = (direction: number) => {
    const newBoardId = boardsOrder[boardIndex + direction];

    dispatch(
      removeTask({
        boardId,
        taskId,
      }),
    );
    dispatch(
      addTask({
        boardId: newBoardId,
        taskId,
        task,
      }),
    );
  };

  return (
    <div className="card kanban-card no-shadow">
      <header className="card-header">
        <p className="card-header-title">
          <Link
            to={{
              pathname: `${ROUTE_KANBAN_TASK_SIMPLE}/${taskId}`,
              state: { background: location },
            }}
          >
            <span className="tag is-primary is-light">{`${projectTitle}-${task.uuid}`}</span>
          </Link>
        </p>
        <div className="tags has-addons">
          <span className={`tag is-primary is-${task.priority.toLocaleLowerCase()}`}>{task.priority}</span>
          <span className={`tag is-primary is-${task.type.toLowerCase()}`}>{task.type}</span>
        </div>
      </header>
      <div className="card-content">
        <div className="card-side-border"></div>
        <div className="card-content-body">
          <div className="card-body-title">
            <Link
              to={{
                pathname: `${ROUTE_KANBAN_TASK_SIMPLE}/${taskId}`,
                state: { background: location },
              }}
            >
              {task.title}
            </Link>
          </div>
          <div className="card-body-extra">
            <div className="task-extra-info">
              <div className="task-date small">
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
                  className="feather feather-calendar"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span className="text">{format(new Date(task.date), 'dd MMM yyyy')}</span>
              </div>
              {task.subTasks.length > 0 && (
                <div className="task-todo small">
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
                    className="feather feather-check-square"
                  >
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                  <span className="text">{task.subTasks.length}</span>
                </div>
              )}
              {task.comments.length > 0 && (
                <div className="task-comments small">
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
                    className="feather feather-message-square"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span className="text">{task.comments.length}</span>
                </div>
              )}
            </div>
            <div className="tag is-primary task-user">
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
                className="feather feather-user"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <footer className="card-footer">
        {!isBoardFirst && (
          <div className="card-footer-item">
            <button type="button" className="button is-white is-fullwidth is-small" onClick={() => moveTask(-1)}>
              <svg
                fill="none"
                height="24"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                className="feather"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
          </div>
        )}
        {!isBoardLast && (
          <div className="card-footer-item">
            <button type="button" className="button is-white is-fullwidth is-small" onClick={() => moveTask(1)}>
              <svg
                fill="none"
                height="24"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                className="feather"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        )}
      </footer>
    </div>
  );
}

export default KanbanCard;
