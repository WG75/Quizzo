// @flow

import React from 'react';
import Enzyme from '../../utils/enzyme';

import TextInput from './TextInput';

describe('TextInput component', () => {
  const onChangeMockFun = jest.fn();

  const wrapper = Enzyme.shallow(<TextInput id="name" onChange={onChangeMockFun} label="username" />);

  it('render input element and pass props to it', () => {
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('input').props().id).toBe('name');
    expect(wrapper.find('span').props().children).toBe('username');
  });

  it('it sets state when onChange event is triggered', () => {
    // mock event object.
    const MockEvent = {
      target: {
        value: 'new value',
      },
    };

    // simulate onChange event and checking that state is changed to the new value.
    wrapper.find('input').simulate('change', MockEvent);

    expect(wrapper.find('input').props().value).toBe('new value');
  });

  // making sure that onChange handler is called with the right props upon state change.
  it('it fires onChange handler when state changes giving it the new value & id as arguments', () => {
    expect(onChangeMockFun.mock.calls.length).toBe(1);
    expect(onChangeMockFun.mock.calls[0][0]).toBe('name');
    expect(onChangeMockFun.mock.calls[0][1]).toBe('new value');
  });
});
