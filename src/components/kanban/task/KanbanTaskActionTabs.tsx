import React, { useState } from 'react';
import TabActionComments from './tabs/TabActionComments';
import TabActionSubtasks from './tabs/TabActionSubtasks';

function KanbanTaskActionTabs() {
  const [activeTab, setActiveTab] = useState<string>('subtasks');

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
        <TabActionSubtasks activeTab={activeTab} />
        <TabActionComments activeTab={activeTab} />
      </div>
    </div>
  );
};

export default KanbanTaskActionTabs;
