// @flow

import React from 'react';
import Button from '../../components/Button/Button';
import classes from './home.scss';

const Home = () => (
  <section className={classes.home}>
    <div className={classes.keyFeatures}>
      <div className={classes.featuresWrapper}>
        <h1 className={classes.heading}>A Trivia App That Feeds Your Brain</h1>

        <ul className={classes.featuresList}>
          <li className={classes.featureItem}>
            <i
              className={`fa fa-check-circle ${classes.icon}`}
              aria-hidden="true"
            />Lorem Ipsum is simply dummy.
          </li>
          <li className={classes.featureItem}>
            <i
              className={`fa fa-check-circle ${classes.icon}`}
              aria-hidden="true"
            />industry. Lorem Ipsum has been .
          </li>
          <li className={classes.featureItem}>
            <i
              className={`fa fa-check-circle ${classes.icon}`}
              aria-hidden="true"
            />the industry standard dummy
          </li>
          <li className={classes.featureItem}>
            <i
              className={`fa fa-check-circle ${classes.icon}`}
              aria-hidden="true"
            />the industry standard dummy
          </li>
        </ul>

        <Button className={classes.desktopBtn} isLink path="/form">take the quiz</Button>
        <div className={classes.polygon} />
      </div>
    </div>

    <div className={classes.imageContainer}>
      <img className={classes.image} src="./girl.jpg" alt="a girl reading book flying in the sky" />
      <Button className={classes.mobileBtn} isLink path="/form">take the quiz</Button>
    </div>
  </section>
);

export default Home;
