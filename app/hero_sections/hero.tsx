import React from 'react';
import HeroLeft from './heroLeft';
import HeroRight from './heroRight';
import styles from '../styles/hero.module.scss';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <HeroLeft />
      <HeroRight />
    </div>
  );
}
