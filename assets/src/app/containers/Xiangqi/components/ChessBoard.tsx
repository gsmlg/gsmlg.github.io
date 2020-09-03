/**
 *
 * ChessBoard
 *
 */

import React, { useState, useEffect, useCallback } from 'react';
import _ from 'lodash';

import Square from './Square';
import Piece from './Piece';

import { PieceShape } from '../types';

interface Props {
  redPieces: PieceShape[];
  blackPieces: PieceShape[];
  kill: (item: object) => any;
  movePiece: (item: PieceShape, pos: object) => any;
  canDrop: (item: object) => Boolean;
  turn: string;
}

export const ChessBoard = ({
  blackPieces,
  redPieces,
  movePiece,
  turn,
  kill,
}: Props) => {
  const allPieces = redPieces.concat(blackPieces);

  const renderSquare = (i): JSX.Element => {
    const x = i % 9;
    const y = Math.floor(i / 9);
    const pieces = allPieces.filter(p => p.live === true);
    const item = _.find(pieces, { position: { x, y } });
    const key = item != null ? <Piece item={item} /> : null;
    const killPiece = () => {
      item && kill(item);
    };

    return (
      <div
        key={i}
        style={{
          width: '60px',
          height: '60px',
          position: 'relative',
          backgroundColor: 'transparent',
        }}
      >
        <Square
          piece={item}
          x={x}
          y={y}
          movePiece={movePiece}
          pieces={pieces}
          kill={killPiece}
        >
          {key}
        </Square>
      </div>
    );
  };

  const squares = [] as JSX.Element[];
  for (let i = 0; i < 90; i += 1) {
    squares.push(renderSquare(i));
  }

  return (
    <div
      style={{
        width: '540px',
        height: '600px',
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative',
      }}
    >
      {squares}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '25%',
          marginTop: '-30px',
          height: '60px',
          lineHeight: '60px',
          fontSize: '24px',
          userSelect: 'none',
        }}
      >
        楚 河
      </div>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '25%',
          marginTop: '-30px',
          height: '60px',
          lineHeight: '60px',
          fontSize: '24px',
          userSelect: 'none',
        }}
      >
        漢 界
      </div>
    </div>
  );
};

export default ChessBoard;
