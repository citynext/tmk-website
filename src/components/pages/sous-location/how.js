import {
    HiOutlineArrowSmallLeft,
    HiOutlineArrowSmallRight,
  } from "react-icons/hi2";
import Image from "next/image";
import img1 from "@/../public/images/sous-location/how/1.png";
import img2 from "@/../public/images/sous-location/how/2.png";
import img3 from "@/../public/images/sous-location/how/3.png";
import img4 from "@/../public/images/sous-location/how/4.png";
import img5 from "@/../public/images/sous-location/how/5.png";
import img6 from "@/../public/images/sous-location/how/6.png";
import img7 from "@/../public/images/sous-location/how/7.png";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const steps = [
    {
        img: img1,
        title: "Vous complétez le formulaire",
        description: "Décrivez-nous votre logement: son emplacement, sa capacité d'accueil et ses particularités afin d’obtenir une estimation personnalisée et instantanée de vos revenus."
    },
    {
        img: img2,
        title: "Nous visitons votre logement",
        description: "Lors de notre visite, nous complétons la fiche de votre logement et le prenons en photo."
    },
    {
        img: img3,
        title: "Vous signez le mandat de gestion",
        description: "Une fois la visite terminée, nous procédons ensemble à la signature d'un mandat de gestion. Ce document nous autorise à gérer votre logement pendant votre absence."
    },
    {
        img: img4,
        title: "Nous procédons à l'état des lieux avant votre départ",
        description: "La veille de votre départ, nous procédons ensemble à un état des lieux de votre logement."
    },
    {
        img: img5,
        title: "Vous partez en voyage en toute tranquilité",
        description: "Partez sereinement, nous privilégions toujours des voyageurs de confiance qui respecteront les règles que vous avez établies. Nos équipes se chargent de la gestion des voyageurs."
    },
    {
        img: img6,
        title: "Nous vous versons vos revenus",
        description: "Avec un système de versement de revenus flexible, vous avez le choix entre deux options de rémunération : soit vous recevez la totalité de vos revenus à la fin du mandat de gestion, soit vous en percevez 75% dès le début du mandat."
    },
    {
        img: img7,
        title: " Retrouvez votre logement tel que vous nous l'aviez confié.",
        description: "Un état des lieux est organisé afin de vérifier qu’il n’y a pas eu de dégradation. Retrouvez votre logement comme vous l'avez laissé."
    }

]


const StepCard = ({ step, title, description, className }) => {
    return (
      <div
        className={`flex items-center p-4 bg-white border border-gray-400 rounded-xl ${className}`}
      >
        <label
          id="stepLabel"
          className="absolute -left-3 -top-3 flex justify-center items-center text-lg bg-secondary text-white rounded-[50%] min-h-10 min-w-10"
        >
          {step}
        </label>
        <div className="ml-5">
          <h3 className="text-xl mb-2">{title}</h3>
          <p className="text-gray-500 !text-sm">{description}</p>
        </div>
      </div>
    );
  };


export default function How() {
    const [emblaRef, emblaApi] = useEmblaCarousel({inViewThreshold: 1});
    const [selected , setSelected] = useState(0);
  
    useEffect(() => {
      if (emblaApi) {
        emblaApi.on("select", () => {
          setSelected(emblaApi.selectedScrollSnap());
        });
      }
    }, [emblaApi])
    return (
        <section className="flex flex-col gap-10 items-center p-10">
            <h1 className="max-w-[95vw] lg:max-w-[60rem] my-5 text-2xl lg:text-4xl text-center">Comment ça marche ?</h1>
            <div className="flex flex-col items-center gap-10">
                <div className="sm:pl-10 sm:w-1/3" ref={emblaRef}>
                    <ul className="flex mb-10 sm:mb-0 gap-4 sm:gap-10">
                    {steps.map((step, index) => (
                        <li onClick={() => emblaApi.scrollTo(index)} key={index} className={`cursor-pointer relative`} style={{flex: "0 0 auto"}}>
                        <Image
                            src={step.img}
                            alt={step.title}
                            className={`w-[80vw] transition ease-in-out duration-500 sm:w-80 ${selected == index ? "" : "sm:opacity-50"} rounded-2xl`}
                        />
                        <StepCard className={`${selected == index ? "scale-100": "scale-0"} w-[70vw] sm:w-full z-10 absolute -bottom-10 sm:bottom-10 left-0 translate-x-5 sm:-translate-x-10 transition ease-in-out duration-1000`} step={index + 1} title={step.title} description={step.description} />
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="flex gap-4">
                    <button onClick={() => emblaApi.scrollPrev()} className="rounded-full bg-white shadow-xl p-4 flex justify-center items-center text-3xl"><HiOutlineArrowSmallLeft /></button>
                    <button onClick={() => emblaApi.scrollNext()} className="rounded-full bg-white shadow-xl p-4 flex justify-center items-center text-3xl"><HiOutlineArrowSmallRight /></button>
                </div>
            </div>
        </section>
    )
}