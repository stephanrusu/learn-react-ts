import React, { useState } from 'react';
import TabActionComments from './tabs/TabActionComments';
import TabActionDescription from './tabs/TabActionDescription';
import TabActionSubtasks from './tabs/TabActionSubtasks';
interface Props {
  boardId: string;
  taskId: string;
}
function KanbanTaskActionTabs(props: Props): React.ReactElement {
  const [activeTab, setActiveTab] = useState<string>('description');

  const tabActions = [
    {
      id: 'description',
      title: 'Description',
    },
    {
      id: 'subtasks',
      title: 'Subtasks',
    },
    {
      id: 'comments',
      title: 'Comments',
    },
  ];

  return (
    <div className="content">
      <div className="tabs">
        <ul>
          {tabActions.map((tabEntry) => (
            <li
              key="tabEntry.id"
              className={`tab-item ${activeTab === tabEntry.id ? 'is-active' : ''}`}
              onClick={() => setActiveTab(tabEntry.id)}
            >
              <span className="tab-link">{tabEntry.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="tabs-content">
        <TabActionDescription activeTab={activeTab} {...props} />
        <TabActionSubtasks activeTab={activeTab} {...props} />
        <TabActionComments activeTab={activeTab} {...props} />
      </div>
    </div>
  );
}

export default KanbanTaskActionTabs;
