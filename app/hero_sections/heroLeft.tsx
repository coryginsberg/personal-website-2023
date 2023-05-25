import React from 'react';
import RoundedButton from '../components/roundedButton';
import vars from '../styles/variables.module.scss';
import styles from '../styles/hero.module.scss';
import TextPill from '../components/textPill';
import Image from 'next/image';

export default function HeroLeft() {
  const pills = (
    <div className={styles.pillSection}>
      <div className={styles.pillRow}>
        <TextPill
          backgroundColor={vars.reactBackground}
          textColor={vars.textColorLight}
          imageLeft={
            <Image
              src='/languages/react_logo.png'
              alt='React Logo'
              width={38}
              height={30}
            />
          }
        >
          React
        </TextPill>
        <TextPill
          backgroundColor={vars.tsBackground}
          textColor={vars.textColorLight}
          imageLeft={
            <Image
              src='/languages/ts_logo.png'
              alt='JavaScript Logo'
              width={38}
              height={30}
            />
          }
        >
          TypeScript
        </TextPill>
      </div>
      <div className={styles.pillRow}>
        <TextPill
          backgroundColor={vars.accentColor}
          textColor={vars.textColorLight}
          imageLeft={
            <Image
              src='/languages/python_logo.svg'
              alt='JavaScript Logo'
              width={32}
              height={30}
            />
          }
        >
          Python
        </TextPill>
        <TextPill
          backgroundColor={vars.gray}
          textColor={vars.textColorDark}
          imageLeft={
            <Image
              src='/languages/swift_logo.svg'
              alt='JavaScript Logo'
              width={38}
              height={30}
            />
          }
        >
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
        className={styles.button}
      >
        Check out my resume
      </RoundedButton>
      {pills}
    </div>
  );
}
