import React from 'react';
import Square from './square.jsx';
import { shallow } from 'enzyme';

it('<Square/> renders without error', () => {
  shallow(<Square />);
});
