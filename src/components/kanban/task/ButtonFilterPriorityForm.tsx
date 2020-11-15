import React, { Dispatch, SetStateAction } from 'react';
import { KanbanPriorityFilter } from '../../../constants/enums';

interface Props {
  selectedFilter: KanbanPriorityFilter,
  filterType: KanbanPriorityFilter,
  activeAction: Dispatch<SetStateAction<KanbanPriorityFilter>>
}

function ButtonFilterPriorityForm(props: Props) {
  return (
    <div className={`custom-field ${props.selectedFilter === props.filterType ? 'active' : ''}`}
      onClick={() => props.activeAction(props.filterType)}>
      <div className={`toggle radio ${props.selectedFilter === props.filterType ? 'is-active' : ''}`}><div className="toggle-inner"></div></div>
      <div className="label">{props.filterType}</div>
    </div>
  );
};

export default ButtonFilterPriorityForm;
