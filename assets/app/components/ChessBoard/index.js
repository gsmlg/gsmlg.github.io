/**
*
* ChessBoard
*
*/

import React from 'react';
// import styled from 'styled-components';
import HTML5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';
import { DragDropContext } from 'react-dnd';
import _ from 'lodash';

import Square from './square';
import Piece from './piece';

class ChessBoard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  renderSquare(i) {
    const x = i % 9;
    const y = Math.floor(i / 9);
    const movePiece = this.props.movePiece;
    const { blackPieces, redPieces } = this.props;
    const pieces = _.filter(redPieces.concat(blackPieces), { live: true });
    const item = _.find(pieces, { position: { x, y } });
    const key = (item != null) ? <Piece item={item} turn={this.props.turn} /> : null;

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
          canDrop={this.props.canDrop}
          pieces={pieces}
          kill={() => item && this.props.kill(item)}
        >
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
        >楚 河
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
        >漢 界
        </div>
      </div>
    );
  }
}

ChessBoard.propTypes = {

};

const hasTouch = ('ontouchstart' in document.documentElement) || window.navigator.msPointerEnabled;

export default DragDropContext(hasTouch ? TouchBackend : HTML5Backend)(ChessBoard);
