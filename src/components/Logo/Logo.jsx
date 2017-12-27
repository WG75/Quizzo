// @flow

import React, { type Node } from 'react';

import classes from './logo.scss';

const Logo = ({className} : {className: string}): Node => (
  <div className={`${classes.logo} ${className}`}>
    <i className="fa fa-question-circle" />
    <span className={classes.logoText}>uizzo</span>
  </div>
);

export default Logo;
