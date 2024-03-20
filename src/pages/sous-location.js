import styles from "@/styles/pages/landing-page.module.css";
import Hero from "@/components/pages/sous-location/hero";
import Why from "@/components/pages/sous-location/why";
import Features from "@/components/pages/sous-location/features";
import Stats from "@/components/pages/index/stats";
import How from "@/components/pages/sous-location/how";
import Personas from "@/components/pages/sous-location/personas";
import ClientReviews from "@/components/pages/sous-location/clientReviews";
import Faq from "@/components/pages/sous-location/faq";
import Partners from "@/components/reusable/partners";
import Head from "next/head";

const metadata = {
    title: "Take My Keys - Sous-location",
    description: "Take My Keys est une agence de sous-location à destination des propriétaires et locataires parisiens. Nous vous proposons de gérer la sous-location de votre logement pendant votre absence, et de vous garantir le paiement de votre loyer. Nous nous occupons de tout, de la gestion de votre logement à la réception des sous-locataires, en passant par le ménage et la maintenance. Nous vous garantissons un revenu fixe, sans commission, et sans frais cachés. Prenez la clé des champs, et confiez-nous votre logement en toute confiance",
}


export default function SousLocationPage() {
    return (
        <main className={styles.all}>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </Head>
            <Hero />
            <Why />
            <Stats />
            <How />
            <Features />
            <Personas />
            <ClientReviews />
            <Partners />
            <Faq />
        </main>
    )
}