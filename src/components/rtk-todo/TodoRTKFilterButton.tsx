import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setVisibilityFilter, VisibilityFilter} from '../../store/visibilityFilterSlice';
import { RootState } from '../../store/rootReducer';

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
    <button type="button" className={`button ${currentvisibilityFilter === visibilityFilter ? 'is-active': ''}`}
      onClick={() => dispatch(setVisibilityFilter(visibilityFilter))}>
      {text}
    </button>
  )
}

export default TodoRTKFilterButton;
