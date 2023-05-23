import React from 'react';
import styles from '../styles/hero.module.scss';
import vars from '../styles/variables.module.scss';

export default function HeroRight() {
  const headshotPopout = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      viewBox='0 0 1200 1800'
      fill='none'
      aria-hidden='true'
      className={styles.svg}
    >
      <path
        d='M876.717,1651.73c-202.315,193.147 -523.384,190.229 -722.109,-8.657c-201.554,-201.714 -201.422,-529.118 0.294,-730.672c2.843,-2.84 -2.891,2.76 0,0l2175.51,-2175.31l1469.9,-8.394l-1345.7,1345.7l0.743,0.744l-1578.35,1576.87l-0.282,-0.283Z'
        fill={vars.accentColor}
      />
      <path
        d='M856.832,211.271l395.448,-395.564l1462.19,-0.677l-1837.75,1838.75l1837.75,-1838.75l-1837.75,1838.75l-0.283,-0.282c-202.328,193.266 -523.421,190.346 -722.16,-8.663c-137.473,-137.657 -181.126,-333.815 -130.991,-508.626l5.882,-817.592l827.664,-107.348Z'
        fill='none'
      />
      <clipPath id='clip1'>
        <path d='M856.832,211.271l395.448,-395.564l1462.19,-0.677l-1837.75,1838.75l1837.75,-1838.75l-1837.75,1838.75l-0.283,-0.282c-202.328,193.266 -523.421,190.346 -722.16,-8.663c-137.473,-137.657 -181.126,-333.815 -130.991,-508.626l5.882,-817.592l827.664,-107.348Z' />
      </clipPath>
      <g clipPath='url(#clip1)'>
        <image
          href='headshot.png'
          x={3273}
          y={2563}
          width={1456}
          height={1916}
          transform='matrix(1,0,0,1,-3443.09,-2257)'
        />
      </g>
    </svg>
  );
 
  return (
    <div className={styles.heroRight}>
      <div className={styles.imagePopout}>{headshotPopout}</div>
    </div>
  );
}
