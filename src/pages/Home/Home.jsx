// @flow

import React from 'react';
import Button from '../../components/Button/Button';
import classes from './home.scss';

const Home = () => (
  <section className={classes.home}>
    <div className={classes.keyFeatures}>
      <h1>A Trivia App That Feeds Your Brain</h1>

      <ul className={classes.featuresList}>
        <li className={classes.featureItem}>Lorem Ipsum is simply dummy.</li>
        <li className={classes.featureItem}>of the printing and typesetting.</li>
        <li className={classes.featureItem}>industry. Lorem Ipsum has been .</li>
        <li className={classes.featureItem}>the industry standard dummy</li>
      </ul>

      <Button className={classes.desktopBtn}>take the quiz</Button>

      <div className={classes.polygon} />
    </div>

    <div className={classes.imageContainer}>
      <img className={classes.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLcxgFJA2ON1mjdfK8eRgK5ISFdgLD-C9mNaUAa5U7AIouB4QK6w" alt="a girl reading a book" />
      <Button className={classes.mobileBtn}>take the quiz</Button>
    </div>
  </section>
);


export default Home;
