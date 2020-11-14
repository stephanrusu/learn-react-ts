import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { RootState } from '../../../store/rootReducer';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { ROUTE_KANBAN, ROUTE_KANBAN_EDIT_SIMPLE } from '../../../router/routes';
import { addTask, removeTask } from '../../../store/kanbanSlice';

function KanbanDisplayTask() {
  const { taskId } = useParams<RouteParams>();
  const location = useLocation<any>();
  const history = useHistory();
  const dispatch = useDispatch();
  const boards = useSelector((state: RootState) => state.kanban.boards);
  const projectTitle = useSelector((state: RootState) => state.kanban.title);
  const boardsOrder = useSelector((state: RootState) => state.kanban.boardsOrder);

  const getBoard = (taskId: string) => {
    // ignore key as there is an uuid inside a board
    for (const [, board] of Object.entries(boards)) {
      if (board.tasks[taskId] !== undefined) {
        return board;
      }
    }
    // if nothing, return first board
    return boards[0];
  };

  const board = getBoard(taskId);

  if (board === undefined) {
    history.push(ROUTE_KANBAN);
    return <></>;
  }

  const task = board.tasks[taskId];
  const boardId = board.uuid;

  const background = location.state && location.state.background;
  const backLocation = background || location;

  const boardIndex = boardsOrder.indexOf(boardId);
  const isBoardFirst = boardIndex === 0;
  const isBoardLast = boardIndex === boardsOrder.length - 1;

  const moveTask = (direction: number) => {
    let newBoardId = boardsOrder[boardIndex + direction];

    dispatch(removeTask({ boardId, taskId }));
    dispatch(addTask({ boardId: newBoardId, taskId, task }));
  };

  const prevBoard = boards[boardsOrder[boardIndex - 1]];
  const nextBoard = boards[boardsOrder[boardIndex + 1]];

  return (
    <div className="card kanban-card-display">
      <header className="card-header">
        <div className="tags">
          <span className={`tag ${board.color}`}>{board.title}</span>
        </div>
        <p className="card-header-title">
          {projectTitle} - {taskId}
        </p>
        <div className="tags has-addons">
          <span className={`tag is-primary is-${task.priority.toLocaleLowerCase()}`}>{task.priority}</span>
          <span className={`tag is-primary is-${task.type.toLowerCase()}`}>{task.type}</span>
        </div>
      </header>
      <div className="card-content">
        <div className="content">
          <div className="card-title">
            <div>{task.title}</div>
            <div className="tag is-primary">
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
          <small className="has-text-grey-light">{format(new Date(task.date), 'dd MMM yyyy')}</small>
        </div>
        <div className="content">{task.description}</div>
        <div className="content content-actions">
          {!isBoardFirst && (
            <div className="card-action-item">
              <button
                type="button"
                className={`button ${prevBoard.color} is-fullwidth is-light`}
                onClick={() => moveTask(-1)}
              >
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
                <div>{prevBoard.title}</div>
              </button>
            </div>
          )}
          {!isBoardLast && (
            <div className="card-action-item">
              <button
                type="button"
                className={`button ${nextBoard.color} is-fullwidth is-light`}
                onClick={() => moveTask(1)}
              >
                <div>{nextBoard.title}</div>
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
        </div>
      </div>
      <footer className="card-footer">
        <div className="card-footer-item">
          <Link to={{
            pathname: `${ROUTE_KANBAN_EDIT_SIMPLE}/${taskId}`,
            state: {
              background: backLocation
            }
          }} className="button is-white is-fullwidth">
            Edit
          </Link>
        </div>
        <div className="card-footer-item">
          <button type="button" className="button is-white is-fullwidth" onClick={() => dispatch(removeTask({ boardId,taskId }))}>
            Delete
          </button>
        </div>
      </footer>
    </div>
  );
}

export default KanbanDisplayTask;
