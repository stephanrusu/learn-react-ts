import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//* use aliases
import { KanbanTypeFilter } from '../../../../constants/enums';
import { setTypeFilter } from '../../../../store/kanbanFilterTypeSlice';
import { RootState } from '../../../../store/rootReducer';

interface Props {
  filterType: KanbanTypeFilter
}

function ButtonFilterType(props: Props) {
  const dispatch = useDispatch();

  const currentFilterType = useSelector(
    (state: RootState) => state.kanbanFilter.type
  );

  return (
    <button type="button"
      className={`button is-${props.filterType.toLowerCase()} is-small ${currentFilterType === props.filterType ? 'is-active' : ''}`}
      onClick={() => dispatch(setTypeFilter(props.filterType))}
    >
      {props.filterType}
    </button>
  );
};

export default ButtonFilterType;
