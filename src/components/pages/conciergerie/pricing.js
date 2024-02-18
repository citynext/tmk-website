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
        <h1>Nos offres</h1>
        <p className="mt-10 lg:px-20">
            Chez <strong className="!text-primary">TAKE MY KEYS</strong>, nous
            comprenons que chaque logement est unique. C&apos;est pourquoi nous avons
            conçu une gamme d&apos;offres adaptées à vos besoins.
        </p>
    </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-20 lg:mx-20">
        {prices.map((price, index) => (
          <PricingCard key={index} {...price} />
        ))}
      </div>
    </section>
  );
}
