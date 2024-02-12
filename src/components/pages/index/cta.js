import Image from 'next/image'

export default function Cta() {
    return (
        <section className="relative hidden sm:flex justify-center w-[40rem] h-[15rem] lg:w-[60rem] lg:h-[20rem] mx-auto my-40">
            <Image src="/images/general-landing/cta-img.svg" alt="discover image" fill className="z-[-1]"/>
            <div className="absolute top-0 bottom-0 right-0 w-full h-full flex flex-col justify-center items-start text-white max-w-96 mx-10">
                <p className="text-xl lg:text-3xl">Convaincu(e) ? Découvrez nos offres, <strong className="text-secondary">TAKE MY KEYS</strong> prend soin de tout pour vous</p>
                <button className="bg-secondary rounded-3xl lg:text-xl px-5 py-1 lg:px-10 lg:py-3 mt-5">Découvrir</button>
            </div>
        </section>
    )
}