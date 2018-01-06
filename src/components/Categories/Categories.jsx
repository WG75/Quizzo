// @flow

import React from 'react';
import Category from '../Category/Category';
import Select from '../SelectMenu/SelectMenu';
import classes from './categories.scss';

type Props = {
  options: Array<string>,
  extraCategories: Array<string>,
  onChange: (id: string, value: string) => void
};

type State = {
  selected: string
};

export default class Categories extends React.Component<Props, State> {
  state = {
    selected: '',
  };

  handleChange(id: string, value: string) {
    this.setState({ selected: value }, () => {
      if (this.state.selected !== 'other') {
        this.props.onChange(id, value);
      }
    });
  }

  render() {
    const { options, extraCategories } = this.props;

    return (
      <div className={classes.categories}>
        <div className={classes.categoriesWrapper}>
          {options.map(category => (
            <Category
              key={category}
              value={category}
              icon={`fa-${category}`}
              onChange={() => this.handleChange(category, category)}
              checked={this.state.selected === category}
            />
          ))}
        </div>
        {this.state.selected === 'other' ||
        (this.props.options.indexOf(this.state.selected) === -1 &&
          this.state.selected !== '') ? (
            <Select
              options={extraCategories}
              id="extra"
              onChange={(id: string, value: string) => this.handleChange(id, value)}
            />
        ) : null}
      </div>
    );
  }
}
