// @flow

import React from 'react';
import Category from '../Category/Category';
import Select from '../SelectMenu/SelectMenu';
import classes from './categories.scss';

type Props = {
  options: Array<{ value: string, icon: string }>,
  extraCategories: Array<string>,
  onChange: (id: string, value: string) => void,
  id: string
};

type State = {
  selected: string
};

export default class Categories extends React.Component<Props, State> {
  state = {
    selected: ''
  };

  handleChange(id: string, value: string) {
    this.setState({ selected: value }, () => {
      if (this.state.selected !== 'other') {
        this.props.onChange(this.props.id, value);
      }
    });
  }

  render() {
    const { options, extraCategories, id } = this.props;

    return (
      <div className={classes.fieldWrapper}>
        <span className={classes.fieldLabel}>{id}</span>
        <div className={classes.categories}>
          <div className={classes.categoriesWrapper}>
            {options.map(category => (
              <Category
                key={category.value}
                value={category.value}
                icon={`fa-${category.icon}`}
                onChange={() =>
                  this.handleChange(category.value, category.value)
                }
                checked={
                  this.state.selected === category.value ||
                  (category.value === 'other' &&
                    this.props.extraCategories.indexOf(this.state.selected) !==
                      -1)
                }
              />
            ))}
          </div>
          {this.state.selected === 'other' ||
          this.props.extraCategories.indexOf(this.state.selected) !== -1 ? (
            <Select
              className={classes.extraCategories}
              options={extraCategories}
              id="category"
              onChange={(id: string, value: string) =>
                this.handleChange(id, value)
              }
            />
          ) : null}
        </div>
      </div>
    );
  }
}
