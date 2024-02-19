import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import footerImg from '../../../public/images/footer/footer-bg.svg'
import logoImg from '../../../public/logo/transparent/green-title.png'



export default function Footer() {
    const className = {
        div: "mx-10 my-5",
        h3: "mb-5 text-",
        ul: "flex flex-col justify-center items-start",
        li: "flex items-center justify-center text-gray-700 font-light text-lg",
        icon: "text-xl mr-2",
    }
    return (
        <>
        <section className="relative bg-third mt-32 pt-10">
            <div className='absolute bottom-0 w-full'>
                <Image src={footerImg} alt="footer background" className='w-full absolute bottom-0 z-[-1]' />
            </div>
            <div className="flex justify-between items-center mx-10">
                <Image src={logoImg} alt="take my keys logo" className="hidden w-60 lg:block m-10" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    <div className={className.div}>
                        <h3 className={className.h3}>Liens rapides</h3>
                        <ul className={className.ul}>
                            <li><Link className={className.li} href="/">Qui sommes-nous ?</Link></li>
                            <li><Link className={className.li} href="/">Comment ça marche ?</Link></li>
                            <li><Link className={className.li} href="/contact">Contact</Link></li>
                            <li><Link className={className.li} href="/faq">FAQ</Link></li>
                        </ul>
                    </div>
                    <div className={className.div}>
                        <h3 className={className.h3}>Services</h3>
                        <ul className={className.ul}>
                            <li><Link className={className.li} href="/sous-location">Sous-location</Link></li>
                            <li><Link className={className.li} href="/conciergerie">Conciergerie</Link></li>
                        </ul>
                    </div>
                    <div className={className.div}>
                        <h3 className={className.h3}>Contactez-nous</h3>
                        <ul className={className.ul}>
                            <li><Link className={className.li} href="mailto:contact@takemykeys.fr"><MdOutlineEmail className={className.icon} />contact@takemykeys.fr</Link></li>
                            <li><Link className={className.li} href=""><FaInstagram className={className.icon} />takemykeys</Link></li>
                            <li><Link className={className.li} href=""><FaFacebook className={className.icon} />Takemykeys</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="border-t-[0.5px] border-gray-700 w-full text-gray-700 font-light text-center py-3">© 2024 TAKE MY KEYS. Tous droits réservés.</p>
        </section>
        </>
    )
}