import {useState} from "react"
import { LabelInput, TextInput } from "@/components/form/inputs";
import { FaPhone } from "react-icons/fa6";
import { useSearchParams } from "next/navigation";
import { MdEmail } from "react-icons/md";

export default function Info({ className, onPrev, onNext, ...props }) {
    const searchParams = useSearchParams();
    const [formData, setFormData] = useState({
        firstName: searchParams.get("firstName") || "",
        lastName: searchParams.get("lastName") || "",
        email: searchParams.get("email") || "",
        phone: searchParams.get("phone") || "",
    })

    const handleFormDataChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        onNext(formData)
        e.preventDefault();
    }
    return (
        <div className={`flex flex-col gap-10 items-center ${className}`} {...props}>
            <h1 className="w-fit text-2xl text-center font-semibold my-10">Créer votre compte pour obtenir votre estimation</h1>
            <form onSubmit={handleSubmit} className="flex flex-wrap justify-center gap-4 w-full max-w-[50rem]">
                <LabelInput label="Nom" className="w-full sm:flex-1 sm:min-w-[40%]">
                    <TextInput required placeholder="Alexandre" onChange={handleFormDataChange} name="lastName" value={formData.lastName} />
                </LabelInput>
                <LabelInput label="Prénom" className="w-full sm:flex-1 sm:min-w-[40%]">
                    <TextInput required placeholder="Dupont" onChange={handleFormDataChange} name="firstName" value={formData.firstName} />
                </LabelInput>
                <LabelInput label="Email" className="w-full sm:flex-1 sm:min-w-[40%]">
                    <TextInput icon={MdEmail} placeholder="adupont@email.com" type="email" required onChange={handleFormDataChange} name="email" value={formData.email} />
                </LabelInput>
                <LabelInput label="Téléphone" className="w-full sm:flex-1 sm:min-w-[40%]">
                    <TextInput icon={FaPhone} type="tel" placeholder="0612345678" required onChange={handleFormDataChange} name="phone" value={formData.phone} />
                </LabelInput>
                <div className="flex flex-col gap-2 mt-10">
                    <button
                        type="submit"
                        className="border border-secondary bg-secondary-20 text-secondary rounded-lg py-2 px-10 hover:underline"
                    >
                        C&apos;est parti !
                    </button>
                    <button type="button" className="bg-transparent text-sm rounded-lg hover:underline" onClick={() => onPrev(formData)}>Retour</button>
                </div>
            </form>
        </div>
    )
}
