import React from 'react';

import styles from '../styles/hero.module.scss';
import HeroLeft from './heroLeft';
import HeroRight from './heroRight';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <HeroLeft />
      <HeroRight />
    </div>
  );
}
