import { useState } from 'react'
import Image from 'next/image'
import { HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight } from 'react-icons/hi2'
import services from '@/data/conciergerie/services.json'


const Service = ({ image, title, description, className, onClick, ...props }) => {
    return (
        <button onClick={onClick} className={`flex flex-col items-center justify-start mx-2 w-[28vw] ${className}`} {...props}>
            <Image src={image} alt={title} width={400} height={400} />
            <h3 className='text-md mx-5 my-4 uppercase'>{title}</h3>
            <p className="!text-sm mx-5">{description}</p>
        </button>
    )
}




export default function Services() {
    const [idx, setIdx] = useState(0)

    const getIdx = (i) => {
        if (i > services.length - 1) return i - services.length
        else if (i < 0) return services.length + i
        else return i
    }



export default function Services() {
    const nextStep = () => {
        if (idx === services.length - 1) setIdx(0)
        else setIdx(idx + 1)
    }

    const prevStep = () => {
        if (idx === 0) setIdx(services.length - 1)
        else setIdx(idx - 1)
    }

    return (
        <section className="flex flex-col items-center my-10 py-10 px-20 bg-third">
            <h1>Nos services</h1>
            <p>Découvrez nos services - Votre tranquilité, Notre signature</p>
            <div className='flex mt-16 text-center'>
                <Service image={services[getIdx(idx - 1)].image} onClick={() => setIdx(idx - 1)} className="scale-90 opacity-60" title={services[getIdx(idx - 1)].title} description={services[getIdx(idx - 1)].description} />
                <Service image={services[getIdx(idx + 0)].image} title={services[getIdx(idx + 0)].title} description={services[getIdx(idx + 0)].description} />
                <Service image={services[getIdx(idx + 1)].image} title={services[getIdx(idx + 1)].title} description={services[getIdx(idx + 1)].description} />
                <Service image={services[getIdx(idx + 2)].image} title={services[getIdx(idx + 2)].title} description={services[getIdx(idx + 2)].description} />
                <Service image={services[getIdx(idx + 3)].image} onClick={() => setIdx(idx + 3)} className="scale-90 opacity-90" title={services[getIdx(idx + 3)].title} description={services[getIdx(idx + 3)].description} />
            </div>
            <div className="flex justify-center items-center mt-5">
                <button className={`text-3xl bg-text text-white rounded-full p-3 m-4`} onClick={prevStep}><HiOutlineArrowSmallLeft /></button>
                <button className={`text-3xl bg-text text-white rounded-full p-3 m-4`} onClick={nextStep}><HiOutlineArrowSmallRight /></button>
            </div>
        </section>
    )
}