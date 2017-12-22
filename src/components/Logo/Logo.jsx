// @flow

import React, { Node } from 'react';

import classes from './logo.scss';

const Logo = (): Node => (
  <div className={classes.logo}>
    <i className="fa fa-question-circle" />
    <span className={classes.logoText}>uizzo</span>
  </div>
);

export default Logo;
