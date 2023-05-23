import React from 'react';
import RoundedButton from '../components/roundedButton';
import variable from '../styles/variables.module.scss';
import styles from '../styles/hero.module.scss';

export default function HeroLeft() {
  return (
    <div className={styles.heroLeft}>
      <div className={styles.header}>
        Hi, I&apos;m <br /> <b>Cory Ginsberg</b>.
      </div>
      <p className={styles.blurb}>
        I&apos;m a professional programmer with more than 5 years of experience.
      </p>
      <RoundedButton
        backgroundColor={variable.accentColor}
        color={variable.textColorLight}
        className={styles.button}
      >
        Check out my resume
      </RoundedButton>
    </div>
  );
}
