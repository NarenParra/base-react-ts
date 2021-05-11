import React, { ReactElement } from 'react';
import styles from './HomePage.module.scss';

interface PropsTest {
  name: string;
}

const HomePage = ({ name }: PropsTest): ReactElement => {
  return (
    <div>
      <div className={styles.test}>
        Home Page <b>{name}</b>
      </div>
    </div>
  );
};

export default HomePage;
