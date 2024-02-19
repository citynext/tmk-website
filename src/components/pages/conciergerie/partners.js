import Image from "next/image"
import airbnb from "../../../../public/images/partners/airbnb.png"
import booking from "../../../../public/images/partners/booking.png"
import leboncoin from "../../../../public/images/partners/leboncoin.png"
import expedia from "../../../../public/images/partners/expedia.png"
import vrbo from "../../../../public/images/partners/vrbo.png"
import abritel from "../../../../public/images/partners/abritel.png"

const images = [
    airbnb,
    booking,
    leboncoin,
    expedia,
    vrbo,
    abritel
]

export default function Partners() {
    return (
        <section className="relative py-10 !mb-40">
            <h1 className="text-center w-full h-20 overflow-hidden">Nos partenaires</h1>
            <div className="absolute flex bg-third items-center">
                { Array(3).fill().map((_, index) => (
                    <div key={index} className="flex items-center justify-center animate-amine">
                    {images.map((image, index) => (
                        <div  className="mx-2 my-1 w-44 flex justify-center">
                            <Image key={index} quality={100} src={image} alt="image" className="m-1 object-cover" />
                        </div>
                    ))}
                </div>
                ))
                }
            </div>
        </section>
    )
}