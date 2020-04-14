import React from 'react';
import Square from './square';
import { shallow } from 'enzyme';
import '../../setup-tests';


describe('<Square/>', () =>{
it('renders without error', () => {
  shallow(<Square />);
});
})
