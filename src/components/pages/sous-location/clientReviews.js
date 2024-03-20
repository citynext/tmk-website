import { useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'
import { FaStar } from "react-icons/fa6";
import femme from "@/../public/images/femme1.png";
import homme1 from "@/../public/images/homme2.png";
import anonymous from "@/../public/images/anonymous.jpeg";

const reviews = [
  {
      "name": "Cédric D.",
      "image": homme1,
      "review": "Pendant que nous explorions les Highlands écossais, Take My Keys s'est occupé de la location de notre appartement avec un professionnalisme exemplaire. Leur plateforme conviviale a facilité la gestion de la location pendant notre absence, et nous avons pu profiter pleinement de notre voyage en sachant que notre propriété était entre de bonnes mains. À notre retour, nous avons retrouvé notre appartement en parfait état, ce qui témoigne du sérieux de leur équipe. Nous recommandons vivement Take My Keys à tous les propriétaires cherchant une gestion locative fiable et efficace."
  },
  {
      "name": "Ines L.",
      "image": femme,
      "review": "Bénéficiant du service de Take My Keys lors de mon séjour en Malaisie, je suis pleinement satisfait. À mon retour, mon logement était impeccable, me permettant ainsi de profiter pleinement de mon voyage grâce aux économies réalisées. Merci à toute l'équipe pour leur efficacité."
  },
  {
      "name": "Leo M.",
      "image": anonymous,
      "review": "Take My Keys propose un service de qualité pour ceux qui n'ont pas le temps de gérer la location de leur logement. La procédure est claire et simple, le suivi est rapide et le contact est très amical. J'ai même pu leur demander de récupérer un objet chez moi et de le livrer ailleurs pendant mon absence. À la fin du contrat, je ne peux que les remercier pour leur travail incroyable et leur équipe. Je recommande vivement !"
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
      {/* <Carousel className="w-full mt-32" autoplay options={{ loop: true }}>
        {data.map((review, index) => (
          <div
            key={index}
            className="relative bg-white shadow-2xl rounded-2xl mx-6 p-4 w-72 sm:w-96"
          >
            <div className="absolute flex justify-center items-center top-[-5rem] left-0 right-0 w-40 h-40 mx-auto bg-primary rounded-full z-[-1]"></div>
            <div className="absolute top-[-4rem] left-0 right-0 mx-auto w-32 h-32 z-20">
              <Image
                src={review.image}
                alt={review.name}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="mt-16 flex flex-col justify-between items-center text-center">
              <h2 className="">{review.name}</h2>
              <p className="!text-base line-clamp-6">{review.review}</p>
              <div className="my-4 w-fit grid grid-cols-5 gap-2 text-yellow-400">
                {Array.apply(null, Array(5)).map((v, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Carousel> */}
    </section>
  );
}
