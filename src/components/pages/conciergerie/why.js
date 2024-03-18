import { FaPersonShelter } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";


const whys = [
    {
        icon: FaPersonShelter,
        title: "Par des propriétaires pour les propriétaires",
        text: "Voilà pourquoi on vous comprend si bien: nous avons les mêmes problèmes que vous. Votre succès est notre priorité."
    },
    {
        icon: FaWandMagicSparkles,
        title: "Une solution tout-en-un",
        text: "Nous nous occupons de toute la gestion, du nettoyage à la communication avec les voyageurs. Nous référençons votre bien sur plusieurs plateformes de réservation."
    },
    {
        icon: FaArrowTrendUp,
        title: "Optimisation de vos revenus",
        text: "Augmentez vos revenus locatifs jusqu'à <strong>60%</strong> sans bouger le petit doigt. Nos diverses stratégies, nos outils innovants et notre expertise seront la clé pour atteindre le plein potentiel de votre logement."
    },
    {
        icon: FaSearch,
        title: "Transparence et qualité",
        text: "Avec une note de <strong>4.8</strong> sur les plateformes de réservation, nous témoignons de notre engagement envers la qualité. Forts de l'accueil de plus de 2000 voyageurs, notre équipe multidisciplinaire assure une gestion rigoureuse de chaque propriété, en alliant expertise et performance."
    
    }
]


export default function Why() {
    const className = {
        container: "flex flex-col gap-2 justify-center items-center max-w-96 ",
        img: { width: 100, height: 100},
        h2: "lg:!text-lg !text-base !font-bold text-center",
        p: "!text-sm"
    }
    return (
        <section className="flex flex-col items-center px-4 text-center">
            <h1>Pourquoi choisir <span className="whitespace-nowrap"><strong className="bg-secondary !text-white">TAKE MY KEYS</strong> ?</span></h1>
            {/* <p className="lg:!text-xl">Découvrez les avantages de faire confiance à Take My Keys pour la gestion de votre propriété</p> */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-12 lg:mt-24 px-4 lg:px-24 justify-items-center items-start w-full gap-10">
                {whys.map((why, i) => (
                    <div key={i} className={className.container}>
                        <div className="flex justify-center items-center mb-4 bg-third size-28 shadow-xl rounded-tr-[2.5rem] rounded-bl-[2.5rem]">
                            <why.icon className="text-primary size-12" />
                        </div>
                        {/* <Image src={why.icon} alt={why.title} {...className.img} /> */}
                        <h2 className={className.h2}>{why.title}</h2>
                        <p className={className.p} dangerouslySetInnerHTML={{__html: why.text}}></p>
                    </div>
                ))}
            </div>
        </section>
    )
}