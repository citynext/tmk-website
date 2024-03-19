import Image from "next/image"
import exampleImg from "@/../public/images/conciergerie/example.png"

const steps = [
    {
        title: "Location de l'appartement",
        description: "L'appartement de Guillaume est loué pour 5 jours, soit 1000€ de revenus brut. A cela s'ajoutent les frais de ménage de 50€ réglés par le locataire.",
        conclusion: "Revenu brut global : 1050€"
    },
    {
        title: "Commission Take my Keys",
        description: "Take my Keys prélève une commission fixe de 20% sur le revenu brut hors frais de ménage qui sont réglés par le locataire.",
        conclusion: "Notre commission : 250€"
    },
    {
        title: "Le revenu net de Guillaume",
        description: "Guillaume perçoit 800€ de revenus net pour cette location de 5 jours. Soit la différence entre le revenu brut et la commission de Take my Keys.",
        conclusion: "Revenu net de Guillaume : 800€"
    },
]

export default function Example() {
    return (
        <section className="flex flex-col items-center gap-10 md:gap-24 bg-third p-10">
            <h1 className="uppercase text-center !font-semibold"><strong className="!font-semibold">Prenons le cas de Guillaume </strong>qui loue son appartement 200€ la nuit</h1>
            <div className="flex flex-col lg:flex-row w-full justify-center gap-24 lg:px-24 max-w-[90rem]">
                <div className="flex-[1] flex flex-col items-end gap-12 pt-4">
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <h3 className="flex-[1] uppercase text-primary">étape {index + 1}</h3>
                            <div className="flex-[3] flex flex-col pl-4 border-l border-l-gray-300">
                                <h3>{step.title}</h3>
                                <p className="!text-sm">{step.description}</p>
                                <p className="!text-sm !font-semibold">{step.conclusion}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex-[1]">
                    <Image src={exampleImg} alt="graph" className="object-cover" />
                </div>
            </div>
        </section>
    )
}