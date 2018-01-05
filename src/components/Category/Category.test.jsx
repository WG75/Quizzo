// @flow

import React from 'react';
import Enzyme from '../../utils/enzyme';

import Category from './Category';

describe('Category component', () => {
  const onChangeMock = jest.fn();
  const wrapper = Enzyme.shallow(<Category value="sports" onChange={onChangeMock} icon="futbol-o" />);

  it('renders correctly', () => {
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('i').length).toBe(1);
    expect(wrapper.find('i').hasClass('fa-futbol-o')).toBe(true);

    expect(wrapper.find('span').length).toBe(1);
    expect(wrapper.find('span').props().children).toBe('sports');
  });

  it('calls onChange handler when input value is changed', () => {
    wrapper.find('input').simulate('change');
    expect(onChangeMock.mock.calls.length).toBe(1);
  });
});
