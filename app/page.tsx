import Hero from './sections/Hero';
import {Projects} from './sections/Projects';
import styles from './styles/page.module.scss';

import React from 'react';

export default function Home() {
  return (
    <div className={styles.main}>
      <Hero />
      <Projects />
    </div>
  );
}
