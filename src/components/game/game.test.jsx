import React from 'react';
import Game from './game';
import { shallow, mount } from 'enzyme';

it('<Game/> renders without error', () => {
  shallow(<Game />);
});

it('<Game/> status is correct', () => {
  const comp = mount(<Game />),
   firstPlayer = comp
    .find('div.gameInfo')
    .children()
    .first()
    .text();
  expect(firstPlayer).toEqual('Next player is X');

  it('<Game/> gets Next Player', () => {
    const secondPlayer = comp
      .find('div.gameInfo')
      .children()
      .first()
      .text();
    expect(secondPlayer).toEqual('Next player is O');
  });

it('<Game/> determines Win', () => {
  const move2 = comp.find('button.square').at(1),
   move3 = comp.find('button.square').at(4),
   move4 = comp.find('button.square').at(5),
   move5 = comp.find('button.square').at(8),
   winner = comp
    .find('div.gameInfo')
    .children()
    .first()
    .text();
  expect(winner).toEqual('X is the Winner!');
  move2.simulate('click');
  move3.simulate('click');
  move4.simulate('click');
  move5.simulate('click');
  });
});


