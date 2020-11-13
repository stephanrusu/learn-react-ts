import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState } from '../../../store/rootReducer';

function KanbanTaskForm() {
  const location = useLocation<any>();
  const boardId = location.state && location.state.boardId;

  const board = useSelector(
    (state: RootState) => state.kanban.boards[boardId]
  );

  return (
    <div className="card kanban-card-form">
      <header className="card-header">
        <p className="card-header-title">Create task</p>
        <div className="tags">
          <span className={`tag ${board.color}`}>{board.title}</span>
        </div>
      </header>
      <div className="card-content">
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
          <br />
        </div>
      </div>
      <footer className="card-footer">
        <a href="/" className="card-footer-item">
          Delete
        </a>
        <a href="/" className="card-footer-item">
          Save
        </a>
      </footer>
    </div>
  );
}

export default KanbanTaskForm;
