import React, { useState } from 'react';
import TabActionComments from './tabs/TabActionComments';
import TabActionSubtasks from './tabs/TabActionSubtasks';
interface Props {
  boardId: string,
  taskId: string
}

function KanbanTaskActionTabs(props: Props) {
  const [activeTab, setActiveTab] = useState<string>('comments');

  return (
    <div className="content">
      <div className="tabs">
        <ul>
          <li className={`tab-item ${activeTab === 'subtasks' ? 'is-active' : ''}`} onClick={() => setActiveTab('subtasks')}>
            <span className="tab-link">Sub tasks</span>
          </li>
          <li className={`tab-item ${activeTab === 'comments' ? 'is-active' : ''}`} onClick={() => setActiveTab('comments')}>
            <span className="tab-link">Comments</span>
          </li>
        </ul>
      </div>
      <div className="tabs-content">
        <TabActionSubtasks activeTab={activeTab} {...props} />
        <TabActionComments activeTab={activeTab} {...props} />
      </div>
    </div>
  );
};

export default KanbanTaskActionTabs;
