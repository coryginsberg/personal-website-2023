import Image from 'next/image';
import React from 'react';
import header from './styles/header.module.scss';
import Link from 'next/link';
import RoundedButton from './components/roundedButton';

export default function Header() {
  return (
    <div className={header.root}>
      {/* Jumplink section */}
      <div className={header.sectionLinks}>
        <Link href='#section1' className={header.link}>
          Section 1
        </Link>
        <Link href='#section2' className={header.link}>
          Section 2
        </Link>
        <Link href='#section3' className={header.link}>
          Section 3
        </Link>
      </div>
      {/* Logo */}
      <div className={header.logo}>
        <Image
          src='/Logo.svg'
          alt='Personal Logo'
          priority={true}
          width={60}
          height={60}
        />
      </div>
      {/* Contact Me */}
      <div className={header.buttonGroup}>
        <RoundedButton>Contact me</RoundedButton>
      </div>
    </div>
  );
}
