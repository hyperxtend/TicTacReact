import React from 'react';
import { shallow, mount } from 'enzyme';

import Game from './component';

describe('<Game/>', () => {
  const mockOnClick = jest.fn();
  let component;
  let wrapper;
  beforeAll(() => {
    component = shallow(<Game />);
    wrapper = mount(<Game onClick={mockOnClick} />);
  });
  it('checks if component exists', () => {
    expect(component.exists()).toBe(true);
  });
  it('checks onClick event on button', () => {
    wrapper.find('button.square').first().simulate('click');
    expect(mockOnClick).toHaveBeenCalled();
  });
  it('checks if click renders an X', () => {
    wrapper.find('button.square').at(0).simulate('click');
    const buttonText = wrapper.find('button.square').first().children().text();
    expect(buttonText).toBe('X');
  });
});
