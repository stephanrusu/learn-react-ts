import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setVisibilityFilter } from '../../store/visibilityFilterSlice';
import { RootState } from '../../store/rootReducer';
import { VisibilityFilter } from '../../constants/enums';

interface Props {
  visibilityFilter: VisibilityFilter,
  text: string
}

function TodoRTKFilterButton({visibilityFilter, text} : Props) {
  const dispatch = useDispatch();

  const currentvisibilityFilter = useSelector(
    (state: RootState) => state.visibilityFilter
  );

  return (
    <button type="button" className={`button is-primary ${currentvisibilityFilter === visibilityFilter ? 'is-active': ''}`}
      onClick={() => dispatch(setVisibilityFilter(visibilityFilter))}>
      {text}
    </button>
  )
}

export default TodoRTKFilterButton;
