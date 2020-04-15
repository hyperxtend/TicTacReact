import React from 'react';
import { shallow, mount } from 'enzyme';
import Game from './game';


describe('<Game/>', () => {
  it('checks if component exists', () => {
    const component = shallow(<Game />);
    expect(component.exists());
  });

  it('status is correct', () => {
    const comp = shallow(<Game />);
     const firstPlayer = comp
      .find('div.gameInfo')
      .children()
      .first()
      .text();
    expect(firstPlayer).toEqual('Next player is X');
  });

    it('gets Next Player', () => {
      const comp = mount(<Game />);
      const move1 = comp.find('button.square').at(0);
      move1.simulate('click');
       const secondPlayer = comp
        .find('div.gameInfo')
        .children()
        .first()
        .text();
      expect(secondPlayer).toEqual('Next player is O');
    });

  it('determines Win', () => {
    const comp = mount(<Game />);
     const move1 = comp.find('button.square').at(0);
     const move2 = comp.find('button.square').at(1);
     const move3 = comp.find('button.square').at(4);
     const move4 = comp.find('button.square').at(5);
     const move5 = comp.find('button.square').at(8);
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
