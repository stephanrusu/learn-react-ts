import { format } from 'date-fns';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask } from '../../../store/kanbanSlice';
import { RootState } from '../../../store/rootReducer';

interface Props {
  taskId: string;
  board: Board;
}

function KanbanTask({ board, taskId }: Props) {
  const dispatch = useDispatch();
  const projectTitle = useSelector((state: RootState) => state.kanban.title);
  const boards = useSelector((state:RootState) => state.kanban.boards);
  const boardsOrder = Object.keys(boards);
  const task = board.tasks[taskId];
  const boardId = board.uuid;

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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>
          </div>
          <small className="has-text-grey-light">{format(new Date(task.date), "dd MMM yyyy")}</small>
        </div>
        <div className="content">
         {task.description}
        </div>
        <div className="content content-actions">
        {
          !isBoardFirst && (
            <div className="card-action-item">
              <button type="button" className={`button ${prevBoard.color} is-fullwidth is-light`} onClick={() => moveTask(-1)}>
                <svg fill="none" height="24" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" className="feather"><polyline points="15 18 9 12 15 6"></polyline></svg>
                <div>{prevBoard.title}</div>
              </button>
            </div>
          )
        }
        {
          !isBoardLast && (
            <div className="card-action-item">
              <button type="button" className={`button ${nextBoard.color} is-fullwidth is-light`} onClick={() => moveTask(1)}>
                <div>{nextBoard.title}</div>
                <svg fill="none" height="24" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" className="feather"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>
          )
        }
        </div>
      </div>
      <footer className="card-footer">
        <div className="card-footer-item">
          Edit
        </div>
        <div className="card-footer-item">
          Delete
        </div>
      </footer>
    </div>
  );
}

export default KanbanTask;
