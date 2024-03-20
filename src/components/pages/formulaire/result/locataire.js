import Image from "next/image";
import Link from "next/link";
import happy from "@/../public/images/happy-woman.svg"


export default function Locataire({ estimation, rent, form}) {
    const title = estimation ? "Pendant votre absence, votre logement peut vous générer" : "Vous pouvez gagner jusqu'à";
  return (
    <div className="flex flex-col items-center justify-end w-full gap-4 h-screen px-4">
      <h1 className="text-center text-xl lg:text-3xl font-semibold max-w-[30rem]">Félicitations ! Votre estimation est prête</h1>
      <p className="text-center text lg:text-lg my-6">{title}</p>
      <div className="flex items-center gap-4">
        <div className="w-10 h-1 bg-primary"></div>
        <h2 className="text-secondary text-center text-3xl lg:text-5xl font-semibold">{estimation ? estimation : rent}€{estimation ? "" : "/mois"}</h2>
        <div className="w-10 h-1 bg-primary"></div>
      </div>
      <div className="flex flex-col items-center lg:mt-10 text-center">
        <p className="mb-6">Prenez rendez-vous avec un de nos conseillers pour finaliser votre projet de départ</p>
        <Link target="_blank" href={process.env.NEXT_PUBLIC_CALENDLY_URL}>
          <button className="bg-secondary w-fit text-white rounded-full py-3 px-10 hover:underline z-10">Prendre rendez-vous</button>
        </Link>
        <Image src={happy} alt="happy woman raising hands" className="max-h-[50vh]" />
      </div>
    </div>
  )
}

Locataire.getLayout = function getLayout(page) {
  return page;
};