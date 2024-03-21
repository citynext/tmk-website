import { useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'
import { FaStar } from "react-icons/fa6";
import anonymous from "@/../public/images/anonymous.jpeg";
import femme from "@/../public/images/femme3.png";
import homme1 from "@/../public/images/homme1.png";
import homme2 from "@/../public/images/homme3.png";


const reviews = [
  {
      "name": "Gauthier R.",
      "image": homme1,
      "review": "Take My Keys a transformé ma perception de la location courte durée. Avec leur gestion de mon appartement près de Versailles, j'ai vu mes revenus locatifs augmenter significativement tout en ayant zéro tracas. L'équipe est à l'écoute et très compétente. Une solution clé en main que je conseille vivement à tous les propriétaires en Île-de-France."
  },
  {
      "name": "Laura D.",
      "image": femme,
      "review": "L'expérience avec Take My Keys a été exceptionnelle du début à la fin. En tant que propriétaire vivant à l'étranger, il était primordial pour moi de trouver une agence de confiance pour gérer mon appartement à Paris. L'équipe de TakeMyKeys a non seulement pris soin de mon bien comme si c'était le leur, mais ils ont aussi réussi à optimiser les revenus de location bien au-delà de mes attentes."
  },
  {
      "name": "Julien T.",
      "image": homme2,
      "review": "Impressionné par la qualité du service ! La gestion de mon studio a été impeccable. Réservations constantes, entretien parfait et une rentabilité optimisée. L'équipe est réactive et professionnelle. Recommandé à 100% !"
  }
]

export default function ClientReviews() {

  const [emblaRef, emblaApi] = useEmblaCarousel({}, [Autoplay()]);
  const [selected , setSelected] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setSelected(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi])
  return (
    <section className="flex flex-col justify-center items-center px-10">
      <h1 className="text-center !mb-10">Ce que nos clients disent de nous</h1>
      <div className="w-screen sm:w-auto max-w-full" ref={emblaRef}>
        <ul className="w-full flex mb-10 sm:mb-0 mt-24 gap-4 sm:gap-24">
          {reviews.map((review, index) => (
            <li
            key={index}
            className="relative rounded-lg bg-white p-8 shadow-2xl min-w-full sm:min-w-96 w-full sm:w-96 pt-20"
            >
              <div className="absolute -top-20 left-0 right-0 mx-auto bg-primary p-2 h-20 w-40 -z-10" style={{borderRadius: "10rem 10rem 0 0"}}></div>
              <Image src={review.image} alt={review.name} className="absolute -top-16 left-0 right-0 mx-auto size-32 object-cover rounded-full z-10" />
              <div className="flex flex-col justify-between items-center text-center gap-6">
                <h2 className="text-center">{review.name}</h2>
                <p className="bg-white !text-base text-center line-clamp-[8] z-0">
                  {review.review}
                </p>
                <div className="my-4 w-fit grid grid-cols-5 gap-2 text-yellow-400">
                  {Array.apply(null, Array(5)).map((v, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
          </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
