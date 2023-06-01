import Image from 'next/image';
import React from 'react';
import header from './styles/header.module.scss';
import Link from 'next/link';
import RoundedButton from './components/roundedButton';

export default function Header() {
  return (
    <div className={header.root}>
      <div className={header.sectionLinks}>
        <Link href="https://github.com/coryginsberg" className={header.link}>
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/cory-ginsberg/"
          className={header.link}
        >
          LinkedIn
        </Link>
      </div>
      <div className={header.logo}>
        <Image
          src="/Logo.svg"
          alt="Personal Logo"
          priority={true}
          width={60}
          height={60}
        />
      </div>
      <div className={header.buttonGroup}>
        <Link href="mailto:cory.ginsberg1@gmail.com">
          <RoundedButton>Contact me</RoundedButton>
        </Link>
      </div>
    </div>
  );
}
