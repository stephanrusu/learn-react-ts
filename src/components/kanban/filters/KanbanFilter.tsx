import React from 'react';
import KanbanFilterPriority from './KanbanFilterPriority';
import KanbanFilterType from './KanbanFilterType';

function KanbanFilter(): React.ReactElement {
  return (
    <div className="card-content px-4 py-4">
      <div className="kanban-filters">
        <KanbanFilterPriority />
        <KanbanFilterType />
      </div>
    </div>
  );
}

export default KanbanFilter;
