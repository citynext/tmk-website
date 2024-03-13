import { useEffect, useState } from "react";
import {
  HiOutlineArrowSmallLeft,
  HiOutlineArrowSmallRight,
} from "react-icons/hi2";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import how1 from "@/../public/images/general-landing/how1.svg";
import how2 from "@/../public/images/general-landing/how2.svg";
import how3 from "@/../public/images/general-landing/how3.svg";

const steps = [
  {
    title: "Estimez vos revenus",
    description:
      "Décrivez-nous votre logement, sa localisation, sa capacité d’accueil, ses petits plus pour recevoir votre estimation.",
    image: how1,
  },
  {
    title: "Confiez-nous votre logement",
    description:
      "Nous nous occupons de tout : de la mise en ligne de votre annonce à l’accueil de vos voyageurs.",
    image: how2,
  },
  {
    title: "Encaissez votre loyer chaque mois",
    description:
      "Profitez de votre temps libre, nous nous occupons de tout pour vous garantir un revenu régulier.",
    image: how3,
  },
];

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
  const [emblaRef, emblaApi] = useEmblaCarousel();
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
        <h1 className="max-w-[95vw] lg:max-w-[60rem] my-5 text-2xl lg:text-4xl text-center">Une démarche simplifiée pour nous confier votre logement</h1>
        <div className="flex flex-col items-center gap-10">
          <div className="sm:pl-10 sm:w-2/3" ref={emblaRef}>
            <ul className="flex mb-10 sm:mb-0 gap-4 sm:gap-10">
              {steps.map((step, index) => (
                <li key={index} className="relative" style={{flex: "0 0 auto"}}>
                  <Image
                    src={step.image}
                    alt={step.title}
                    className={`w-[80vw] transition ease-in-out duration-500 sm:w-full ${selected == index ? "" : "sm:opacity-50"} rounded-2xl`}
                  />
                  <StepCard className={`${selected == index ? "scale-100": "scale-0"} w-[70vw] sm:w-full z-10 absolute -bottom-10 sm:bottom-10 left-0 translate-x-5 sm:-translate-x-10 transition ease-in-out duration-200`} step={index + 1} title={step.title} description={step.description} />
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
