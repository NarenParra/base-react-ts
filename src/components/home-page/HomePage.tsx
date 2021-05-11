import React from 'react';
import styles from './HomePage.module.scss';

interface PropsTest {
  name: string;
}

const HomePage = ({ name }: PropsTest) => {
  return (
    <div className={styles}>
      Home Page <b>{name}</b>
    </div>
  );
};

export default HomePage;
