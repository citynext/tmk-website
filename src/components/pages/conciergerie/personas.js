import data from "@/data/conciergerie/personas.json";
import Image from "next/image";
import bgd from "@/../public/images/backgrounds/wave2d.svg";
import bgm from "@/../public/images/backgrounds/wave2m.svg";
import PersonaItem from "@/components/reusable/persona";


export default function Personas() {
    return (
        <section className="relative w-full !mb-48 lg:!mb-40 !mt-48">
            <Image src={bgd} alt="Personas" className="hidden sm:block absolute top-40 lg:-top-40 left-0 w-full -z-10" />
            <Image src={bgm} alt="Personas" className="sm:hidden absolute top-0 left-0 w-full -z-10" />
            <h1 className="!mb-12 text-center">Personas</h1>
            <div className="grid gap-10">
                {data.map((persona, index) => (
                    <PersonaItem {...persona} key={index} reverse={index % 2 === 0} />
                ))}
            </div>
        </section>
    )
}