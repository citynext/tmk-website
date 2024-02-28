import styles from '@/styles/pages/landing-page.module.css'
import Hero from '@/components/pages/conciergerie/hero';
import Why from '@/components/pages/conciergerie/why';
import Services from '@/components/pages/conciergerie/services';
import Process from '@/components/pages/conciergerie/process';
import Pricing from '@/components/pages/conciergerie/pricing';
import ClientReviews from '@/components/pages/conciergerie/clientReviews';
import Partners from '@/components/reusable/partners';
import Faq from '@/components/pages/conciergerie/faq';
import Personas from '@/components/pages/conciergerie/personas';
import TravelerReviews from '@/components/pages/conciergerie/travelerReviews';



export default function ConciergeriePage() {
    return (
        <main className={styles.all}>
            <Hero />
            <Why />
            <Services />
            <Process />
            <Pricing />
            <Personas />
            <ClientReviews />
            <TravelerReviews />
            <Partners />
            <Faq />
        </main>
    )
}