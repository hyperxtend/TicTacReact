import React from 'react';
import Square from './square';
import { shallow } from 'enzyme';

it('<Square/> renders without error', () => {
  shallow(<Square />);
});
