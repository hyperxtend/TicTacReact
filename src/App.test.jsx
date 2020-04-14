import React from 'react';
import Game from './components/game';
import { shallow } from 'enzyme';

it('<Game/> renders without error', () => {
  shallow(<Game />);
});
