// @flow

import React from 'react';
import Enzyme from '../../utils/enzyme';

import RadioButtons from './RadioButtons';

const MockLabel = (props: {
  value: string,
  checked: boolean,
  className: string,
  onClick: (index: number) => void
}) => (
  <input
    className={props.className}
    type="radio"
    name="category"
    value={props.value}
    checked={props.checked}
    onChange={props.onClick}
  />
);

describe('RadioButtons component', () => {
  const radioOptions = ['politics', 'music', 'sports'];
  const onChangeMock = jest.fn();

  const wrapper = Enzyme.shallow(<RadioButtons
    className="category"
    id="category"
    options={radioOptions}
    Label={MockLabel}
    labelClass="categoryitem"
    defaultChecked={0}
    onChange={onChangeMock}
  />);
  it('renders mockLabel component for each passed option', () => {
    expect(wrapper.find(MockLabel).length).toBe(radioOptions.length);
  });

  it('passes labelClass prop to label component as className', () => {
    expect(wrapper.find(MockLabel).at(0).hasClass('categoryitem')).toBe(true);
  });

  it('sets the defaultChecked prop as checked', () => {
    expect(wrapper
      .find(MockLabel)
      .at(0)
      .props().checked).toBe(true);
  });


  it('changes state when checked option is changed', () => {
    wrapper.find(MockLabel).at(2).simulate('click');

    expect(wrapper.find(MockLabel).at(0).props().checked).toBe(false);
    expect(wrapper.find(MockLabel).at(2).props().checked).toBe(true);
  });

  // making sure that onChange prop handler is called with the right props upon state change.
  it('calls onChange prop handler when state changes giving it the new value & id as arguments', () => {
    expect(onChangeMock.mock.calls.length).toBe(1);
    expect(onChangeMock.mock.calls[0][0]).toBe('category');
    expect(onChangeMock.mock.calls[0][1]).toBe('sports');
  });
});
