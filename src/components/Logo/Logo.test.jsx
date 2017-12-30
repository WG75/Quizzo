// @flow

import React from 'react';
import Enzyme from '../../__tests__/enzyme';

import Logo from './Logo';

test('Logo component', () => {
  const wrapper = Enzyme.shallow(<Logo className="brand" />);

  expect(wrapper.find('.fa.fa-question-circle').length).toBe(1);
  expect(wrapper.find('span').props().children).toBe('uizzo');
});
