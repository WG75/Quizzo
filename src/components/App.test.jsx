import React from 'react';
import Enzyme from '../__tests__/enzyme';

import App from './App';
import Logo from './Logo/Logo';

test('App component', () => {
  const AppWrapper = Enzyme.shallow(React.createElement(App));

  expect(AppWrapper.contains(<Logo />)).toBe(true);
});
