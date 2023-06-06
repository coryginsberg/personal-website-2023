'use strict';

import styles from './../styles/footer.module.scss';

import * as React from 'react';

type Props = Readonly<{}>;

export default function Footer(props: Props): React.ReactElement {
  return (
    <div className={styles.root}>
      <h5 className={styles.copyright}>
        Made with ❤️ by Cory Ginsberg. © 2023-Present.
      </h5>
      <p className={styles.openSource}>
        (Pssst... This website is open source!{' '}
        <a
          href="https://github.com/coryginsberg/personal-website-2023"
          className={styles.link}>
          Click here to see it on GitHub
        </a>
        !)
      </p>
    </div>
  );
}
