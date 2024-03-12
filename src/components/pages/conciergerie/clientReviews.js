import Image from "next/image";
import data from "../../../data/conciergerie/clientReviews.json";
import { FaStar } from "react-icons/fa";
import Carousel from "@/components/reusable/carousel";

export default function ClientReviews() {
  return (
    <section className="flex flex-col justify-center items-center px-10">
      <h1 className="text-center">Ce que nos clients disent de nous</h1>
      <Carousel className="w-full mt-32" autoplay options={{ loop: true, dragFree: true, containScroll: 'trimSnaps' }}>
        {data.map((review, index) => (
          <div
            key={index}
            className="relative bg-white shadow-2xl rounded-2xl mx-6 p-4 w-72 sm:w-96"
          >
            <div className="absolute flex justify-center items-center -top-20 left-0 right-0 w-40 h-40 mx-auto bg-primary rounded-full z-[-1]"></div>
            <div className="absolute -top-16 left-0 right-0 mx-auto w-32 h-32 z-20">
              <Image
                src={review.image}
                alt={review.name}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="mt-16 flex flex-col justify-between items-center text-center">
              <h2 className="">{review.name}</h2>
              <p className="!text-base">{review.review}</p>
              <div className="my-4 w-fit grid grid-cols-5 gap-2 text-yellow-400">
                {Array.apply(null, Array(5)).map((v, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
