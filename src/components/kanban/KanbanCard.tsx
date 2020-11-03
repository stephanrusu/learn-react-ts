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
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
          <br />
          <small>11:09 PM - 1 Jan 2016</small>
        </div>
      </div>
      <footer className="card-footer">
        {/* <a href="#" className="card-footer-item">Save</a>
        <a href="#" className="card-footer-item">Edit</a>
        <a href="#" className="card-footer-item">Delete</a> */}
      </footer>
    </div>
  )
}

export default KanbanCard;
