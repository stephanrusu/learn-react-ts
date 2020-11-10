import React from 'react';
import { KanbanPriorityFilter } from '../../../store/kanbanFilterTypeSlice';
import ButtonFilterPriority from './ButtonFilterPriority';

function KanbanFilterPriority() {
  return (
    <div className="filter-group">
      <label className="label">Priority</label>
      <div className="buttons has-addons">
          <ButtonFilterPriority filterType={KanbanPriorityFilter.all} />
          <ButtonFilterPriority filterType={KanbanPriorityFilter.blocker} />
          <ButtonFilterPriority filterType={KanbanPriorityFilter.critical} />
          <ButtonFilterPriority filterType={KanbanPriorityFilter.major} />
          <ButtonFilterPriority filterType={KanbanPriorityFilter.minor} />
          <ButtonFilterPriority filterType={KanbanPriorityFilter.trivial} />
      </div>
    </div>
  );
};

export default KanbanFilterPriority;
