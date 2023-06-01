'use client';

import React, {useLayoutEffect, useRef} from 'react';
import styles from './../styles/components/projectCard.module.scss';
import Image from 'next/image';
import {URL} from 'url';
import gsap, {Power4} from 'gsap';

type Props = {
  title: string;
  src: string;
  href: URL;
};

export default function ProjectCard(props: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLImageElement>(null);
  const hoverTween = useRef<gsap.core.Tween>();

  useLayoutEffect(() => {
    hoverTween.current = gsap.to(cardRef.current, {
      duration: 0.2,
      ease: Power4.easeInOut,
      paused: true,
    });
  }, []);

  const mouseMoveEvent = (e: MouseEvent) => {
    const xPos =
      e.clientX / (cardRef.current?.getBoundingClientRect().width ?? 1);
    const yPos =
      e.clientY / (cardRef.current?.getBoundingClientRect().height ?? 1);
    hoverTween.current = gsap
      .to(cardRef.current, {
        translateX: -xPos * 20,
        translateY: -yPos * 20,
        scale: 1.1,
      })
      .play();
  };

  const onMouseEnterHandler = (_: React.MouseEvent<HTMLImageElement>) => {
    document.addEventListener('mousemove', mouseMoveEvent);
  };

  const onMouseLeaveHandler = (_: React.MouseEvent<HTMLImageElement>) => {
    gsap.to(cardRef.current, {
      translateX: 0,
      translateY: 0,
      scale: 1.0,
    });
    document.removeEventListener('mousemove', mouseMoveEvent);
  };

  return (
    <div className={styles.root} ref={rootRef}>
      <a href={props.href?.toString()} target="_blank">
        <Image
          className={styles.image}
          alt={`Preview Image for ${props.title}`}
          src={props.src}
          height={450}
          width={450}
          quality={100}
          unoptimized={true}
          ref={cardRef}
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}
        />
        <div className={styles.text}>{props.title}</div>
      </a>
    </div>
  );
}
