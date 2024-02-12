import Image from "next/image"
import styles from "@/styles/pages/conciergerie.module.css"

export default function Hero() {
    return (
        <section className="relative h-[95vh] w-full">
            <Image src="/images/conciergerie/hero.svg" className="z-[-1]" alt="Personne souriante qui tend des clefs" fill objectFit="cover" quality={100} />
            <div className={`${styles.meryem}`}>
                <h1>test</h1>
            </div>
        </section>
    )
}