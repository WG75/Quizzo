import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import App from './App';
import Logo from './Logo/Logo';

Enzyme.configure({ adapter: new Adapter() });

test('App component', () => {
  const AppWrapper = Enzyme.shallow(React.createElement(App));

  expect(AppWrapper.contains(<Logo />)).toBe(true);
});
