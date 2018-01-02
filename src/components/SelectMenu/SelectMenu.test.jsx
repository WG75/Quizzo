// @flow

import React from 'react';
import Enzyme from '../../utils/enzyme';

import SelectMenu from '../SelectMenu/SelectMenu';

describe('SelectMenu component', () => {
  const selectOptions = ['easy', 'hard', 'medium'];
  const onChangeMock = jest.fn();

  const wrapper = Enzyme.shallow(<SelectMenu
    options={selectOptions}
    defaultSelected={1}
    id="diffculty"
    onChange={onChangeMock}
  />);

  it('it renders option tag for each passed option', () => {
    expect(wrapper.find('option').length).toBe(selectOptions.length);
  });

  it('sets the defaultSelected prop as selected option', () => {
    expect(wrapper
      .find('option')
      .at(1)
      .props().selected).toBe(true);
  });

  it('changes state when selected option is changed and updates the click-through container', () => {
    // mock event object that's going to be passed to change handler
    const mockEvent = {
      target: {
        options: {
          selectedIndex: 2,
        },
      },
    };

    // simulate change event
    wrapper.find('select').simulate('change', mockEvent);

    // check that the selected option is updated when state changed and
    // selectedValue display the updated value
    expect(wrapper
      .find('option')
      .at(2)
      .props().selected).toBe(true);
    expect(wrapper.find('.selectedValue').props().children).toBe(selectOptions[2]);
  });

  // making sure that onChange prop handler is called with the right props upon state change.
  it('it calls onChange prop handler when state changes giving it the new value & id as arguments', () => {
    expect(onChangeMock.mock.calls.length).toBe(1);
    expect(onChangeMock.mock.calls[0][0]).toBe('diffculty');
    expect(onChangeMock.mock.calls[0][1]).toBe('medium');
  });
});
