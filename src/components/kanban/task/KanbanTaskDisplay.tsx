import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../../store/rootReducer';
import NotFoundPage from '../../NotFoundPage';
import KanbanTask from './KanbanTask';

function KanbanDisplayTask() {
  const { taskId } = useParams<RouteParams>();
  const boards = useSelector((state: RootState) => state.kanban.boards);

  if (taskId === undefined) {
    return <NotFoundPage />;
  }

  const getBoard = (taskId: string) => {
    // ignore key as there is an uuid inside a board
    for (const [, board] of Object.entries(boards)) {
      if (board.tasks[taskId] !== undefined) {
        return board;
      }
    }
    // if nothing, return first board
    return boards[0];
  };

  const board = getBoard(taskId);

  return (
    <KanbanTask taskId={taskId} board={board} />
  );
}

export default KanbanDisplayTask;
