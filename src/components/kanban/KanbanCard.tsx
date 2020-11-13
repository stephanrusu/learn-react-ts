import { format } from 'date-fns';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { ROUTE_KANBAN } from '../../router/routes';
import { addTask, removeTask } from '../../store/kanbanSlice';
import { RootState } from '../../store/rootReducer';

interface Props {
  taskId: string,
  boardId: string,
}

function KanbanCard({ boardId, taskId }: Props) {
  const dispatch = useDispatch();
  const location = useLocation();

  const projectTitle = useSelector(
    (state: RootState) => state.kanban.title
  );

  const task = useSelector(
    (state: RootState) => state.kanban.boards[boardId].tasks[taskId]
  );

  const boardsOrder = useSelector(
    (state: RootState) => Object.keys(state.kanban.boards)
  );

  const boardIndex = boardsOrder.indexOf(boardId);
  const isBoardFirst = boardIndex === 0;
  const isBoardLast  = boardIndex === boardsOrder.length - 1;

  const moveTask = (direction: number) => {
    let newBoardId = boardsOrder[boardIndex + direction];

    dispatch(removeTask({
      boardId, taskId
    }));
    dispatch(addTask({
      boardId: newBoardId, taskId, task
    }));
  }

  return (
    <div className="card kanban-card no-shadow">
      <header className="card-header">
        <p className="card-header-title">
          <Link to={{
            pathname: `${ROUTE_KANBAN}/view/${taskId}`,
            state: { background: location }
          }} >
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
          <div className="card-body-title">{task.title}</div>
          <div className="card-body-extra">
            <div className="task-date small">{format(new Date(task.date), "dd MMM yyyy")}</div>
            <div className="tag is-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>
          </div>
        </div>
      </div>
      <footer className="card-footer">
        {
          !isBoardFirst && (
            <div className="card-footer-item">
              <button type="button" className="button is-white is-fullwidth is-small" onClick={() => moveTask(-1)}>
                <svg fill="none" height="24" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" className="feather"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
            </div>
          )
        }
        {
          !isBoardLast && (
            <div className="card-footer-item">
              <button type="button" className="button is-white is-fullwidth is-small" onClick={() => moveTask(1)}>
                <svg fill="none" height="24" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" className="feather"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          )
        }
      </footer>
    </div>
  )
}

export default KanbanCard;
