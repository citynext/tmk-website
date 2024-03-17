import styles from '../styles/pages/landing-page.module.css'
import Hero from '../components/pages/index/hero';
import How from '../components/pages/index/how';
import Stats from '../components/pages/index/stats';
import Why from '../components/pages/index/why';
import Who from '../components/pages/index/who';
import Cta from '../components/pages/index/cta';
import Faq from '../components/pages/index/faq';


export default function index() {
  return (
    <main className={styles.all}>
      <Hero />
      <How />
      <Stats />
      <Why />
      <Cta />
      <Who />
    </main>
  );
}

