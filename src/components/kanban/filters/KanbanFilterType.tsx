import React from 'react';
import { KanbanTypeFilter } from '../../../store/kanbanFilterTypeSlice';
import ButtonFilterType from './ButtonFilterType';

function KanbanFilterType() {
  return (
    <div className="filter-group">
      <label className="label">Type</label>
      <div className="buttons has-addons">
        <ButtonFilterType filterType={KanbanTypeFilter.all} />
        <ButtonFilterType filterType={KanbanTypeFilter.bug} />
        <ButtonFilterType filterType={KanbanTypeFilter.design} />
        <ButtonFilterType filterType={KanbanTypeFilter.task} />
      </div>
    </div>
  );
}

export default KanbanFilterType;
