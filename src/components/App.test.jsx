// @flow

import React from 'react';
import Enzyme from '../__tests__/enzyme';

import App from './App';

test('App component', () => {
  const AppWrapper = Enzyme.shallow(React.createElement(App));

  expect(AppWrapper.find('Home').length).toBe(1);
});
