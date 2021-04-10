import React from 'react';
import { KanbanPriorityFilter } from '../../../constants/enums';
import ButtonFilterPriority from './buttons/ButtonFilterPriority';

function KanbanFilterPriority() {
  return (
    <div className="filter-group">
      <label className="label">Priority</label>
      <div className="buttons">
        <ButtonFilterPriority filterType={KanbanPriorityFilter.all} />
        <ButtonFilterPriority filterType={KanbanPriorityFilter.blocker} />
        <ButtonFilterPriority filterType={KanbanPriorityFilter.critical} />
        <ButtonFilterPriority filterType={KanbanPriorityFilter.major} />
        <ButtonFilterPriority filterType={KanbanPriorityFilter.minor} />
        <ButtonFilterPriority filterType={KanbanPriorityFilter.trivial} />
      </div>
    </div>
  );
}

export default KanbanFilterPriority;
