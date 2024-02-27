import styles from "@/styles/pages/landing-page.module.css";
import Hero from "@/components/pages/sous-location/hero";
import Why from "@/components/pages/sous-location/why";
import Features from "@/components/pages/sous-location/features";
import Stats from "@/components/pages/index/stats";
import How from "@/components/pages/sous-location/how";

export default function SousLocationPage() {
    return (
        <main className={styles.all}>
            <Hero />
            <Why />
            <Stats />
            <How />
            <Features />
        </main>
    )
}