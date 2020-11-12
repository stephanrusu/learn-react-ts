import React from 'react';
import { useSelector } from 'react-redux';
import { KanbanPriorityFilter, KanbanTypeFilter } from '../../constants/enums';
import { RootState } from '../../store/rootReducer';
import KanbanCard from './KanbanCard';

interface Props {
  title: string,
  allowNew?: boolean,
  type?: string,
  boardId: string,
}

interface ListTask {
  [uuid: string] : Task
}

const applyFilter = (obj:ListTask, predicate:any) =>
  Object.keys(obj)
     .filter( key => predicate(obj[key]) )
    .reduce( (res, key) => Object.assign(res, { [key]: obj[key] }), {} );

const displayFilters = (list: ListTask, priority: KanbanPriorityFilter, type: KanbanTypeFilter) => {
  let filteredTasks = list;

  if (priority !== KanbanPriorityFilter.all) {
    filteredTasks = applyFilter(list, (task: Task) => task.priority === priority)
  }

  if (type !== KanbanTypeFilter.all) {
    filteredTasks = applyFilter(filteredTasks, (task: Task) => task.type === type)
  }
  return filteredTasks;
}

function KanbanColumn(props: Props) {
  const tasks = useSelector(
    (state: RootState) => state.kanban.boards[props.boardId].tasks
  );

  const priorityFilter = useSelector(
    (state: RootState) => state.kanbanFilter.priority
  );

  const typeFilter = useSelector(
    (state: RootState) => state.kanbanFilter.type
  );

  const listTasksColumn = Object.keys(displayFilters(tasks, priorityFilter, typeFilter));

  return (
    <div className="column">
      <div className={`panel ${props.type ?? ''}`}>
        <div className="panel-heading">
          {/* <button type="button" className="button is-white add-task">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </button> */}
          <div className="text">{props.title}</div>
          <div className="tag is-white">{listTasksColumn.length}</div>
        </div>
        {
          listTasksColumn.map((uuid: string) => {
            return (
              <div className="panel-block" key={uuid}>
                <KanbanCard boardId={props.boardId} taskId={uuid} />
              </div>
            )
          })
        }
      </div>
      <div className="add-new-task">
        <button className="button is-info is-light is-fullwidth">
          Add new task
        </button>
      </div>
    </div>
  )
}

export default KanbanColumn;
