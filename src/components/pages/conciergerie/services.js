import Image from "next/image";
import services from "@/data/conciergerie/services.json";
import Carousel from "@/components/reusable/carousel";

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
      className={`flex flex-col items-center justify-start mx-2 w-[28vw] ${className}`}
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
    <section className="flex flex-col items-center my-10 py-10 px-20 bg-third">
      <h1>Nos services</h1>
      <p>Découvrez nos services - Votre tranquilité, Notre signature</p>
      <Carousel className="w-full mt-32">
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
