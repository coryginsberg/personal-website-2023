import Image from 'next/image';
import React, { ReactElement } from 'react';
import header from './styles/header.module.scss';
import Link from 'next/link';

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
      {/* Resume/Contact Me */}
      <div className={header.buttonGroup}>
        <Button>Check out my resume</Button>
        <Button>Contact me</Button>
      </div>
    </div>
  );
}

function Button(props: { children: string }) {
  return <button className={header.button}>{props.children}</button>;
}
