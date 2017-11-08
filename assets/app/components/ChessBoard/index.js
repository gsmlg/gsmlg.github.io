/**
*
* ChessBoard
*
*/

import React from 'react';
// import styled from 'styled-components';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import Square from './square';
import Piece from './piece';

const PieceTypes = [
  0, // 帅
  1, // 士
  2, // 相
  3, // 马
  4, // 车
  5, // 炮
  6, // 兵
];

const redPieces = [
  {
    name: '车',
    type: '',
    position: {x: 0, y: 0}
  },
  {
    name: '马',
    type: '',
    position: {x: 1, y: 0}
  },
  {
    name: '相',
    type: '',
    position: {x: 2, y: 0}
  },
  {
    name: '士',
    type: '',
    position: {x: 3, y: 0}
  },
  {
    name: '帅',
    type: '',
    position: {x: 4, y: 0}
  },
  {
    name: '士',
    type: '',
    position: {x: 5, y: 0}
  },
  {
    name: '相',
    type: '',
    position: {x: 6, y: 0}
  },
  {
    name: '马',
    type: '',
    position: {x: 7, y: 0}
  },
  {
    name: '车',
    type: '',
    position: {x: 8, y: 0}
  },
  {
    name: '炮',
    type: '',
    position: {x: 1, y: 2}
  },
  {
    name: '炮',
    type: '',
    position: {x: 7, y: 2}
  },
  {
    name: '兵',
    type: '',
    position: {x: 0, y: 3}
  },
  {
    name: '兵',
    type: '',
    position: {x: 2, y: 3}
  },
  {
    name: '兵',
    type: '',
    position: {x: 4, y: 3}
  },
  {
    name: '兵',
    type: '',
    position: {x: 6, y: 3}
  },
  {
    name: '兵',
    type: '',
    position: {x: 8, y: 3}
  },
];

const blackPieces = [];

class ChessBoard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  renderSquare(i) {
    const x = i % 9;
    const y = Math.floor(i / 9);

    const board = [
      ['车', '马', '相', '士', '帅', '士', '相', '马', '车'],
      [],
      [null, '炮', null, null, null, null, null, '炮', null],
      ['兵', null, '兵', null, '兵', null, '兵', null, '兵'],
      [],
      [],
      ['卒', null, '卒', null, '卒', null, '卒', null, '卒'],
      [null, '砲', null, null, null, null, null, '砲', null],
      [],
      ['車', '馬', '象', '仕', '将', '仕', '象', '馬', '車'],
    ];

    const key = (board[y][x] != null) ?
      <Piece>{board[y][x]}</Piece>
      : null;

    return (
      <div key={i}
           style={{ width: '60px', height: '60px', position: 'relative' }}>
        <Square x={x} y={y}>
          {key}
        </Square>
      </div>
    );
  }

  render() {
    const squares = [];
    for (let i = 0; i < 90; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div style={{
        width: '540px',
        height: '600px',
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative',
      }}>
        {squares}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '25%',
          marginTop: '-30px',
          height: '60px',
          lineHeight: '60px',
          fontSize: '24px',
          userSelect: 'none',
          zIndex: -1
        }}>楚 河</div>
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '25%',
          marginTop: '-30px',
          height: '60px',
          lineHeight: '60px',
          fontSize: '24px',
          userSelect: 'none',
          zIndex: -1
        }}>漢 界</div>
      </div>
    );
  }
}

ChessBoard.propTypes = {

};

export default DragDropContext(HTML5Backend)(ChessBoard);
