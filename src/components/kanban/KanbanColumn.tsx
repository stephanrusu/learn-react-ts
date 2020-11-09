import React from 'react';
import KanbanCard from './KanbanCard';

interface Props {
  title: string,
  tasks: {
    [uuid: string] : Task
  },
  allowNew?: boolean,
  type?: string,
  boardId: string | number,
}

function KanbanColumn(props: Props) {
  const listTasksColumn = Object.keys(props.tasks);

  return (
    <div className="column">
      <div className={`panel ${props.type ?? ''}`}>
        <div className="panel-heading">
          <div>{props.title}</div>
          <div className="tag is-white">{listTasksColumn.length}</div>
        </div>
        {
          listTasksColumn.map((key: string) => {
            const task = props.tasks[key];
            return (
              <div className="panel-block" key={task.uuid}>
                <KanbanCard task={task} />
              </div>
            )
          })
        }
        {
          props.allowNew && (
            <div className="panel-block add-new-task">
              <button className="button is-link is-light is-fullwidth">
                + Add new task
              </button>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default KanbanColumn;
