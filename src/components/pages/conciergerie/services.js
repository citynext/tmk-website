import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'
import bg from "@/../public/images/backgrounds/wave.svg";
import img1 from "@/../public/images/conciergerie/services1.png";
import img2 from "@/../public/images/conciergerie/services2.png";
import img3 from "@/../public/images/conciergerie/services3.png";
import img4 from "@/../public/images/conciergerie/services4.png";
import img5 from "@/../public/images/conciergerie/services5.png";
import img6 from "@/../public/images/conciergerie/services6.png";


const services = [
  {
      "image": img1,
      "title": "Création des annonces",
      "description": "Bénéficiez d'un service client inégalé et d'une assistance disponible 24h/24 et 7j/7, garantissant une expérience inoubliable et fluide à vos clients depuis leur arrivée jusqu'à leur départ."
  },
  {
      "image": img2,
      "title": "Optimisation des prix des nuitées",
      "description": "Nos outils de tarification dynamique ajusteront les prix des nuitées en fonction de la demande et des événements locaux. Votre logement sera parfaitement tarifé 365 jours par an."
  },
  {
      "image": img3,
      "title": "Photos professionnelles",
      "description": "Nous mettons en scène et aménageons votre propriété avec des photos de qualité captivantes qui mettent en valeur votre propriété."
  },
  {
      "image": img4,
      "title": "Communication avec les voyageurs",
      "description": "Bénéficiez d'une communication inégalée et d'une assistance téléphonique disponible 24h/24 et 7j/7 avec votre clientèle, garantissant une expérience inoubliable de l'accueil jusqu'au départ."
  },
  {
      "image": img5,
      "title": "Services de ménage complet",
      "description": "Soyez tranquille : votre propriété restera impeccable grâce à notre ménage de qualité. Nous gérons aussi le linge, offrant draps et serviettes frais. Notre équipe assure un nettoyage méticuleux et fréquent, pour un accueil chaleureux des voyageurs."
  },
  {
      "image": img6,
      "title": "Statut de Superhôte",
      "description": "Confier votre propriété à Take My Keys vous assure d'obtenir ce statut très convoité et des avis positifs, laissant une impression durable pour les milliers de visiteurs du site."
  }
]

const Service = ({
  image,
  title,
  description,
  className,
  onClick,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-start ${className}`}
      {...props}
    >
      <div className="relative size-60 sm:size-80 rounded-xl">
        <Image src={image} alt={title} fill className="object-cover rounded-xl" />
      </div>
      <h3 className="text-md font-bold mx-5 my-4 uppercase">{title}</h3>
      <p className="!text-sm lg:mx-5">{description}</p>
    </button>
  );
};

export default function Services() {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({delay:6000, stopOnUserInteraction: true})]);
  const [selected , setSelected] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setSelected(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi])

  return (
    <section className="relative flex flex-col items-center lg:pt-10">
      <Image src={bg} alt="bg img" className="absolute top-40 lg:top-0 left-0 w-full -z-10" />
      <div className="text-center lg:mx-24">
        <h1>Nos services</h1>
        <p>Votre tranquilité, notre signature</p>
      </div>
      <div className="w-screen max-w-full" ref={emblaRef}>
        <ul className="w-full flex mb-10 sm:mb-0 mt-12 lg:mt-24">
          {services.map((service, index) => (
            <li
            key={index}
            >
              <Service
                image={service.image}
                title={service.title}
                description={service.description}
                className="mx-4 sm:mx-16"
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden sm:flex justify-center items-center gap-4">
        <button
          onClick={() => emblaApi.scrollPrev()}
          className="rounded-full bg-white p-4 text-2xl shadow-xl"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => emblaApi.scrollNext()}
          className="rounded-full bg-white p-4 text-2xl shadow-xl"
        >
          <FaArrowRight />
        </button>
      </div>
      {/* <Carousel
        options={{slidesToScroll: 3}}
        autoplay
        className="w-full mt-20 z-10">
        {services.map((service, i) => (
          <Service
            key={i}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </Carousel> */}
    </section>
  );
}
