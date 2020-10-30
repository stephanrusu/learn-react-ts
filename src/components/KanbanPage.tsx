import React from 'react';
import ReturnHome from './common/ReturnHome';
import KanbanContainer from './kanban/KanbanContainer';


function KanbanPage() {
  return (
    <>
      <div>
        <ReturnHome />
      </div>
      <KanbanContainer />
    </>
  );
}
export default KanbanPage;
