
import { GiTakeMyMoney } from "react-icons/gi";
import { RiShieldStarFill } from "react-icons/ri";
import { PiNumberZeroBold } from "react-icons/pi";
import { FaHandPeace } from "react-icons/fa6";

const whys = [
    {
        icon: GiTakeMyMoney,
        title: "Revenu Garanti",
        text: "Take My Keys vous garantit un revenu fixe pour votre logement durant votre absence. Vous n’avez plus à vous soucier de votre loyer, nous nous occupons de tout."
    },
    {
        icon: RiShieldStarFill,
        title: "Couverture d’assurance",
        text: "Take My Keys vous assure une couverture d’assurance complète pour votre logement durant votre absence. Nous prenons en charge les éventuels dégâts causés par les sous-locataires."
    },
    {
        icon: PiNumberZeroBold,
        title: "Zéro Commission",
        text: "Notre rémunération dépend uniquement des sous-locataires occupant l'appartement pendant votre absence. Aucun frais caché ne vous est demandé : aucune commission n'est prélevée, notre service est entièrement gratuit."
    },
    {
        icon: FaHandPeace,
        title: "Sans effort",
        text: "Take My Keys prend soin de votre logement durant votre absence, retrouvez votre logement tel que vous l’avez laissé."
    
    }
]


export default function Why() {
    const className = {
        container: "flex flex-col gap-2 justify-center items-center max-w-96 ",
        img: { width: 100, height: 100},
        h2: "!text-lg !font-bold text-center",
        p: "!text-sm"
    }
    return (
        <section className="flex flex-col items-center px-4 text-center">
            <h1 className="">Pourquoi choisir <span className="whitespace-nowrap"><strong className="bg-secondary !text-white whitespace-nowrap">TAKE MY KEYS</strong> ?</span></h1>
            {/* <p className="lg:!text-xl">Découvrez les avantages de faire confiance à Take My Keys pour la gestion de votre propriété</p> */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-20 px-4 lg:px-24 justify-items-center items-start w-full gap-10">
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