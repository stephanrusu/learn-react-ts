import React from 'react';
import { KanbanPriorityFilter } from '../../../store/kanbanFilterTypeSlice';

function KanbanFilterPriority() {
  return (
    <div className="filter-group">
      <label className="label">Priority</label>
      <div className="buttons has-addons">
        <button type="button" className="button is-link is-light">
          {KanbanPriorityFilter.all}
        </button>
        <button type="button" className="button is-link is-light">
          {KanbanPriorityFilter.blocker}
        </button>
        <button type="button" className="button is-link is-light">
          {KanbanPriorityFilter.critical}
        </button>
        <button type="button" className="button is-link is-light">
          {KanbanPriorityFilter.major}
        </button>
        <button type="button" className="button is-link is-light">
          {KanbanPriorityFilter.minor}
        </button>
        <button type="button" className="button is-link is-light">
          {KanbanPriorityFilter.trivial}
        </button>
      </div>
    </div>
  );
};

export default KanbanFilterPriority;
