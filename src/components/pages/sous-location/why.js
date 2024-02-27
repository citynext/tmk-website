import Image from "next/image";
import icon1 from "@/../public/images/sous-location/why/1.svg";
import icon2 from "@/../public/images/sous-location/why/2.svg";
import icon3 from "@/../public/images/sous-location/why/3.svg";
import icon4 from "@/../public/images/sous-location/why/4.svg";

export default function Why() {
    const className = {
        container: "flex flex-col gap-2 justify-center items-center max-w-96 ",
        img: { width: 100, height: 100},
        h2: "!text-xl !font-bold text-center",
        p: "!text-sm"
    }
    return (
        <section className="flex flex-col items-center px-4 text-center">
            <h1 className="!text-2xl !font-medium lg:!text-4xl">Pourquoi partager votre logement avec<br /><strong>TAKE MY KEYS</strong> ?</h1>
            <div className="grid lg:grid-cols-2 my-10 px-4 lg:px-24 justify-items-center items-center w-full gap-10">
                <div className={className.container}>
                    <Image src={icon1} alt="Pour les propriétaires" {...className.img} />
                    <h2 className={className.h2}>Revenu garanti</h2>
                    <p className={className.p}>Vous avez la garantie d&apos;un certain montant de revenus, que votre bien soit loué ou non. C&apos;est un gage de sécurité financière et de tranquilité d&apos;esprit</p>
                </div>
                <div className={className.container}>
                    <Image src={icon2} alt="Expérience" {...className.img} />
                    <h2 className={className.h2}>Couverture d&apos;assurance de haut niveau</h2>
                    <p className={className.p}>La couverture d&apos;assurance la plus élevée du marché : vous êtes protégé jusqu&apos;à 8 000 000€.</p>
                </div>
                <div className={className.container}>
                    <Image src={icon3} alt="Transparence" {...className.img} />
                    <h2 className={className.h2}>Conditions flexibles</h2>
                    <p className={className.p}>Nous proposons des conditions flexibles, avec un séjour minimum de seulement deux jours et un délai de préavis de 48 heures. Il est ainsi facile pour les hôtes de tirer le meilleur parti de leur propriété.</p>
                </div>
                <div className={className.container}>
                    <Image src={icon4} alt="Qualité" {...className.img} />
                    <h2 className={className.h2}>Sans effort</h2>
                    <p className={className.p}>Nous fournissons une gamme de services pour que vous n&apos;ayez rien à faire. Nous prenons des photos, créons des annonces, nos Hosts-on-Demand gèrent vos annonces, nettoient, effectuent des petits travaux d&apos;entretien et communiquent avec les clients.</p>
                </div>
            </div>
        </section>
    )
}