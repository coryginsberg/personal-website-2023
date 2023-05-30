import React from 'react';
import styles from './../styles/components/projectCard.module.scss';
import Image from 'next/image';
import { URL } from 'url';

type Props = {
  title: string;
  src: string;
  href: URL;
};

export default function ProjectCard(props: Props) {
  return (
    <div className={styles.root}>
      <a href={props.href?.toString()} target="_blank">
        <Image
          className={styles.image}
          alt={`Preview Image for ${props.title}`}
          src={props.src}
          height={400}
          width={400}
          quality={100}
          unoptimized={true}
        />
        <div className={styles.text}>{props.title}</div>
      </a>
    </div>
  );
}
