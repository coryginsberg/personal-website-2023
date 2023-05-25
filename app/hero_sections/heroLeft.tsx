import React from 'react';
import RoundedButton from '../components/roundedButton';
import vars from '../styles/variables.module.scss';
import styles from '../styles/hero.module.scss';
import TextPill from '../components/textPill';

export default function HeroLeft() {
  return (
    <div className={styles.heroLeft}>
      <div className={styles.header}>
        Hi, I&apos;m <br /> <b>Cory Ginsberg</b>.
      </div>
      <p className={styles.blurb}>
        I&apos;m a professional software developer with more than 5 years of
        experience.
      </p>
      <RoundedButton
        backgroundColor={vars.accentColor}
        color={vars.textColorLight}
        className={styles.button}
      >
        Check out my resume
      </RoundedButton>
      <div className={styles.pillSection}>
        <div className={styles.pillRow}>
          <TextPill
            backgroundColor={vars.accentColor}
            textColor={vars.textColorLight}
          >
            React
          </TextPill>
          <TextPill
            backgroundColor={vars.lightAccentColor}
            textColor={vars.textColorDark}
          >
            JavaScript
          </TextPill>
        </div>
        <div className={styles.pillRow}>
          <TextPill backgroundColor={vars.gray} textColor={vars.textColorDark}>
            Swift
          </TextPill>
          <TextPill
            backgroundColor={vars.darkAccentColor}
            textColor={vars.textColorLight}
          >
            Python
          </TextPill>
        </div>
      </div>
    </div>
  );
}
