import styles from './styles/page.module.scss';
import Hero from './hero_sections/hero';
import {Projects} from './projects';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Projects />
    </main>
  );
}
