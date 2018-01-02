// @flow

import React from 'react';
import classes from './select-menu.scss';

type Props = {
  options: Array<string>,
  defaultSelected: number,
  id: string,
  onChange: (id: string, value: string) => void
};

type State = {
    selectedIndex: number
};

export default class SelectMenu extends React.Component<Props, State> {
  state = {
    selectedIndex: this.props.defaultSelected,
  };

  handleChange(e) {
    const index = e.target.options.selectedIndex;
    const { options } = this.props;
    this.setState(
      {
        selectedIndex: index,
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(
            this.props.id,
            options[index],
          );
        }
      },
    );
  }

  render() {
    const { id, options }: Props = this.props;

    return (
      <div className={classes.wrapper}>
        <select
          name={id}
          id={id}
          onChange={(e) => {
            this.handleChange(e);
          }}
        >
          {options.map((option, key) => (
            <option
              key={option}
              value={option}
              selected={this.state.selectedIndex === key}
            >
              {option}
            </option>
          ))}
        </select>

        <div className={classes.clickThrough}>
          <span className={classes.selectedValue}>
            {options[this.state.selectedIndex]}
          </span>
          <i>icon</i>
        </div>
      </div>
    );
  }
}
