import React from 'react';
import KanbanCard from './KanbanCard';

interface Props {
  title: string,
  tasks: Task[],
  allowNew?: boolean,
  type?: string,
}

function KanbanColumn(props: Props) {
  return (
    <div className="column">
      <div className={`panel ${props.type ?? ''}`}>
        <div className="panel-heading">
          <div>{props.title}</div>
          <div className="tag is-white">{props.tasks.length}</div>
        </div>
        {
          props.tasks.map((task: Task) => (
              <div className="panel-block" key={task.uuid}>
                <KanbanCard task={task} />
              </div>
            )
          )
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
