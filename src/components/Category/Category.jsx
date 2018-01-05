// @flow

import React from 'react';
// import classes from './category.scss';

type Props = {
    value: string,
    onChange: (value: string) => void,
    icon: string
}

const Category = ({ value, onChange, icon }: Props) => (
  <label htmlFor={value}>
    <input type="radio" name="category" id={value} value={value} onChange={onChange} />
    <i className={`fa fa-${icon}`} aria-hidden="true" />
    <span>{value}</span>
  </label>
);

export default Category;
