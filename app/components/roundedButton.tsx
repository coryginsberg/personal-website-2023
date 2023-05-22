import React from 'react';
import styles from '../styles/components/roundedButton.module.scss';

type Props = {
  children: string;
  color?: string;
  backgroundColor?: string;
};

export default function RoundedButton(props: Props) {
  return (
    <button
      className={styles.button}
      style={{
        color: props.color,
        backgroundColor: props.backgroundColor,
      }}
    >
      {props.children}
    </button>
  );
}
