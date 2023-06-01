import Image from 'next/image';
import React from 'react';

import RoundedButton from '../components/roundedButton';
import TextPill from '../components/textPill';
import styles from '../styles/hero.module.scss';
import vars from '../styles/variables.module.scss';

import tsLogo from '../../public/languages/ts_logo.png';
import reactLogo from '../../public/languages/react_logo.png';
import pythonLogo from '../../public/languages/python_logo.svg';
import swiftLogo from '../../public/languages/swift_logo.svg';

export default function HeroLeft() {
  const pills = (
    <div className={styles.pillSection}>
      <div className={styles.pillRow}>
        <TextPill
          backgroundColor={vars.reactBackground}
          textColor={vars.textColorLight}
          imageLeft={
            <Image
              src={reactLogo}
              alt="React Logo"
              width={38}
              height={30}
            />
          }>
          React
        </TextPill>
        <TextPill
          backgroundColor={vars.tsBackground}
          textColor={vars.textColorLight}
          imageLeft={
            <Image
              src={tsLogo}
              alt="TypeScript Logo"
              width={38}
              height={30}
            />
          }>
          TypeScript
        </TextPill>
      </div>
      <div className={styles.pillRow}>
        <TextPill
          backgroundColor={vars.accentColor}
          textColor={vars.textColorLight}
          imageLeft={
            <Image
              src={pythonLogo}
              alt="Python Logo"
              width={32}
              height={30}
            />
          }>
          Python
        </TextPill>
        <TextPill
          backgroundColor={vars.gray}
          textColor={vars.textColorDark}
          imageLeft={
            <Image
              src={swiftLogo}
              alt="Swift Logo"
              width={38}
              height={30}
            />
          }>
          Swift
        </TextPill>
      </div>
    </div>
  );

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
        className={styles.button}>
        Check out my resume
      </RoundedButton>
      {pills}
    </div>
  );
}
