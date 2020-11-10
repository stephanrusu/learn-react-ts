import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import KanbanCard from './KanbanCard';

interface Props {
  title: string,
  allowNew?: boolean,
  type?: string,
  boardId: string,
}

function KanbanColumn(props: Props) {
  const tasks = useSelector(
    (state: RootState) => state.kanban.boards[props.boardId].tasks
  )
  const listTasksColumn = Object.keys(tasks);

  return (
    <div className="column">
      <div className={`panel ${props.type ?? ''}`}>
        <div className="panel-heading">
          <div>{props.title}</div>
          <div className="tag is-white">{listTasksColumn.length}</div>
        </div>
        {
          listTasksColumn.map((key: string) => {
            const task = tasks[key];
            return (
              <div className="panel-block" key={task.uuid}>
                <KanbanCard boardId={props.boardId} taskId={task.uuid} />
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
