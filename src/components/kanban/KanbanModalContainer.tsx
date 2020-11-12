import React, { ReactNode } from 'react';
import { useHistory } from 'react-router-dom';
interface Props {
  children: ReactNode
}

// todo
function KanbanModalContainer({ children }: Props) {
  let history = useHistory();
  const back = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    history.goBack();
  };

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={back}></div>
      <div className="modal-content">
        {children}
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={back}></button>
    </div>
  );
};

export default KanbanModalContainer;
