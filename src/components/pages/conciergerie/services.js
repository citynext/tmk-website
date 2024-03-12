import Image from "next/image";
import Carousel from "@/components/reusable/carousel";
import bg from "@/../public/images/backgrounds/wave.svg";
import img1 from "@/../public/images/conciergerie/services1.svg";
import img2 from "@/../public/images/conciergerie/services2.svg";
import img3 from "@/../public/images/conciergerie/services3.svg";
import img4 from "@/../public/images/conciergerie/services4.svg";
import img5 from "@/../public/images/conciergerie/services5.svg";
import img6 from "@/../public/images/conciergerie/services6.svg";


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
      "description": "Soyez assuré que votre propriété conservera son état impeccable grâce à la qualité de ménage. Nous nous occupons également du linge de maison pour vous fournir des draps et des serviettes frais. Notre équipe de professionnels effectue un entretien méticuleux et régulier pour garantir un environnement impeccable et chaleureux pour accueillir les voyageurs."
  },
  {
      "image": img6,
      "title": "Statut de Superhôte",
      "description": "Confier votre propriété à Take my Keys vous assure d'obtenir le statut très convoité et les commentaires des clients Airbnb 5 étoiles, laissant une impression durable pour les milliers de visiteurs du site."
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
      className={`flex flex-col items-center justify-start sm:mx-2 w-[80vw] sm:w-[28vw] ${className}`}
      {...props}
    >
      <div className="relative size-80 rounded-xl">
        <Image src={image} alt={title} fill className="object-cover rounded-xl" />
      </div>
      <h3 className="text-md font-bold mx-5 my-4 uppercase">{title}</h3>
      <p className="!text-sm mx-5">{description}</p>
    </button>
  );
};

export default function Services() {

  return (
    <section className="relative flex flex-col items-center my-10 py-10 px-20">
      <Image src={bg} alt="bg img" className="absolute top-40 lg:top-0 left-0 w-full -z-10" />
      <div className="text-center lg:mx-24">
        <h1>Nos services</h1>
        <p>Votre tranquilité, Notre signature</p>
      </div>
      <Carousel
        options={{loop: true}}
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
      </Carousel>
    </section>
  );
}
