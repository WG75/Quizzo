import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Logo from './Logo';

Enzyme.configure({ adapter: new Adapter() });

test('Logo component', () => {
  let wrapper = shallow(<Logo />);

  expect(wrapper.find('.fa.fa-question-circle').length).toBe(1);
  expect(wrapper.find('span').props().children).toBe('uizzo');
});
