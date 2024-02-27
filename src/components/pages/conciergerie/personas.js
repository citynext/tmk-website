import Button from "@/components/form/button";
import data from "@/data/conciergerie/personas.json";
import Image from "next/image";
import bgd from "@/../public/images/backgrounds/wave2d.svg";
import bgm from "@/../public/images/backgrounds/wave2m.svg";

const PersonaItem = ({img, title, description, reverse}) => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 p-4 lg:p-10">
            <div className={`relative w-[90vw] h-[60vw] lg:w-[50rem] lg:h-[30rem] ${reverse ? "lg:order-last" : ""}`}>
                <Image src={img} alt={title} fill className="object-cover rounded-xl" />
            </div>
            <div className={`flex-1 text-center ${reverse ? 'lg:text-end' : 'lg:text-start'}`}>
                <h2 className="!text-2xl !font-bold">{title}</h2>
                <p>{description}</p>
                <Button className="mt-10 lg:text-2xl !px-10 !py-4">Se connecter</Button>
            </div>
        </div>
    )
}


export default function Personas() {
    return (
        <section className="relative w-full !mb-48 lg:!mb-80 !mt-48">
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