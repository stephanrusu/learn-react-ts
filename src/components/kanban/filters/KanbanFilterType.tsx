import React from 'react';
import { KanbanTypeFilter } from '../../../store/kanbanFilterTypeSlice';

function KanbanFilterType() {
  return (
    <div className="filter-group">
      <label className="label">Type</label>
      <div className="buttons has-addons">
        <button type="button" className="button is-link is-light">
          {KanbanTypeFilter.all}
        </button>
        <button type="button" className="button is-link is-light">
          {KanbanTypeFilter.bug}
        </button>
        <button type="button" className="button is-link is-light">
          {KanbanTypeFilter.design}
        </button>
        <button type="button" className="button is-link is-light">
          {KanbanTypeFilter.task}
        </button>
      </div>
    </div>
  );
}

export default KanbanFilterType;
