// @flow

import React, { type Node } from 'react';
import { Link } from 'react-router-dom';

type props = {
  className: string,
  onClick: () => void,
  isLink: boolean,
  path: string,
  children: Node
};

const Button = ({ className, onClick, isLink, path, children }: props) =>
  isLink ? (
    <Link className={className} to={path}>
      {children}
    </Link>
  ) : (
    <button className={className} onCLick={onClick}>
      {children}
    </button>
  );

export default Button;
