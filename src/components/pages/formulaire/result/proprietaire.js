import Link from "next/link";

export default function Proprietaire({ estimation, rent, marketRent, form }) {
  return (
    <div className="flex flex-col items-center w-full gap-4 lg:gap-8 py-12 px-4">
      <h1 className="text-center text-xl lg:text-3xl font-semibold max-w-[30rem]">
        Félicitations ! Votre simulation est prête
      </h1>
      <h2 className="text-center text-primary text-lg lg:text-xl">
        Nous avons 2 offres à vous proposer
      </h2>
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-6 lg:gap-12 lg:px-12 my-6 lg:my-12">
        <div className="flex-1 flex flex-col items-center gap-4 text-center">
          <h3 className="text-xl font-semibold">
            Sous-location professionnelle
          </h3>
          <div className="w-10 h-1 bg-primary"></div>
          <p>
            Selon nos estimations, votre logement se loue en moyenne à{" "}
            <strong className="text-primary">{marketRent}€</strong>/mois
          </p>
          <p>
            Nous vous proposons de vous le louer avec un revenu{" "}
            <strong>GARANTI</strong> de
          </p>
          <div className="text-secondary text-center text-3xl lg:text-5xl font-semibold">
            {rent}€<span className="text-text text-base">/mois</span>
          </div>
          <p className="text-sm italic">
            que votre appartement soit occupé ou non !
          </p>
        </div>
        <div className="w-1/2 lg:w-1 h-1 lg:h-32 my-auto bg-primary"></div>
        <div className="flex-1 flex flex-col items-center gap-4 text-center">
          <h3 className="text-center text-xl font-semibold">
            Service de conciergerie
          </h3>
          <div className="w-10 h-1 bg-primary"></div>
          <p>
            Grâce à notre expertise dans la location saisonnière, nous
            maximisons les revenus des biens que nous gérons.
          </p>
          <p>Vous pouvez espérer un revenu jusqu&apos;à</p>
          <div className="text-secondary text-3xl lg:text-5xl font-semibold">
            {estimation}€<span className="text-text text-base">/mois</span>
          </div>
          <p className="text-sm italic">
            Vous bénéficiez d&apos;une solution clé en main pour seulement 20% de
            commission
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <p className="text-center text-lg max-w-[50rem]">
            Quelque soit votre situation, nous vous accompagnons dans le choix de la solution la plus adaptée à vos besoin.
        </p>
        <p className="text-center text-lg max-w-[50rem]">
            Prenez rendez-vous avec un de nos conseillers pour finaliser votre projet.
        </p>
        <Link href={process.env.NEXT_PUBLIC_CALENDLY_URL}>
            <button className="bg-secondary w-fit text-white rounded-full py-3 px-10 hover:underline z-10">Prendre rendez-vous</button>
        </Link>
      </div>
    </div>
  );
}

Proprietaire.getLayout = function getLayout(page) {
  return page;
};
