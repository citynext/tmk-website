import Image from "next/image";
import review1 from "@/../public/images/conciergerie/reviews/1.png"
import review2 from "@/../public/images/conciergerie/reviews/2.png"
import review3 from "@/../public/images/conciergerie/reviews/3.png"

export default function TravelerReviews() {
    return (
        <section className="flex flex-col items-center">
            <h1 className="text-center !mb-12 lg:!mb-24">Ce que les voyageurs disent de nous</h1>
            <Image src={review1} alt="Review 1" />
            <Image src={review2} alt="Review 2" />
            <Image src={review3} alt="Review 3" />
        </section>
    )
}