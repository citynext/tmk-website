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

export default function SousLocationPage() {
    return (
        <main className={styles.all}>
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