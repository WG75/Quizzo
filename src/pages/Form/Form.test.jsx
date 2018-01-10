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
    const mockEvent = {
      target: {
        value: '1',
      },
    };

    wrapper.find(TextInput).simulate('change', mockEvent);
    expect(formInstance.data.number).toBe('1');
  });


  it('validates data and enables start button if the data is accurate', () => {
    expect(wrapper.find(Button).props().disabled).toBe(true);

    formInstance.data = {
      number: '1',
      diffculty: 'easy',
      type: 'multiple',
      category: 'music',
    };

    expect(wrapper.find(Button).props().disabled).toBe(false);
  });

  it('clears data when this.clearData is called', () => {
    formInstance.clearData();
    expect(formInstance.data).toEqual({});
  });

  it('shows quizzes component when button is clicked', () => {
    wrapper.find(Button).simulate('click');

    expect(wrapper.find(Quizzes).length).toBe(1);
  });
});

