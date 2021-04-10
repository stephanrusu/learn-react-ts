import React from 'react';
import ReturnHome from './common/ReturnHome';
import KanbanContainer from './kanban/KanbanContainer';

function KanbanPage(): React.ReactElement {
  return (
    <>
      <ReturnHome />
      <KanbanContainer />
    </>
  );
}
export default KanbanPage;
