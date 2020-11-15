import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { KanbanPriorityFilter, KanbanTypeFilter } from '../../../constants/enums';
import { RootState } from '../../../store/rootReducer';
import { addNewTask } from '../../../store/kanbanSlice';
import { getUuid } from '../../../utils';
import ButtonFilterTypeForm from './ButtonFilterTypeForm';
import ButtonFilterPriorityForm from './ButtonFilterPriorityForm';
import { ROUTE_KANBAN } from '../../../router/routes';

function KanbanTaskForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation<any>();

  const { taskId } = useParams<RouteParams>();
  const boards = useSelector(
    (state: RootState) => state.kanban.boards
  );

  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [taskType, setTaskType] = useState<KanbanTypeFilter>(KanbanTypeFilter.all);
  const [taskPriority, setTaskPriority] = useState<KanbanPriorityFilter>(KanbanPriorityFilter.all);

  const getBoard = (taskId: string) => {
    // ignore key as there is an uuid inside a board
    for (const [, board] of Object.entries(boards)) {
      if (board.tasks[taskId] !== undefined) {
        return board;
      }
    }
    // if nothing found, return first board
    return boards[0];
  };
  const boardId = location.state && location.state.boardId;
  // const background = location.state !== undefined ? location.state.background : location;

  const board = boardId === undefined ? getBoard(taskId) : boards[boardId];
  useEffect(() => {
    if (taskId !== undefined && board !== undefined) {
      const task = board.tasks[taskId];
      setTaskTitle(task.title);
      setTaskDescription(task.description);
      setTaskType(task.type);
      setTaskPriority(task.priority);
    }
  }, [taskId, board]);

  const saveTask = () => {
    const task = board.tasks[taskId];
    const newTask: Task = {
      uuid: taskId !== undefined ? task.uuid : getUuid(),
      date: taskId !== undefined ? task.date : new Date().getTime(),
      title: taskTitle,
      description: taskDescription,
      type: taskType,
      priority: taskPriority,
    };

    dispatch(addNewTask({ task: newTask, boardId: board.uuid }));
    closeForm();
  }

  const closeForm = () => {
    const background = location.state && location.state.background;

    if (background === undefined) {
      history.push(ROUTE_KANBAN);
    } else {
      history.goBack();
    }
  }

  return (
    <div className="card kanban-card-form">
      <header className="card-header">
        <p className="card-header-title">
          {
            taskId !== undefined ? `Edit task - ${taskId}`: 'Create task'
          }
        </p>
        <div className="tags">
          <span className={`tag ${board.color}`}>{board.title}</span>
        </div>
      </header>
      <div className="card-content">
        <div className="content">
        <div className="field">
            <label className="label">Type</label>
            <div className="buttons control">
              <ButtonFilterTypeForm filterType={KanbanTypeFilter.bug} selectedFilter={taskType} activeAction={setTaskType} />
              <ButtonFilterTypeForm filterType={KanbanTypeFilter.design} selectedFilter={taskType} activeAction={setTaskType} />
              <ButtonFilterTypeForm filterType={KanbanTypeFilter.task} selectedFilter={taskType} activeAction={setTaskType} />
            </div>
          </div>
          <div className="field">
            <label className="label">Priority</label>
            <div className="buttons control">
              <ButtonFilterPriorityForm filterType={KanbanPriorityFilter.blocker} selectedFilter={taskPriority} activeAction={setTaskPriority} />
              <ButtonFilterPriorityForm filterType={KanbanPriorityFilter.critical} selectedFilter={taskPriority} activeAction={setTaskPriority} />
              <ButtonFilterPriorityForm filterType={KanbanPriorityFilter.major} selectedFilter={taskPriority} activeAction={setTaskPriority} />
              <ButtonFilterPriorityForm filterType={KanbanPriorityFilter.minor} selectedFilter={taskPriority} activeAction={setTaskPriority} />
              <ButtonFilterPriorityForm filterType={KanbanPriorityFilter.trivial} selectedFilter={taskPriority} activeAction={setTaskPriority} />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="taskTitle">Title</label>
            <div className="control">
              <input className="input" type="text" placeholder="Task title" id="taskTitle"
                value={taskTitle} onChange={(e) => setTaskTitle(e.target.value) } />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="taskDescription">Description</label>
            <div className="control">
              <textarea className="textarea" placeholder="Task description" id="taskDescription" rows={3}
              value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}
              ></textarea>
            </div>
          </div>

        </div>
      </div>
      <footer className="card-footer">
        <div className="card-footer-item">
          <button type="button" className="button is-white is-fullwidth" onClick={() => closeForm()}>
            Cancel
          </button>
        </div>
        <div className="card-footer-item">
          <button type="button" className="button is-link is-fullwidth" onClick={() => saveTask()}>
            Save
          </button>
        </div>
      </footer>
    </div>
  );
}

export default KanbanTaskForm;
