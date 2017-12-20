import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

import App from './App';

Enzyme.configure({ adapter: new Adapter() });

test('App component', () => {
  const AppWrapper = Enzyme.shallow(React.createElement(App));

  expect(AppWrapper.find('h1').text()).toBe('wg');

  AppWrapper.find('button').simulate('click');

  expect(AppWrapper.find('h1').text()).toBe('DG');

  AppWrapper.find('button').simulate('click');
  expect(AppWrapper.find('h1').text()).toBe('DG');
});
