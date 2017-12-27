// @flow

import React from 'react';
import Button from '../../components/Button/Button';
import classes from './home.scss';

const Home = () => (
  <section className={classes.home}>
    <div className={classes.keyFeatures}>
      <h1 class={classes.heading}>A Trivia App That Feeds Your Brain</h1>

      <ul className={classes.featuresList}>
        <li className={classes.featureItem}><i className={`fa fa-check-circle ${classes.icon}`} aria-hidden="true"></i>Lorem Ipsum is simply dummy.</li>
        <li className={classes.featureItem}><i className={`fa fa-check-circle ${classes.icon}`} aria-hidden="true"></i>industry. Lorem Ipsum has been .</li>
        <li className={classes.featureItem}><i className={`fa fa-check-circle ${classes.icon}`} aria-hidden="true"></i>the industry standard dummy</li>
        <li className={classes.featureItem}><i className={`fa fa-check-circle ${classes.icon}`} aria-hidden="true"></i>the industry standard dummy</li>
      </ul>

      <Button className={classes.desktopBtn}>take the quiz</Button>

      <div className={classes.polygon} />
    </div>

    <div className={classes.imageContainer}>
      <img className={classes.image} src={'./girl.jpg'} />
      <Button className={classes.mobileBtn}>take the quiz</Button>
    </div>
  </section>
);


export default Home;
