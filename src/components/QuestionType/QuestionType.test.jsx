// @flow

import React from 'react';
import Enzyme from '../../utils/enzyme';

import QuestionType from './QuestionType';


test('QuestionType component', () => {
  const onChangeMock = jest.fn();

  const wrapper = Enzyme.shallow(<QuestionType className="type" value="multiple" onChange={onChangeMock} checked={false} />);

  wrapper.find('input').simulate('change');

  // making sure the onchange handler is called when input value changes
  expect(onChangeMock.mock.calls.length).toBe(1);

  expect(wrapper.find('span').props().children).toBe('multiple');
});
