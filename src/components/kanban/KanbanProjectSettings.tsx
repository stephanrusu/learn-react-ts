import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { ROUTE_KANBAN } from '../../router/routes';
import { updateProjectTitle } from '../../store/kanbanSlice';
import { RootState } from '../../store/rootReducer';

function KanbanProjectSettings() {
  const history = useHistory();
  const location = useLocation<any>();
  const dispatch = useDispatch();

  const project = useSelector(
    (state: RootState) => state.kanban.title
  );

  const boards = useSelector(
    (state: RootState) => state.kanban.boards
  )

  const [projectTitle, setProjectTitle] = useState<string>(project);

  const closeForm = () => {
    const background = location.state && location.state.background;

    if (background === undefined) {
      history.push(ROUTE_KANBAN);
    } else {
      history.goBack();
    }
  }

  const updateForm = () => {
    dispatch(updateProjectTitle(projectTitle));
    closeForm();
  }

  return (
    <div className="card project-settings">
      <header className="card-header">
        <p className="card-header-title">Project Settings</p>
      </header>
      <div className="card-content">
        <div className="content">
          <div className="field">
            <label className="label" htmlFor="projectTitle">Title</label>
            <div className="control">
              <input className="input" type="text" placeholder="Task title" id="projectTitle"
                value={projectTitle} onChange={(e) => setProjectTitle(e.target.value) } />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="projectTitle">Boards</label>
            <div className="control list">
              {
                Object.values(boards).map((board: Board) => (
                  <div key={board.uuid} className="list-item">{board.title}</div>
                ))
              }
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
};

export default KanbanProjectSettings;
