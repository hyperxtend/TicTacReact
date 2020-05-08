import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Container, Row } from 'react-bootstrap';
import Square from '../square';


export default class Board extends Component {
  renderSquare(int) {
    return <Square
     value={this.props.squares[int]}
     onClick={() => this.props.onClick(int)}
      />;
  }
  render() {
    return (
      <Container>
        <Row>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </Row>
        <Row>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </Row>
        <Row>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </Row>
      </Container>
    );

  }
}
Board.propTypes = {
  renderSquare: PropTypes.func,
  int: PropTypes.number,
  onClick: PropTypes.func,
  value: PropTypes.string
}