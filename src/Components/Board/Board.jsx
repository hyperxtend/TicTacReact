import React, {Component} from "react";
<<<<<<< HEAD:src/Components/Board/Board.jsx
import Square from "../square/square.jsx";
=======
import Square from "../Square/Square";
>>>>>>> eb3f3535bc4f68617accc8af116f2d832947220c:src/Components/Board.js
import {Container, Row} from "react-bootstrap";

export default class Board extends Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <Container >   
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