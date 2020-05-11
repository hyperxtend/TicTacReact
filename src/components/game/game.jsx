import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from 'react-bootstrap';

import Board from '../board';

 class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(int) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
     const current = history[history.length - 1];
     const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[int]) {
      return;
    }
    squares[int] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([
        {
          squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }
  render() {
    const { history } = this.state;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
    const desc = move ? `Go to move #${move}` : 'Restart';
      return (
        <span key={move}>
          <Button size="sm"
          variant="outline-dark"
          onClick={() => this.jumpTo(move)}>
            {desc}
          </Button>
        </span>
      );
    });

    let status;
    if (winner) {
      status = `${winner} is the Winner!`;
    } else {
      status = `Next player is ${this.state.xIsNext ? 'X' : 'O'}`;
    }
    if(!winner && this.state.stepNumber === 9){
      status = `It's a Draw!`;
    }

    return (
      <Container className="game">
        <div className="gameBoard">
          <Board
          squares={current.squares}
          onClick={int => this.handleClick(int)} />
        </div>
        <div className="gameInfo">
          <div className="playerStatus">{status}</div>
          <span className="playerMoves">{moves}</span>
        </div>
      </Container>
    );
  }
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let num = 0; num < lines.length; num++) {
    const [a, b, c] = lines[num];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

Game.propTypes = {
  squares: PropTypes.array,
  history: PropTypes.array,
  stepNumber: PropTypes.number,
  xIsNext: PropTypes.bool,
  move: PropTypes.number,
  desc: PropTypes.string,
  jumpTo: PropTypes.func,
  handleClick: PropTypes.func,
  calculateWinner: PropTypes.func
}

export default Game;
