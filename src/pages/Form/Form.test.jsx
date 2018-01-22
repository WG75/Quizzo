// @flow

import React from 'react';
import Enzyme from '../../utils/enzyme';

import Form from './Form';
import TextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';
import Quizzes from '../../components/Quizzes/Quizzes';

describe('Form component', () => {
  const wrapper = Enzyme.shallow(<Form />);
  const formInstance = wrapper.instance();

  it('updates this.data when any of the inputs change', () => {
    wrapper.find(TextInput).simulate('change', 'number', '1');
    expect(formInstance.data.number).toBe('1');
  });

  it('validates data', () => {
    formInstance.data = {
      number: '1',
      diffculty: 'easy',
      type: 'multiple',
      category: 'music',
    };

    formInstance.validate();
    expect(formInstance.state.validated).toBe(true);
  });

  it('shows quizzes component when button is clicked', () => {
    wrapper.find(Button).simulate('click');
    expect(wrapper.find(Quizzes).length).toBe(1);
  });

  it('clears data when this.clearData is called', () => {
    formInstance.clearData();
    expect(formInstance.data).toEqual({});
  });
});
