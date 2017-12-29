// @flow

import React from 'react';
import Logo from './Logo/Logo';
import Home from '../pages/Home/Home';

import classes from './app.scss';

const App = () => (
  <div className={classes.content}>
    <header className={classes.header}>
      <Logo className={classes.logo} />
    </header>

    <main className={classes.container}>
      <Home />
    </main>

    <div className={classes.circle} />
  </div>
);

export default App;
