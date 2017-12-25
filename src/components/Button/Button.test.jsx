// @flow

import React from 'react';
import Enzyme from '../../__tests__/enzyme';
import Button from './Button';

describe('Button component', () => {
  let wrapper;

  it('renders a button tag and pass children', () => {
    wrapper = Enzyme.shallow(<Button>yay</Button>);

    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.props().children).toBe('yay');
  });

  it('it has className', () => {
    wrapper = Enzyme.shallow(<Button className="header-btn">yay</Button>);

    expect(wrapper.hasClass('header-btn')).toBe(true);
  });

  it('fires onclick handler', () => {
    const clickHandlerMock = jest.fn();

    wrapper = Enzyme.shallow(<Button onClick={clickHandlerMock}>yay</Button>);
    wrapper.props().onCLick();

    expect(clickHandlerMock.mock.calls.length).toBe(1);
  });

  it('renders a Link component and pass path to it', () => {
    wrapper = Enzyme.shallow(<Button isLink path="/">yay</Button>);

    expect(wrapper.find('Link').length).toBe(1);
    expect(wrapper.find('Link').props().to).toBe('/');
  });
});
