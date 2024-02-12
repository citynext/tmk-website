export default function Cta() {
    return (
        <section className="relative hidden sm:flex justify-center w-fit mx-auto my-40">
            <img src="/images/general-landing/cta-img.svg" alt="discover image" className="mx-10"/>
            <div className="absolute top-0 bottom-0 right-20 w-full h-full flex flex-col justify-center items-start text-white max-w-96 mx-5">
                <p className="text-3xl">Convaincu(e) ? Découvrez nos offres, <strong className="text-secondary">TAKE MY KEYS</strong> prend soin de tout pour vous</p>
                <button className="bg-secondary rounded-3xl text-xl px-10 py-3 mt-5">Découvrir</button>
            </div>
        </section>
    )
}