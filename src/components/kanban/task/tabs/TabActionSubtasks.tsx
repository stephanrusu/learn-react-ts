import React from 'react';

interface Props {
  activeTab: string
}

function TabActionSubtasks(props: Props) {
  return (
    <div className={`${props.activeTab !== 'subtasks' ? 'is-hidden' : ''}`}>
      Subtask tab
    </div>
  );
};

export default TabActionSubtasks;
