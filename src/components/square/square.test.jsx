import React from 'react';
import Square from './square.jsx';
import { shallow } from 'enzyme';

// Tests the rendering of Components
it('<Square/> renders without error', () => {
  shallow(<Square />);
});
