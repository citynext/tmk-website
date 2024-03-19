import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useState } from "react";
import review1 from "@/../public/images/conciergerie/reviews/1.png"
import review2 from "@/../public/images/conciergerie/reviews/2.png"
import review3 from "@/../public/images/conciergerie/reviews/3.png"
import review4 from "@/../public/images/conciergerie/reviews/4.png"


const reviews = [
    review1,
    review2,
    review3,
    review4
]


export default function TravelerReviews() {

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
        <section className="flex flex-col items-center">
            <h1 className="text-center !mb-12 lg:!mb-24">Ce que les voyageurs disent de nous</h1>
            <div className="sm:pl-10 sm:w-2/3" ref={emblaRef}>
                <ul className="flex mb-10 sm:mb-0 gap-4 sm:gap-10">
                    {reviews.map((review, index) => (
                        <div key={index} className="" style={{flex: "0 0 90%"}}>
                            <Image src={review} alt={`review-${index + 1}`} />
                        </div>
                    ))}
                </ul>
            </div>
        </section>
    )
}