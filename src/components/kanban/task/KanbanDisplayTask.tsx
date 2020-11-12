import React from 'react';
import { useParams } from 'react-router-dom';

function KanbanDisplayTask() {
  const { taskId } = useParams<RouteParams>();
  return(
    <div>
      {taskId}
    </div>
  );
};

export default KanbanDisplayTask;
