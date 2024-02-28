import data from "@/data/sous-location/personas.json";
import PersonaItem from "@/components/reusable/persona"

export default function Personas() {
    return (
        <section className="relative w-full !mb-24 lg:!mb-80 !mt-16 px-4 sm:px-10">
            <h1 className="!mb-12 text-center">Divers profils, un objectif commun</h1>
            <div className="grid gap-10">
                {data.map((persona, index) => (
                    <PersonaItem {...persona} key={index} reverse={index % 2 === 0} />
                ))}
            </div>
        </section>
    )
}