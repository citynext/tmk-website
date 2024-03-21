import styles from '@/styles/pages/landing-page.module.css'
import Hero from '@/components/pages/conciergerie/hero';
import Why from '@/components/pages/conciergerie/why';
import Services from '@/components/pages/conciergerie/services';
import Process from '@/components/pages/conciergerie/process';
import Pricing from '@/components/pages/conciergerie/pricing';
import ClientReviews from '@/components/pages/conciergerie/clientReviews';
import Partners from '@/components/reusable/partners';
import Faq from '@/components/pages/conciergerie/faq';
import Example from '@/components/pages/conciergerie/example';
import TravelerReviews from '@/components/pages/conciergerie/travelerReviews';
import Stats from '@/components/pages/index/stats';
import Head from 'next/head';

const metadata = {
    title: "Conciergerie - Take My Keys",
    description: "Take My Keys est une agence de conciergerie spécialisée dans la location saisonnière. Nous vous proposons de gérer votre logement pendant votre absence, et de vous garantir le paiement de votre loyer. Nous nous occupons de tout, de la gestion de votre logement à la réception des sous-locataires, en passant par le ménage et la maintenance. Nous vous garantissons un revenu fixe, sans commission, et sans frais cachés. Prenez la clé des champs, et confiez-nous votre logement en toute confiance",
}

export default function ConciergeriePage() {
    return (
        <main className={styles.all}>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </Head>
            <Hero />
            <Why />
            <Stats />
            <Pricing />
            <Example />
            <Services />
            <Process />
            <ClientReviews />
            <TravelerReviews />
            <Partners />
            <Faq />
        </main>
    )
}