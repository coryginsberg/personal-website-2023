import styles from './../styles/hero.module.scss';
import HeroLeft from './hero_sections/HeroLeft';
import HeroRight from './hero_sections/HeroRight';

import * as React from 'react';

export default function Hero(): React.ReactElement {
  return (
    <div className={styles.hero}>
      <HeroLeft />
      <HeroRight />
    </div>
  );
}
