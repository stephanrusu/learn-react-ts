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
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</div>
        <div className="my-3">1 Nov 2020</div>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">Previous</p>
        <p className="card-footer-item">Next</p>
      </footer>
    </div>
  )
}

export default KanbanCard;
