import React, { ReactNode } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

interface ModalProps {
  children: ReactNode;
}

function KanbanModalContainer({ children }: ModalProps): React.ReactElement {
  const history = useHistory();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const location = useLocation<any>();
  const back = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    // history.goBack();
    history.push(location.state.background);
  };

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={back}></div>
      <div className="modal-content">{children}</div>
      <button className="modal-close is-large" aria-label="close" onClick={back}></button>
    </div>
  );
}

export default KanbanModalContainer;
