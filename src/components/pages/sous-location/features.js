import { BiKey } from "react-icons/bi";
import { RiDoorOpenLine } from "react-icons/ri";
import { SlScreenDesktop } from "react-icons/sl";
import { RiCustomerService2Fill } from "react-icons/ri";
import { PiPaintBrushHousehold } from "react-icons/pi";
import { GiTowel } from "react-icons/gi";
import { LiaToolsSolid } from "react-icons/lia";
import { RxCountdownTimer } from "react-icons/rx";
import { MdOutlinePhotoCamera } from "react-icons/md";

const data = [
    {
        icon: BiKey,
        title: "Gestion des clés",
    },
    {
        icon: RiDoorOpenLine,
        title: "Check in / out",
    },
    {
        icon: SlScreenDesktop,
        title: "Gestion et publication des annonces",
    },
    {
        icon: PiPaintBrushHousehold,
        title: "Ménage par prestataire hôtelier",
    },
    {
        icon: RiCustomerService2Fill,
        title: "Chargé de compte",
    },
    {
        icon: GiTowel,
        title: "Linge de maison",
    },
    {
        icon: LiaToolsSolid,
        title: "Maintenance et entretien du bien",
    },
    {
        icon: RxCountdownTimer,
        title: "Gestion complète de la clientèle 24/7",
    },
    {
        icon: MdOutlinePhotoCamera,
        title: "Shooting photo professionnel",
    },
]

export default function Features() {
    return (
        <section className="p-4 text-center bg-third py-12">
            <h1 className="!font-medium">Que se passe-t-il dans le logement pendant votre absence ?</h1>
            <p className="my-4 mx-auto max-w-[60rem]">Nous procédons à des vérification approfondies des antécédents potentiels et effectuons des contrôles sur les réseaux sociaux au besoin, afin de garantir la sécurité de votre logement.</p>
            <ul className="grid grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-32 p-6 sm:px-32 sm:py-14">
                {data.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <li key={index} className="flex flex-col items-center flex-1">
                            <Icon className="size-10 lg:size-16 mb-4 text-secondary" />
                            <h2 className="!font-light !text-lg lg:!text-xl">{item.title}</h2>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}