import CTA from "@/components/reusable/cta"


export default function Hero() {
    return (
        <section className="relative h-screen w-screen">
            <img 
                src="/images/conciergerie/hero.svg" 
                alt="Personne souriante qui tend des clefs"
                className="object-cover w-full h-screen lg:h-[95%]" 
            />
            <div className="absolute inset-0 w-full h-full flex flex-col">
                <div className="flex-1 flex flex-col justify-center text-white mt-24 px-4 lg:px-10">
                    <div className="border-8 border-secondary relative h-fit py-10 lg:py-20 pl-5 lg:pl-10">
                        <img
                            src="/images/conciergerie/hero-rectangle.svg"
                            alt="Conciergerie"
                            className="hidden lg:absolute left-0 top-0 h-full object-[fit]"
                        />
                        <h1 className="!text-2xl lg:!text-5xl !font-bold">MAXIMISEZ VOS REVENUS</h1>
                        <h1 className="!text-2xl lg:!text-5xl !font-bold">Confiez votre propriété à <br /><strong>TAKE MY KEYS</strong></h1>
                        <p className="!text-sm">Confiez-nous votre bien immobilier et profitez d&apos;une gestion sans tracas</p>
                    </div>
                </div>
                <CTA className="mx-4 lg:mx-auto mt-4" />
            </div>
        </section>
    )
}