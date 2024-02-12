import Image from "next/image"
import styles from "@/styles/pages/conciergerie.module.css"
import CTA from "@/components/reusable/cta"


export default function Hero() {
    return (
        <section className={`relative flex flex-col justify-center h-[95vh] mb-40 w-full`}>
            <Image src="/images/conciergerie/hero.svg" className="z-[-1]" alt="Personne souriante qui tend des clefs" fill objectFit="cover" quality={100} />
            <div className="relative text-white top-0 bottom-0 left-10 pl-10 py-16 my-auto w-full h-fit flex flex-col">
                <img src="/images/conciergerie/hero-rectangle.svg" alt="Conciergerie" className="absolute left-0 top-0 bottome-0 h-full" />
                <h1 className="">MAXIMISEZ VOS REVENUS</h1>
                <h2>Confiez votre propriété à <br /><strong>TAKE MY KEYS</strong></h2>
                <p>Confiez-nous votre bien immobilier et profitez d&apos;une gestion sans tracas</p>
            </div>
            <CTA className="text-text my-10 lg:my-0 w-fit lg:mx-auto lg:left-0 lg:right-0 lg:absolute lg:bottom-[-5rem] lg:h-36" />
        </section>
    )
}