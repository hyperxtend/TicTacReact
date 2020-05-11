import React, { Component } from 'react';
<<<<<<< HEAD
import { Button, Container } from 'react-bootstrap';
=======
import PropTypes from 'prop-types';
import { Container, Button } from 'react-bootstrap';
>>>>>>> fix: Fixed default export and import statements

import Board from '../board';
import { calculateWinner } from '../../utilities/game-utilities';

class Game extends Component {
  render () {
    const history = this.props.history;
    const current = history[this.props.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
    const desc = move ? 'Go to move #' + move : 'Restart';

      return (
        <span key={move} className={(this.props.stepNumber === move ? 'current' : '')}>
          <Button 
          size='sm'
          variant='outline-dark'
           onClick={() => this.props.jumpTo(move)}>
            {desc}
          </Button>
        </span>
      )
    });

    let status
    if (winner) {
      status = `${winner['winner']} is the Winner!`
    } else {
      status = `Next player is  ${this.props.xIsNext ? 'X' : 'O'}`
    }
    if(!winner && this.props.stepNumber === 9){
      status = `It's a Draw!`;
    };

    return (
      <Container className='game'>
        <div className='gameBoard'>
          <Board
            squares={current.squares}
            onClick={(i) => this.props.onClick(i)}
            winner_combination={(winner ? winner['winner_combination'] : [])}
          />
        </div>
        <div className='gameInfo'>
          <div className='playerStatus'>{status}</div>
          <span className='playerMoves'>{this.props.movesAscOrder ? moves : moves.reverse()}</span>
          <Button size='sm' variant='dark' onClick={() => this.props.sortMoves()} className="sortButton">
            Change order
            </Button>
        </div>
      </Container>
    )
  }
};

export default Game;
