import Carousel from "@/components/reusable/carousel";
import Image from "next/image";
import img1 from "@/../public/images/sous-location/how/1.png";
import img2 from "@/../public/images/sous-location/how/2.png";
import img3 from "@/../public/images/sous-location/how/3.png";
import img4 from "@/../public/images/sous-location/how/4.png";
import img5 from "@/../public/images/sous-location/how/5.png";
import img6 from "@/../public/images/sous-location/how/6.png";
import img7 from "@/../public/images/sous-location/how/7.png";


const data = [
    {
        img: img1,
        title: "Vous complétez le formulaire",
        text: "Décrivez les détails de votre logement, tels que son emplacement, sa capacité d'accueil et ses atouts particuliers, pour obtenir une estimation personnalisée et instantanée de vos revenus"
    },
    {
        img: img2,
        title: "Nous visitons votre logement",
        text: "Validez votre intérêt pour la sous-location de votre logement."
    },
    {
        img: img3,
        title: "Vous signez le mandat de gestion",
        text: "Une fois que la visite est terminée et que tout vous convient, nous procédons ensemble à la signature d'un mandat de gestion. Ce document nous donne l'autorisation officielle de gérer votre logement pendant votre absence. Il s'agit d'un contrat légal rédigé par un avocat, et il nous est attribué grâce à notre statut d'agence immobilière."
    },
    {
        img: img4,
        title: "Nous procédons à l'état des lieux avant votre départ",
        text: "Un état des lieux est organisé la veille de votre départ afin de dresser un inventaire détaillé de l'état du logement. Un document récapitulatif vous sera transmis pour validation avant votre départ."
    },
    {
        img: img5,
        title: "Vous partez en voyage en toute tranquilité",
        text: "Notre but chez Take My Keys est de vous aider de façon responsable. Nous faisons en sorte que des voyageurs de confiance puissent séjourner chez vous quand vous n'êtes pas là. Chez Take My Keys, on choisit soigneusement les voyageurs pour s'assurer qu'ils prendront soin de votre maison, garantissant ainsi sa protection."
    },
    {
        img: img6,
        title: "Nous vous versons vos revenus",
        text: "Avec un système de versement des revenus flexibles, nous tenons à avantager notre clientèle."
    },
    {
        img: img7,
        title: "Nous procédons à l'état des lieux à votre retour",
        text: "Un état des lieux est organisé à votre retour afin de décider des éventuelles réparations ou dégradations à prendre en compte financièrement. Retrouvez votre logement à votre retour, comme vous l'avez laissé."
    }

]


export default function How() {
    return (
        <section className="">
            <h1 className="text-center">Comment ça marche ?</h1>
            <Carousel className="px-10 mt-10 lg:mt-24 mx-auto sm:w-3/6" options={{selectedClass: "bg"}}>
                {data.map((item, index) => (
                    <div key={index} className="relative mx-2 sm:mx-4">
                        <Image src={item.img} alt={item.title} className="w-[80vw] sm:w-[30rem] -z-50" />
                        <div className="absolute p-4 gap-4 flex z-50 bottom-10 -left-2 sm:left-60 bg-white border border-gray-500 rounded-xl w-[85vw] sm:w-[30rem]">
                            <div className="flex justify-center items-center bg-secondary text-white min-w-8 min-h-8 size-8 rounded-full">
                                {index + 1}
                            </div>
                            <div className="">
                                <h2 className="!text-base sm:!text-xl">{item.title}</h2>
                                <p className="!text-xs sm:!text-sm">{item.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </section>
    )
}