// @flow

import React from 'react';
import Enzyme from '../../utils/enzyme';

import Categories from './Categories';
import Category from '../Category/Category';
import Select from '../SelectMenu/SelectMenu';

describe('Categories component', () => {
  const categoriesOpt = [
    'sports',
    'music',
    'politics',
    'religeon',
    'history',
    'other',
  ];
  const extraOptions = ['software', 'hardware', 'chemistry'];

  const onChangeMock = jest.fn();

  const wrapper = Enzyme.shallow(<Categories
    options={categoriesOpt}
    extraCategories={extraOptions}
    onChange={onChangeMock}
  />);

  it('renders category component for each passed option', () => {
    expect(wrapper.find(Category).length).toBe(categoriesOpt.length);
  });

  it('calls onchange handler when selected value is changed giving it the new value & id as arguments', () => {
    wrapper
      .find(Category)
      .at(1)
      .simulate('change');
    expect(onChangeMock.mock.calls.length).toBe(1);
    expect(wrapper
      .find(Category)
      .at(1)
      .props().checked).toBe(true);
  });

  it('shows <Select/> component when the selected value is (other) and does not call onChange handler', () => {
    wrapper
      .find(Category)
      .at(5)
      .simulate('change');
    expect(wrapper.find(Select).length).toBe(1);
    expect(onChangeMock.mock.calls.length).toBe(1);
  });

  it('updates state when select menu value is changed', () => {
    wrapper.find(Select).simulate('change', 'extra', 'software');
    expect(onChangeMock.mock.calls.length).toBe(2);
    expect(wrapper.instance().state.selected).toBe('software');

    expect(wrapper.find(Select).length).toBe(1);
  });
});
