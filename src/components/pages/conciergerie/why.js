import Image from "next/image";
import icon1 from "@/../public/images/conciergerie/why/1.svg";
import icon2 from "@/../public/images/conciergerie/why/2.svg";
import icon3 from "@/../public/images/conciergerie/why/3.svg";
import icon4 from "@/../public/images/conciergerie/why/4.svg";

export default function Why() {
    const className = {
        container: "flex flex-col gap-2 justify-center items-center max-w-96 ",
        img: { width: 100, height: 100},
        h2: "!text-lg !font-bold text-center",
        p: "!text-sm"
    }
    return (
        <section className="flex flex-col items-center px-4 text-center">
            <h1 className="!text-2xl !font-bold lg:!text-4xl">Pourquoi choisir <strong>TAKE MY KEYS</strong> ?</h1>
            <p className="lg:!text-xl">Découvrez les avantages de faire confiance à Take My Keys pour la gestion de votre propriété</p>
            <div className="grid lg:grid-cols-4 mt-20 px-4 lg:px-24 justify-items-center items-start w-full gap-10">
                <div className={className.container}>
                    <Image src={icon1} alt="Pour les propriétaires" {...className.img} />
                    <h2 className={className.h2}>Conçu par les propriétaires pour les propriétaires</h2>
                    <p className={className.p}>Notre service est spécifiquement élaboré pour répondre aux exigences uniques des propriétaires. Nous comprenons vos besoins parce que nous les partageons.<br /><strong className={className.strong}>Votre succès est notre priorité</strong></p>
                </div>
                <div className={className.container}>
                    <Image src={icon2} alt="Expérience" {...className.img} />
                    <h2 className={className.h2}>Une équipe expérimentée et spécialisée</h2>
                    <p className={className.p}>Forts d&apos;une expérience significative avec <strong className={className.strong}>plus de 2000 voyageurs</strong> accueillis, nous mettons à votre disposition une équipe multidisciplinaire de haut niveau. Chaque membre apporte une expertise unique, assurant une gestion de votre propriété à la fois complète et performante.</p>
                </div>
                <div className={className.container}>
                    <Image src={icon3} alt="Transparence" {...className.img} />
                    <h2 className={className.h2}>Engagement envers la transparence</h2>
                    <p className={className.p}>Fini l&apos;incertitude. Notre simulation personnalisée vous offre une <strong className={className.strong}>clarté totale</strong> avec un rapport détaillé immédiat, suivi d&apos;une consultation directe pour répondre à toutes vos questions. Nous valorisons votre confiance par une transparence absolue.</p>
                </div>
                <div className={className.container}>
                    <Image src={icon4} alt="Qualité" {...className.img} />
                    <h2 className={className.h2}>Haute qualité reconnue</h2>
                    <p className={className.p}>La note moyenne de <strong className={className.strong}>4.8</strong> sur les plateformes de réservation témoigne de notre engagement envers l&apos;excellence. Nous nous engageons à maintenir et dépasser cette norme de qualité pour chaque propriété sous notre gestion.</p>
                </div>
            </div>
        </section>
    )
}