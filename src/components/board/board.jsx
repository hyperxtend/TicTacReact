import React, { Component } from 'react';
import Square from '../square';
import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';

export default class Board extends Component {
  renderSquare(int) {
    Board.propTypes = {
      onClick: PropTypes.func.isRequired,
      squares: PropTypes.func.isRequired
    };
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
