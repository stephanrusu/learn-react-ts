import React from 'react';
import { useSelector } from 'react-redux';
import KanbanColumn from './KanbanColumn';
import { RootState } from '../../store/rootReducer';

function KanbanContainer() {
  const columns = useSelector(
    (state: RootState) => state.kanban
  )
  return (
    <div className="columns is-centered kanban-container">
      {
        columns.map((column: Board) =>
          <KanbanColumn key={column.uuid}
            title={column.title} allowNew={column.allowNew}
            type={column.color} tasks={column.tasks}
          />
        )
      }
    </div>
  );
}

export default KanbanContainer;
