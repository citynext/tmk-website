import Image from "next/image";
import services from "@/data/conciergerie/services.json";
import Carousel from "@/components/reusable/carousel";
import bg from "@/../public/images/backgrounds/wave.svg";

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
      <Image src={image} alt={title} width={400} height={400} />
      <h3 className="text-md mx-5 my-4 uppercase">{title}</h3>
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
        <p>Découvrez nos services - Votre tranquilité, Notre signature</p>
      </div>
      <Carousel
        options={{loop: true}}
        autoplay
        className="w-full mt-32 z-10">
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
