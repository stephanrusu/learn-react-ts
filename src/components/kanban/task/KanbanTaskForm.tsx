import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState } from '../../../store/rootReducer';

function KanbanTaskForm() {
  const location = useLocation<any>();
  const boardId = location.state && location.state.boardId;

  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");

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
        </div>
      </div>
      <footer className="card-footer">
        <div className="card-footer-item">
          Cancel
        </div>
        <div className="card-footer-item">
          Save
        </div>
      </footer>
    </div>
  );
}

export default KanbanTaskForm;
