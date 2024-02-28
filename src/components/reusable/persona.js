import Button from "@/components/form/button";
import Image from "next/image";


const PersonaItem = ({img, title, description, reverse}) => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 p-4 lg:p-10">
            <div className={`relative w-[90vw] lg:w-[50vw] h-[60vw] lg:h-[30rem] ${reverse ? "lg:order-last" : ""}`}>
                <Image src={img} alt={title} fill className="object-cover rounded-xl" />
            </div>
            <div className={`flex-1 text-center ${reverse ? 'lg:text-end' : 'lg:text-start'}`}>
                <h2 className="!text-2xl !font-bold">{title}</h2>
                <p>{description}</p>
                <Button className="mt-10 lg:text-2xl !px-10 !py-4">Se connecter</Button>
            </div>
        </div>
    )
}

export default PersonaItem