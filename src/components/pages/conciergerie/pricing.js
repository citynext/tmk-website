import Link from "next/link";
import { FaCheck } from "react-icons/fa6";

const prices = [
  {
    price: "15%",
    title: "Essentiel",
    description: "Pack de lancement",
    features: [
      "",
      "Gestion des réservations",
      "Ménage",
      "Linge de maison",
      "Accueil des voyage",
    ],
  },
  {
    price: "20%",
    title: "PREMIUM",
    description: "Suivi complet",
    features: [
      "Pack ESSENTIEL",
      "Gestion des réservations",
      "Ménage",
      "Linge de maison",
      "Accueil des voyage",
    ],
  },
  {
    price: "30%",
    title: "Signature",
    description: "Pack de lancement",
    features: [
      "Pack PREMIUM",
      "Gestion des réservations",
      "Ménage",
      "Linge de maison",
      "Accueil des voyage",
    ],
  },
];

const PricingCard = ({
  price,
  title,
  description,
  features,
  className,
  ...props
}) => {
  return (
    <li
      className={`${className} flex-1 flex flex-col justify-center bg-primary shadow-2xl rounded-2xl mx-2 py-2 lg:max-w-[25vw]`}
      {...props}
    >
      <div className="flex-1 flex flex-col items-center bg-white rounded-xl p-10">
        <h2 className="!font-bold text-primary !mb-6">{price}</h2>
        <h2 className="!text-3xl !font-bold text-secondary uppercase">
          {title}
        </h2>
        <span className="border-primary border-b w-10 mb-2"></span>
        <p className="!text-text !text-xl ">
          {description}
        </p>
        <div className="flex flex-col justify-between flex-1 h-fit">
        <ul className="my-10">
          {features[0] && (
            <li className="text-secondary flex my-4">
              <FaCheck className="mr-2" />{features[0]}
            </li>
          )}
          {features.slice(1).map((feature, index) => (
            <li key={index} className="flex font-thin my-4">
              <FaCheck className="mr-2" /> {feature}
            </li>
          ))}
        </ul>
        <button className="bg-secondary !text-white rounded-3xl px-5 py-1 lg:px-10 lg:py-3">
          Découvrir
        </button>
        </div>
      </div>
    </li>
  );
};

export default function Pricing() {
  return (
    <section className="flex flex-col items-center w-full">
      <div className="text-center px-5 lg:px-20">
          <h1 className="!text-3xl lg:!text-4xl">Une offre <strong className="uppercase underline !text-primary">unique</strong></h1>
          <p className="mt-10 lg:px-20">
            Notre conciergerie vous propose une formule simple : La gestion complète.<br />Cette formule inclut, par défaut, tous les services Take My Keys. Nous nous occupons de tout et prenons une commission de 20% sur le revenu total par réservation. Vous ne payez donc notre service de gestion des locations si votre bien est loué. Vous avez accès via l'application au suivi des réservations et des revenus perçus.
          </p>
      </div>
      <div className="flex flex-wrap p-4 justify-center items-stretch gap-10 w-full mt-10">
        <div className="w-[25rem] flex flex-col justify-center bg-third p-6 text-center text-primary">
          <div className="text-2xl uppercase font-semibold">Commission sur revenus</div>
          <div>
            <span className="text-8xl font-semibold">20%</span>
            <span> TTC</span>
          </div>
          <div className="uppercase text-2xl">de chaque reservation</div>
          <div className="uppercase text-2xl">+ forfait ménage / linge*</div>
          <div className="text-sm">* à la chage du voyageur</div>
        </div>
        <div className="w-[25rem] flex flex-col justify-center bg-primary p-6 text-center text-third">
          <div className="text-2xl uppercase font-semibold">Une tarification claire</div>
          <div>
            <span className="text-8xl font-semibold">80%</span>
            {/* <span> TTC</span> */}
          </div>
          <div className="uppercase text-2xl">dans votre poche</div>
          <div className="uppercase text-2xl">Sans effort</div>
          <div className="text-sm">Nous ne prenons aucune commission sur le ménage</div>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20 lg:mx-20">
        {prices.map((price, index) => (
          <PricingCard key={index} {...price} />
        ))}
      </div> */}
      <Link href="/form">
        <button className="bg-secondary hover:bg-primary transition ease-in-out duration-300 text-white rounded-lg mt-6 lg:mt-12 px-6 py-2 text-xl">Estimer mes revenus</button>
      </Link>
    </section>
  );
}
