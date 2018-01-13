// @flow

import React from 'react';
import classes from './text-input.scss';

type Props = {
    id: string,
    onChange: (id: string, value: string) => void,
    label: string,
    type: string
}

type State = {
    value: string
}

export default class TextInput extends React.Component<Props, State> {

    static defaultProps = {
      type: 'text',
    }

    state = {
      value: '',
    }

    handleChange(e) {
      this.setState({ value: e.target.value }, () => {
        if (this.props.onChange) {
          this.props.onChange(this.props.id, this.state.value);
        }
      });
    }


    render() {
      const { id, label, type } : Props = this.props;

      return (
        <label className={classes.textInputWrapper} htmlFor={id}>
          <span className={classes.label}>{label}:</span>
          <input className={classes.textInput} type={type} id={id} name={id} value={this.state.value} onChange={e => this.handleChange(e)} />
        </label>
      );
    }
}
