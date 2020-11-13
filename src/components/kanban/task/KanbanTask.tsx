import { format } from 'date-fns';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/rootReducer';

interface Props {
  taskId: string;
  board: Board;
}

function KanbanTask({ board, taskId }: Props) {
  const projectTitle = useSelector((state: RootState) => state.kanban.title);
  const task = board.tasks[taskId];
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
          <div>{task.title}</div>
          <small className="has-text-grey-light">{format(new Date(task.date), "dd MMM yyyy")}</small>
        </div>
        <div className="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium assumenda libero itaque aliquid molestiae quis iste est! Earum iste dignissimos voluptatum eligendi. Vitae, numquam quas? Dolore praesentium sint adipisci quaerat.
        </div>
      </div>
      <footer className="card-footer">
        <a href="/" className="card-footer-item">
          Save
        </a>
        <a href="/" className="card-footer-item">
          Edit
        </a>
        <a href="/" className="card-footer-item">
          Delete
        </a>
      </footer>
    </div>
  );
}

export default KanbanTask;
