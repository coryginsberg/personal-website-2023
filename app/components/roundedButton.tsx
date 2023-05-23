import React from 'react';
import styles from '../styles/components/roundedButton.module.scss';

type Props = {
  children: string;
  color?: string;
  backgroundColor?: string;
  className?: string;
};

export default function RoundedButton(props: Props) {
  return (
    <button
      className={props.className ?? styles.button}
      style={{
        color: props.color,
      }}
    >
      {props.children}
    </button>
  );
}
