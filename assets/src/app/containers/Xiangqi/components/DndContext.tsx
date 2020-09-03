/**
 *
 * DragDropContext
 *
 */

import React, { useState, useEffect } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { DndProvider } from 'react-dnd';

import { PieceShape } from '../types';
import { ChessBoard } from './ChessBoard';

interface Props {
  redPieces: PieceShape[];
  blackPieces: PieceShape[];
  kill: (item: object) => any;
  movePiece: (item: object) => any;
  canDrop: (item: object) => Boolean;
  turn: string;
}

const DragDropContext = (props: Props) => {
  const [hasTouch, setTouchable] = useState(false);
  useEffect(() => {
    let touchable = false;
    if ('ontouchstart' in window.document.documentElement) {
      touchable = true;
    }
    if (window.navigator.msPointerEnabled) {
      touchable = true;
    }
    setTouchable(touchable);
  }, []);
  const { redPieces, blackPieces, kill, movePiece, canDrop, turn } = props;

  return (
    <>
      <DndProvider backend={hasTouch ? TouchBackend : HTML5Backend}>
        <ChessBoard
          redPieces={redPieces}
          blackPieces={blackPieces}
          kill={kill}
          movePiece={movePiece}
          canDrop={canDrop}
          turn={turn}
        />
      </DndProvider>
    </>
  );
};

export default DragDropContext;
