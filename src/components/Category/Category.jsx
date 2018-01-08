// @flow

import React from 'react';
import classes from './category.scss';

type Props = {
  value: string,
  onChange: (value: string) => void,
  icon: string,
  checked: boolean
};

const Category = ({
  value, onChange, icon, checked,
}: Props) => (
  <label
    className={`${classes.category} ${checked ? classes.checked : ''}`}
    htmlFor={value}
  >
    <input
      className={classes.nativeRadio}
      type="radio"
      name="category"
      id={value}
      value={value}
      onChange={onChange}
      checked={checked}
    />

    <i className={`fa ${icon} ${classes.icon}`} aria-hidden="true" />
    <span
      className={`${classes.label} ${value === 'other' ? classes.other : ''}`}
    >
      {value}
    </span>
  </label>
);

export default Category;
