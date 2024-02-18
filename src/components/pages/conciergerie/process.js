import Image from "next/image";
import processImg from "../../../../public/images/conciergerie/process.svg";

export default function Process() {
    return (
        <section className="relative flex flex-col items-center w-full">
            <h1>Notre engagement en quelques étapes</h1>
            <p>Découvrez notre processus simplifié pour une gestion sans stress</p>
            <Image src={processImg} alt="process" className="my-20 w-full" />
        </section>
    )
}