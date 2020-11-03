import React from 'react';
import KanbanCard from './KanbanCard';

interface Props {
  title: string,
  allowNew?: boolean
  type?: string
}

function KanbanColumn(props: Props) {
  return (
    <div className="column">
      <div className={`panel has-background-white ${props.type ?? ''}`}>
        <p className="panel-heading">{props.title}</p>
        <div className="panel-block">
          <KanbanCard />
        </div>
        {
          props.allowNew && (
            <div className="panel-block">
              <button className="button is-primary is-outlined is-fullwidth">
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
