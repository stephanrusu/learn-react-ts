import React from 'react';
import { KanbanTypeFilter } from '../../../constants/enums';
import ButtonFilterType from './buttons/ButtonFilterType';

function KanbanFilterType(): React.ReactElement {
  return (
    <div className="filter-group">
      <div className="label">Type</div>
      <div className="buttons">
        <ButtonFilterType filterType={KanbanTypeFilter.all} />
        <ButtonFilterType filterType={KanbanTypeFilter.bug} />
        <ButtonFilterType filterType={KanbanTypeFilter.design} />
        <ButtonFilterType filterType={KanbanTypeFilter.task} />
      </div>
    </div>
  );
}

export default KanbanFilterType;
