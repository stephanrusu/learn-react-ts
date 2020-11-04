import React from 'react';

function KanbanCard() {
  return (
    <div className="card kanban-card no-shadow">
      <header className="card-header">
        <p className="card-header-title">
          <span className="tag is-primary">Component</span>
        </p>
        <span className="tag is-primary is-light">Primary</span>
      </header>
      <div className="card-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
        <hr className="divider" />
        <small>11:09 PM - 1 Jan 2016</small>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">Previous</p>
        <p className="card-footer-item">Next</p>
      </footer>
    </div>
  )
}

export default KanbanCard;
