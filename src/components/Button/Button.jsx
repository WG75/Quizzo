// @flow

import React, { type Node } from 'react';
import { Link } from 'react-router-dom';

import classes from './button.scss';

type props = {
  className: string,
  onClick: () => void,
  isLink: boolean,
  path: string,
  children: Node,
  disabled: boolean
};

const Button = ({
  className, onClick, isLink, path, children, disabled,
}: props) =>
  (isLink ? (
    <Link
      className={`${classes.primary} ${classes.isLink} ${className}`}
      to={path}
    >
      {children}
    </Link>
  ) : (
    <button disabled={disabled} className={`${classes.primary} ${className}`} onClick={onClick} type="button">
      {children}
    </button>
  ));

Button.defaultProps = {
  className: '',
  isLink: false,
  path: '/',
  onClick: () => undefined,
  disabled: false,
};

export default Button;
