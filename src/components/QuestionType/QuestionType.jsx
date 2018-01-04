// @flow

import React from 'react';
import classes from './question-type.scss';

type Props = {
    value: string,
    onChange: (index: number) => void,
    className: string,
    checked: boolean
}

const QuestionType = ({
  value, onChange, className, checked,
}: Props) => (
  <label className={`${classes.questionType} ${className}`} htmlFor={value}>
    <input className={classes.nativeInput} type="radio" name="type" value={value} id={value} onChange={onChange} checked={checked} />
    <span className={classes.type}>{value}</span>
 </label>
);

export default QuestionType;
