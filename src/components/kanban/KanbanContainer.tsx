import React from 'react';
import KanbanColumn from './KanbanColumn';

function KanbanContainer() {
  return (
    <div className="columns is-centered kanban-container">
      <KanbanColumn title="To Do" allowNew={true} type="is-link"/>
      <KanbanColumn title="In Progress" type="is-info" />
      <KanbanColumn title="In Review" type="is-primary" />
      <KanbanColumn title="Done" type="is-success" />
    </div>
  );
}

export default KanbanContainer;
