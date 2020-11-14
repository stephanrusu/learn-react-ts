import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { KanbanPriorityFilter } from '../../../../constants/enums';
import { setPriorityFilter } from '../../../../store/kanbanFilterTypeSlice';
import { RootState } from '../../../../store/rootReducer';

interface Props {
  filterType: KanbanPriorityFilter
}

function ButtonFilterPriority(props: Props) {
  const dispatch = useDispatch();

  const currentFilterType = useSelector(
    (state: RootState) => state.kanbanFilter.priority
  );
  return (
    <button type="button"
      className={`button is-${props.filterType.toLocaleLowerCase()} is-small ${currentFilterType === props.filterType ? 'is-active' : ''}`}
      onClick={() => dispatch(setPriorityFilter(props.filterType))}
    >
      {props.filterType}
    </button>
  );
};

export default ButtonFilterPriority;
