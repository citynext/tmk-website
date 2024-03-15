import Image from "next/image"
import exampleImg from "@/../public/images/conciergerie/diagram.svg"

const steps = [
    {
        title: "Location de l'appartement",
        description: "L'appartement de Xavier est loué pour 5 jours, soit 1000€ de revenus brut. A cela s'ajoutent les frais de ménage de 50€ réglés par le locataire.",
        conclusion: "Revenu brut global : 1050€"
    },
    {
        title: "Commission Take my Keys",
        description: "Take my Keys prélève une commission fixe de 20% sur le revenu brut hors frais de ménage qui sont réglés par le locataire.",
        conclusion: "Notre commission : 250€"
    },
    {
        title: "Le revenu net de Xavier",
        description: "Xavier perçoit 800€ de revenus net pour cette location de 5 jours. Soit la différence entre le revenu brut et la commission de Take my Keys.",
        conclusion: "Revenu net de Xavier : 800€"
    },
]

export default function Example() {
    return (
        <section className="flex flex-col items-center gap-10 md:gap-24 bg-third p-10">
            <h1 className="uppercase text-center !font-semibold"><strong className="!font-semibold">Prenons le cas de Xavier</strong> qui loue son appartement 200€ la nuit</h1>
            <div className="flex flex-col md:flex-row w-full justify-center gap-24 md:px-24 max-w-[90rem]">
                <div className="flex flex-col items-end gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-start gap-4 max-w-[30rem]">
                            <h3 className="flex-[1] uppercase text-primary">étape {index + 1}</h3>
                            <div className="flex-[3] flex flex-col pl-4 border-l border-l-gray-300">
                                <h3>{step.title}</h3>
                                <p className="!text-sm">{step.description}</p>
                                <p className="!text-sm !font-semibold">{step.conclusion}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="">
                    <Image src={exampleImg} alt="graph" className="object-cover" />
                </div>
            </div>
        </section>
    )
}