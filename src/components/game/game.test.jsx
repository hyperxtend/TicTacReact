import React from 'react';
import Game from './game';
import { shallow, mount } from 'enzyme';
import '../../setup-tests';

describe('<Game/>', () =>{
  it('renders without error', () => {
    shallow(<Game />);
  });
  
  it('status is correct', () => {
    const comp = mount(<Game />),
     firstPlayer = comp
      .find('div.gameInfo')
      .children()
      .first()
      .text();
    expect(firstPlayer).toEqual('Next player is X');
  });
  
    it('gets Next Player', () => {
      const comp = mount(<Game />),
      move1 = comp.find('button.square').at(0);
      move1.simulate('click');
       const secondPlayer = comp
        .find('div.gameInfo')
        .children()
        .first()
        .text();
      expect(secondPlayer).toEqual('Next player is O');
    });
  
  it('determines Win', () => {
    const comp = mount(<Game />),
     move1 = comp.find('button.square').at(0),
     move2 = comp.find('button.square').at(1),
     move3 = comp.find('button.square').at(4),
     move4 = comp.find('button.square').at(5),
     move5 = comp.find('button.square').at(8);
    move1.simulate('click');
    move2.simulate('click');
    move3.simulate('click');
    move4.simulate('click');
    move5.simulate('click');
    const winner = comp
      .find('div.gameInfo')
      .children()
      .first()
      .text();
    expect(winner).toBe('X is the Winner!');
    });
});




