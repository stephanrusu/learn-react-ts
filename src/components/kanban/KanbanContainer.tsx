import React from 'react';
import { useSelector } from 'react-redux';
import KanbanColumn from './KanbanColumn';
import { RootState } from '../../store/rootReducer';
import { getKeyValue } from '../../utils';
import KanbanFilter from './filters/KanbanFilter';

function KanbanContainer() {
  // const columns : { [uuid: string] : Board} = ...
  const columns = useSelector(
    (state: RootState) => state.kanban.boards
  );

  return (
    <>
      <KanbanFilter />
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
