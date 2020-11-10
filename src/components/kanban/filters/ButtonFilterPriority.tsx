import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { KanbanPriorityFilter, setPriorityFilter } from '../../../store/kanbanFilterTypeSlice';
import { RootState } from '../../../store/rootReducer';

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
      className={`button is-link is-light ${currentFilterType === props.filterType ? 'is-active' : ''}`}
      onClick={() => dispatch(setPriorityFilter(props.filterType))}
    >
      {props.filterType}
    </button>
  );
};

export default ButtonFilterPriority;
