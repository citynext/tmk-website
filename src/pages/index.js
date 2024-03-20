import Head from 'next/head'
import styles from '../styles/pages/landing-page.module.css'
import Hero from '../components/pages/index/hero';
import How from '../components/pages/index/how';
import Stats from '../components/pages/index/stats';
import Why from '../components/pages/index/why';
import Who from '../components/pages/index/who';
import Cta from '../components/pages/index/cta';

const metadata = {
  title: "Take My Keys - Accueil",
  description: "Take My Keys est une agence spécialisée dans la location saisonnière. Nous vous proposons de gérer la sous-location de votre logement pendant votre absence, et de vous garantir le paiement de votre loyer. Nous nous occupons de tout, de la gestion de votre logement à la réception des sous-locataires, en passant par le ménage et la maintenance. Nous vous garantissons un revenu fixe, sans commission, et sans frais cachés. Prenez la clé des champs, et confiez-nous votre logement en toute confiance",
}


export default function index() {
  return (
    <main className={styles.all}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <Hero />
      <How />
      <Stats />
      <Why />
      <Cta />
      <Who />
    </main>
  );
}

