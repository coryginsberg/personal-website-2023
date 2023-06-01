import Hero from './hero_sections/hero';
import {Projects} from './projects';
import styles from './styles/page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Projects />
    </main>
  );
}
