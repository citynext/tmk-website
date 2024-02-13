import Image from 'next/image'
import { HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight } from 'react-icons/hi2'
import services from '@/data/conciergerie/services.json'


const Service = ({ image, title, description }) => {
    return (
        <div className="flex flex-col justify-between mx-2 flex-1">
            <Image src={image} alt={title} width={400} height={400} />
            <h3 className='text-md my-4 uppercase'>{title}</h3>
            <p className="!text-sm">{description}</p>
        </div>
    )
}




export default function Services() {
    const nextStep = () => {
        console.log("next step")
    }

    const prevStep = () => {
        console.log("prev step")
    }

    return (
        <section className="flex flex-col items-center my-10 py-10 px-20 bg-third">
            <h1>Nos services</h1>
            <p>Découvrez nos services - Votre tranquilité, Notre signature</p>
            <div className='flex mt-16 text-center'>
                {services.map((service, index) => (
                    <Service key={index} image={service.image} title={service.title} description={service.description} />
                ))
                }
            </div>
            <div className="flex justify-center items-center mt-5">
                <button className={`text-3xl bg-text text-white rounded-full p-3 m-4`} onClick={prevStep}><HiOutlineArrowSmallLeft /></button>
                <button className={`text-3xl bg-text text-white rounded-full p-3 m-4`} onClick={nextStep}><HiOutlineArrowSmallRight /></button>
            </div>
        </section>
    )
}