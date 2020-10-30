import React from 'react';

function KanbanContainer() {
  return (
    <div className="columns is-centered kanban-container">
      <div className="column">
        <div className="panel is-warning">
          <p className="panel-heading">To Do</p>
          <div className="panel-block"></div>
          <div className="panel-block">
            <button className="button is-primary is-outlined is-fullwidth">
              + Add new task
            </button>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="panel is-link">
          <p className="panel-heading">In Progress</p>
          <div className="panel-block"></div>
          <div className="panel-block">
            <button className="button is-primary is-outlined is-fullwidth">
              + Add new task
            </button>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="panel is-info">
          <p className="panel-heading">In Review</p>
          <div className="panel-block"></div>
          <div className="panel-block">
            <button className="button is-primary is-outlined is-fullwidth">
              + Add new task
            </button>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="panel is-success">
          <p className="panel-heading">Done</p>
          <div className="panel-block"></div>
          <div className="panel-block">
            <button className="button is-primary is-outlined is-fullwidth">
              + Add new task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KanbanContainer;
