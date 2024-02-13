import styles from '../styles/pages/conciergerie.module.css'
import Hero from '../components/pages/conciergerie/hero';
import Why from '../components/pages/conciergerie/why';
import Services from '../components/pages/conciergerie/services';


export default function ConciergeriePage() {
    return (
        <main className={styles.all}>
            <Hero />
            <Why />
            <Services />
        </main>
    )
}