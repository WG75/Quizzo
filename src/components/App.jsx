// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Logo from './Logo/Logo';
import Home from '../pages/Home/Home';

import classes from './app.scss';

const App = () => (
  <BrowserRouter>
    <div className={classes.content}>
      <header className={classes.header}>
        <Logo className={classes.logo} />
      </header>

      <main className={classes.container}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/form">
            <div className={classes.circle} />
          </Route>
        </Switch>
      </main>
    </div>
  </BrowserRouter>
);

export default App;
