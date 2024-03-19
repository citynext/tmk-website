import Button from "@/components/form/button";
import Image from "next/image";
import Link from "next/link";


const PersonaItem = ({img, title, description, reverse}) => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-10 p-4 lg:p-10">
            <div className={`relative w-full lg:w-[50vw] h-[60vw] lg:h-[30rem] ${reverse ? "lg:order-last" : ""}`}>
                <Image src={img} alt={title} fill className="object-cover rounded-xl" />
            </div>
            <div className={`flex-1 text-center ${reverse ? 'lg:text-end' : 'lg:text-start'}`}>
                <h2 className="!text-2xl !font-bold">{title}</h2>
                <p>{description}</p>
                <Link href="/form">
                    <Button className="mt-4 lg:mt-10">Estimer mes revenus</Button>
                </Link>
            </div>
        </div>
    )
}

export default PersonaItem