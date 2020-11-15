import React, { Dispatch, SetStateAction } from 'react';
import { KanbanPriorityFilter } from '../../../constants/enums';

interface Props {
  selectedFilter: KanbanPriorityFilter,
  filterType: KanbanPriorityFilter,
  activeAction: Dispatch<SetStateAction<KanbanPriorityFilter>>
}

function ButtonFilterPriorityForm(props: Props) {
  return (
    <button type="button"
      className={`button is-${props.filterType.toLowerCase()} is-small ${props.selectedFilter === props.filterType ? 'is-active' : ''}`}
      onClick={() => props.activeAction(props.filterType)}
    >
      {props.filterType}
    </button>
  );
};

export default ButtonFilterPriorityForm;
