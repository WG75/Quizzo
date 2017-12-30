// @flow

import React from 'react';
import Enzyme from '../../utils/enzyme';

import Home from './Home';


describe('Home component', () => {
  const wrapper = Enzyme.shallow(<Home />);

  it('renders a heading', () => {
    expect(wrapper.find('h1').length).toBe(1);
  });

  it('renders a list of features', () => {
    expect(wrapper.find('ul').length).toBe(1);
    expect(wrapper.find('li').length).toBe(4);
  });


  it('renders image', () => {
    expect(wrapper.find('img').length).toBe(1);
  });

  it('renders a button', () => {
    expect(wrapper.find('Button').at(0).hasClass('desktopBtn')).toBe(true);
    expect(wrapper.find('Button').at(1).hasClass('mobileBtn')).toBe(true);
  });
});
