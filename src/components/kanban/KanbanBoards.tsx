import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { getKeyValue } from '../../utils';
import { toggleFilter } from '../../store/kanbanFilterTypeSlice';

import KanbanFilter from './filters/KanbanFilter';
import KanbanColumn from './KanbanColumn';
import { Link, useLocation } from 'react-router-dom';
import { ROUTE_KANBAN_PROJECT } from '../../router/routes';

function KanbanBoards(): React.ReactElement {
  const location = useLocation();
  const dispatch = useDispatch();
  // const columns : { [uuid: string] : Board} = ...
  const projectTitle = useSelector((state: RootState) => state.kanban.title);
  const columns = useSelector((state: RootState) => state.kanban.boards);

  const columnOrder = useSelector((state: RootState) => state.kanban.boardsOrder);

  const isToggledFilter = useSelector((state: RootState) => state.kanbanFilter.toggle);

  return (
    <>
      <div className="card mb-4 kanban-header">
        <div className="card-header">
          <p className="card-header-title">{projectTitle}</p>
          <Link
            to={{
              pathname: ROUTE_KANBAN_PROJECT,
              state: { background: location },
            }}
            className={`button is-white`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-sliders"
            >
              <line x1="4" y1="21" x2="4" y2="14"></line>
              <line x1="4" y1="10" x2="4" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="3"></line>
              <line x1="20" y1="21" x2="20" y2="16"></line>
              <line x1="20" y1="12" x2="20" y2="3"></line>
              <line x1="1" y1="14" x2="7" y2="14"></line>
              <line x1="9" y1="8" x2="15" y2="8"></line>
              <line x1="17" y1="16" x2="23" y2="16"></line>
            </svg>
          </Link>
          <button
            type="button"
            className={`button is-white ${isToggledFilter ? 'is-active' : ''}`}
            onClick={() => dispatch(toggleFilter(!isToggledFilter))}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-filter-2"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="7" y1="12" x2="17" y2="12" />
              <line x1="10" y1="18" x2="14" y2="18" />
            </svg>
          </button>
        </div>
        {isToggledFilter && <KanbanFilter />}
      </div>
      <div className="columns is-centered kanban-container">
        {columnOrder.map((key: string) => {
          const column = getKeyValue(columns, key);
          return (
            <KanbanColumn key={column.uuid} boardId={column.uuid} title={column.title} allowNew={column.allowNew} type={column.color} />
          );
        })}
      </div>
    </>
  );
}

export default KanbanBoards;
