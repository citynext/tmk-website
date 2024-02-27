import Image from "next/image";
import processDesktop from "@/../public/images/conciergerie/process.svg";
import processMobile from "@/../public/images/conciergerie/process-mobile.svg";

export default function Process() {
    return (
        <section className="relative flex flex-col items-center w-full text-center">
            <div className="mx-4 sm:mx-12 lg:mx-24">
                <h1>Notre engagement en quelques étapes</h1>
                <p>Découvrez notre processus simplifié pour une gestion sans stress</p>
            </div>
            <Image src={processDesktop} alt="process" className="my-20 w-full hidden sm:block" />
            <Image src={processMobile} alt="process" className="my-20 w-full sm:hidden" />
        </section>
    )
}