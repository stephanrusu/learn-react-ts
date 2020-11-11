import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import KanbanColumn from './KanbanColumn';
import { RootState } from '../../store/rootReducer';
import { getKeyValue } from '../../utils';
import KanbanFilter from './filters/KanbanFilter';
import { toggleFilter } from '../../store/kanbanFilterTypeSlice';

function KanbanContainer() {
  const dispatch = useDispatch();
  // const columns : { [uuid: string] : Board} = ...
  const columns = useSelector(
    (state: RootState) => state.kanban.boards
  );

  const isToggledFilter = useSelector(
    (state: RootState) => state.kanbanFilter.toggle
  );

  return (
    <>
      <div className="card mb-4 kanban-header">
        <div className="card-header">
          <p className="card-header-title">Kanban</p>
          <button type="button" className={`button is-white ${isToggledFilter ? 'is-active': ''}`} onClick={() => dispatch(toggleFilter(!isToggledFilter))}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-filter-2">
              <line x1="4" y1="6" x2="20" y2="6"/>
              <line x1="7" y1="12" x2="17" y2="12"/>
              <line x1="10" y1="18" x2="14" y2="18"/>
            </svg>
          </button>
        </div>
        {
          isToggledFilter && <KanbanFilter />
        }
      </div>
      <div className="columns is-centered kanban-container">
        {
          Object.keys(columns).map((key: string) => {
            const column = getKeyValue(columns, key);
            return (
              <KanbanColumn key={column.uuid} boardId={column.uuid}
                title={column.title} allowNew={column.allowNew}
                type={column.color}
              />
            )
          }
          )
        }
      </div>
    </>
  );
}

export default KanbanContainer;
