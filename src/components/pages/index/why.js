import { LuShieldCheck } from "react-icons/lu";
import { TbCircleKey } from "react-icons/tb";
import { AiOutlineDollar } from "react-icons/ai";


const whys = [
    {
        icon: AiOutlineDollar,
        title: "Les plus généreux",
        description: "Nous offrons le meilleur système de rémunération à nos clients. Que vous soyez proprétaires ou locataires, c'est avec Take My Keys que vous allez gagner le plus d'argent."
    },
    {
        icon: LuShieldCheck,
        title: "Les plus fiables",
        description: "Notre couverture complémentaire exclusive protège votre bien contre d'éventuels dommages causés par les locataires. Elle complète votre assurance habitation, renforçant la fiabilité et la sécuritté communautaire."
    },
    {
        icon: TbCircleKey,
        title: "Les plus flexibles",
        description: "Confiez-nous votre appartement jusqu'à 5 jours avant votre départ, ou 2 jours si vous êtes déjà client. Une flexibilité sans égale pour planifier en toute sérénité."
    }
]


const WhyItem = ({icon, title, description}) => {
    const Icon = icon;
    return (
        <div className="flex flex-col justify-center items-center mx-5 max-w-80">
            <div className="min-w-20 min-h-20 mt-20 mb-5 bg-primary-40 text-primary p-5 rounded-full" >
                <Icon className="text-6xl" />
            </div>
            <h2 className="text-3xl font-medium text-center">{title}</h2>
            <p className="mt-5 text-center font-light">{description}</p>
        </div>
    )
}

export default function Why() {
    return (
        <section className="flex flex-col justify-center items-center md:py-10">
            <div className="mx-5 sm:mx-10 mt-20 max-w-[60rem]">
                <h2 className="text-center text-2xl sm:text-4xl font-medium mb-4">Pourquoi choisir <strong className="text-secondary">TAKE MY KEYS</strong> ?</h2>
                <p className="text-gray-500 text-xl sm:text-2xl font-light text-center">Maximisez vos gains, assurez la tranquilité d&apos;esprit, et bénéficiez d&apos;une flexibilité exceptionnelle avec nous.</p>
            </div>
            <ul className="flex flex-wrap w-full justify-around">
                {whys.map((why, index) => (
                    <li key={index}>
                        <WhyItem {...why} />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export { whys }