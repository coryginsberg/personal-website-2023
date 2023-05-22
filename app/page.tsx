import styles from './styles/page.module.scss';
import Hero from './hero_sections/hero';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
    </main>
  );
}
