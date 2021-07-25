import React from 'react';
import { KanbanTypeFilter } from '../../../constants/enums';

interface Props {
  selectedFilter: KanbanTypeFilter;
  filterType: KanbanTypeFilter;
  activeAction: (type: KanbanTypeFilter) => void;
}

function ButtonFilterTypeForm(props: Props): React.ReactElement {
  return (
    <div
      className={`custom-field ${props.selectedFilter === props.filterType ? 'active' : ''}`}
      onClick={() => props.activeAction(props.filterType)}
    >
      <div className={`toggle radio ${props.selectedFilter === props.filterType ? 'is-active' : ''}`}>
        <div className="toggle-inner"></div>
      </div>
      <div className="label">{props.filterType}</div>
    </div>
  );
}

export default ButtonFilterTypeForm;
