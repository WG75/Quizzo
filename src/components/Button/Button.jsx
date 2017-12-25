// @flow

import React, { type Node } from 'react';
import { Link } from 'react-router-dom';

import classes from './button.scss';

type props = {
  className?: string,
  onClick?: () => void,
  isLink?: boolean,
  path?: string,
  children: Node
};

const Button = ({
  className, onClick, isLink, path, children,
}: props) =>
  (isLink ? (
    <Link
      className={`${classes.primary} ${classes.isLink} ${className}`}
      to={path}
    >
      {children}
    </Link>
  ) : (
    <button className={`${classes.primary} ${className}`} onClick={onClick}>
      {children}
    </button>
  ));

Button.defaultProps = {
  className: '',
  isLink: false,
  path: '/',
  onClick: () => undefined,
};

export default Button;
