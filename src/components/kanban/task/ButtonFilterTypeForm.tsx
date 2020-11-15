import React, { Dispatch, SetStateAction } from 'react';
import { KanbanTypeFilter } from '../../../constants/enums';

interface Props {
  selectedFilter: KanbanTypeFilter,
  filterType: KanbanTypeFilter,
  activeAction: Dispatch<SetStateAction<KanbanTypeFilter>>
}

function ButtonFilterTypeForm(props: Props) {
  return (
    <button type="button"
      className={`button is-${props.filterType.toLowerCase()} is-small ${props.selectedFilter === props.filterType ? 'is-active' : ''}`}
      onClick={() => props.activeAction(props.filterType)}
    >
      {props.filterType}
    </button>
  );
};

export default ButtonFilterTypeForm;
