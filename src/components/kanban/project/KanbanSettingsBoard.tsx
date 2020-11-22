import React, { Dispatch, SetStateAction } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/rootReducer';

interface Props {
  boardId: string,
  boardsOrder: string[]
  moveBoard: Dispatch<SetStateAction<string[]>>,
}

function KanbanSettingsBoard({boardId, boardsOrder, moveBoard}: Props) {
  const boards = useSelector(
    (state: RootState) => state.kanban.boards
  );

  const board = boards[boardId];
  const boardIndex = boardsOrder.indexOf(boardId);
  const isBoardFirst = boardIndex === 0;
  const isBoardLast  = boardIndex === boardsOrder.length - 1;

  const moveBoardOrder = (direction: number) => {
    const newBoardsOrder = [...boardsOrder];
    const newBoardIndex = boardIndex + direction;

    // swap values
    const temp = newBoardsOrder[boardIndex];
    newBoardsOrder[boardIndex] = newBoardsOrder[newBoardIndex];
    newBoardsOrder[newBoardIndex] = temp;

    moveBoard(newBoardsOrder);
  }

  return (
    <div key={boardId} className="list-item">
      <div className="text">
        {board.title}
      </div>
      <div className="actions">
        <div className="buttons">
          {/* <button type="button" className="button is-link is-light is-small">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
          </button>
          <button type="button" className="button is-link is-light is-small">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
          </button> */}
          <button type="button" className="button is-link is-light is-small" disabled={isBoardFirst} onClick={() => moveBoardOrder(-1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
          </button>
          <button type="button" className="button is-link is-light is-small" disabled={isBoardLast} onClick={() => moveBoardOrder(1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default KanbanSettingsBoard;
