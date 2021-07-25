import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/rootReducer';

interface Props {
  activeTab: string;
  boardId: string;
  taskId: string;
}
function TabActionDescription(props: Props): React.ReactElement {
  const { boardId, taskId } = props;
  const task = useSelector((state: RootState) => state.kanban.boards[boardId].tasks[taskId]);

  return (
    <div className={`${props.activeTab !== 'description' ? 'is-hidden' : ''}`}>
      <div className="content">{task.description}</div>
    </div>
  );
}
export default TabActionDescription;
