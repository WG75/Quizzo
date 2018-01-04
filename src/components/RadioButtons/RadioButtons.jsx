// @flow

import React, { type Node } from 'react';
import classes from './radio-buttons.scss';

type Props = {
  className: string,
  id: string,
  options: Array<string>,
  Label: (props: any) => Node, // stateless component
  labelClass: string,
  defaultChecked: number,
  onChange: (id: string, value: string) => void
};

type State = {
  checkedIndex: number
};

export default class RadioButtons extends React.Component<Props, State> {
  state = {
    checkedIndex: this.props.defaultChecked,
  };

  handleChange(index: number) {
    this.setState({ checkedIndex: index }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.props.id, this.props.options[index]);
      }
    });
  }

  render() {
    const {
      options, Label, className, labelClass,
    }: Props = this.props;

    return (
      <div className={`${classes.buttonsWrapper} ${className}`}>
        {options.map((value, key) => (
          <Label
            key={value}
            value={value}
            checked={this.state.checkedIndex === key}
            onClick={() => this.handleChange(key)}
            className={labelClass}
          />
        ))}
      </div>
    );
  }
}
