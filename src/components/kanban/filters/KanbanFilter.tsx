import React from 'react';
import KanbanFilterPriority from './KanbanFilterPriority';
import KanbanFilterType from './KanbanFilterType';

function KanbanFilter() {
  return(
    <div className="card mb-4">
      <div className="card-header px-4 py-4">
        <KanbanFilterType />
        <KanbanFilterPriority />
      </div>
    </div>
  );
};

export default KanbanFilter;
