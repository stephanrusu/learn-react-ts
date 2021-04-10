import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { ROUTE_KANBAN } from '../../router/routes';
import { updateBoardsOrder, updateProjectTitle } from '../../store/kanbanSlice';
import { RootState } from '../../store/rootReducer';
import KanbanSettingsBoard from './project/KanbanSettingsBoard';

function KanbanProjectSettings() {
  const history = useHistory();
  const location = useLocation<any>();
  const dispatch = useDispatch();

  const project = useSelector((state: RootState) => state.kanban.title);

  const boardsOrder = useSelector((state: RootState) => state.kanban.boardsOrder);

  const [order, setOrder] = useState<string[]>(boardsOrder);

  const [projectTitle, setProjectTitle] = useState<string>(project);

  const closeForm = () => {
    const background = location.state && location.state.background;

    if (background === undefined) {
      history.push(ROUTE_KANBAN);
    } else {
      history.goBack();
    }
  };

  const updateForm = () => {
    dispatch(updateProjectTitle(projectTitle));
    dispatch(updateBoardsOrder(order));
    closeForm();
  };

  return (
    <div className="card project-settings">
      <header className="card-header">
        <p className="card-header-title">Project Settings</p>
      </header>
      <div className="card-content">
        <div className="content">
          <div className="field">
            <label className="label" htmlFor="projectTitle">
              Title
            </label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Task title"
                id="projectTitle"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="projectTitle">
              Boards
            </label>
            <div className="control list">
              {order.map((boardId: string) => (
                <KanbanSettingsBoard key={boardId} boardId={boardId} boardsOrder={order} moveBoard={setOrder} />
              ))}
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
          <button type="button" className="button is-link is-fullwidth" onClick={() => updateForm()}>
            Save
          </button>
        </div>
      </footer>
    </div>
  );
}

export default KanbanProjectSettings;
