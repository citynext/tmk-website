import Image from "next/image"
import {whys} from "@/components/pages/index/why"


export default function Why() {
    return (
        <section className="flex justify-around my-20 px-20">
            <Image src="/images/conciergerie/phone.svg" alt='Smartphone TAKE MY KEYS' width={400} height={0} className="mx-10" />
            <div className="max-w-[40rem]">
                <h2>Pourquoi choisir <strong>TAKE MY KEYS</strong> ?</h2>
                <p>Découvrez les avantages qu&apos;offre TAKE MY KEYS pour la gestion de votre propriété</p>
                <ul className="mt-10">
                    {whys.map((why, index) => (
                        <li key={index} className="flex flex-col items-start mb-10">
                            <div className="flex items-center">
                                <why.icon className="text-7xl w-16 h-16 bg-primary-40 text-primary p-3 rounded-full" />
                                <h3 className="text-3xl font-medium ml-5">{why.title}</h3>
                            </div>
                            <div className="flex flex-col">
                                <p className="mt-5 font-light">{why.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}