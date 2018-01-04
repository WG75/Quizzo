// @flow

import React from 'react';
import Enzyme from '../../utils/enzyme';

import RadioButtons from './RadioButtons';
import QuestionType from '../../components/QuestionType/QuestionType';

describe('RadioButtons component', () => {
  const radioOptions = ['multiple', 'true/false', 'single'];
  const onChangeMock = jest.fn();

  const wrapper = Enzyme.shallow(<RadioButtons
    className="category"
    id="type"
    options={radioOptions}
    Label={QuestionType}
    labelClass="type-item"
    defaultChecked={0}
    onChange={onChangeMock}
  />);
  it('renders QuestionType component for each passed option', () => {
    expect(wrapper.find(QuestionType).length).toBe(radioOptions.length);
  });

  it('passes labelClass prop to label component as className', () => {
    expect(wrapper.find(QuestionType).at(0).hasClass('type-item')).toBe(true);
  });

  it('sets the defaultChecked prop as checked', () => {
    expect(wrapper
      .find(QuestionType)
      .at(0)
      .props().checked).toBe(true);
  });


  it('changes state when checked option is changed', () => {
    wrapper.find(QuestionType).at(2).simulate('change');

    expect(wrapper.find(QuestionType).at(0).props().checked).toBe(false);
    expect(wrapper.find(QuestionType).at(2).props().checked).toBe(true);
  });

  // making sure that onChange prop handler is called with the right props upon state change.
  it('calls onChange prop handler when state changes giving it the new value & id as arguments', () => {
    expect(onChangeMock.mock.calls.length).toBe(1);
    expect(onChangeMock.mock.calls[0][0]).toBe('type');
    expect(onChangeMock.mock.calls[0][1]).toBe('single');
  });
});
