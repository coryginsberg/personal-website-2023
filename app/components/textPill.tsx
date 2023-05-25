import React from 'react';
import styles from '../styles/components/textPill.module.scss';

type Props = {
  backgroundColor: string;
  textColor: string;
  children: React.ReactNode;
};

export default function TextPill(props: Props) {
  return (
    <div
      className={styles.root}
      style={{ backgroundColor: props.backgroundColor, color: props.textColor }}
    >
      {props.children}
    </div>
  );
}
