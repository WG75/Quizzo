// @flow

import React from 'react';
// import classes from './question-type.scss';

type Props = {
    value: string,
    onChange: (index: number) => void,
    className: string,
    checked: boolean
}

const QuestionType = ({
  value, onChange, className, checked,
}: Props) => (
  <label className={`${className}`} htmlFor={value}>
    <span>{value}</span>
    <input type="radio" name="type" value={value} id={value} onChange={onChange} checked={checked} />
  </label>
);

export default QuestionType;
