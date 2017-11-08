import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Square extends Component {
  render() {
    const { x, y } = this.props;

    return (
      <div style={{
        width: '100%',
        height: '100%'
      }}>
        <div style={{
          height: '1px',
          width: [0, 8].includes(x) ? '50%' : '100%',
          backgroundColor: 'black',
          transform: `translate(${x===0?'30px':0}, 30px)`}} />
        <div style={{
          height: ([0, 9].includes(y) || ([4,5].includes(y) && ![0,8].includes(x)) ) ? '50%' : '100%',
          width: '1px',
          backgroundColor: 'black',
          transform: `translate(30px, ${y===0 || (y == 5 && ![0,8].includes(x))?'30px':0})`}} />
        {this.props.children}
      </div>
    );
  }
}

Square.propTypes = {
};
