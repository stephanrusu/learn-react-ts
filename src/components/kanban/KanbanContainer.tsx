import React from 'react';
import { useSelector } from 'react-redux';
import KanbanColumn from './KanbanColumn';
import { RootState } from '../../store/rootReducer';
import { getKeyValue } from '../../utils';

function KanbanContainer() {
  // const columns : { [uuid: string] : Board} = ...
  const columns = useSelector(
    (state: RootState) => state.kanban.boards
  )

  return (
    <div className="columns is-centered kanban-container">
      {
        Object.keys(columns).map((key: string) => {
          const column = getKeyValue(columns, key);
          return (
            <KanbanColumn key={column.uuid} boardId={column.uuid}
              title={column.title} allowNew={column.allowNew}
              type={column.color} tasks={column.tasks}
            />
          )
        }
        )
      }
    </div>
  );
}

export default KanbanContainer;
