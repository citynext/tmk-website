import Image from "next/image";
import logo from "../../../../public/logo/transparent/green.png";

export default function Why() {
    const className = {
        container: "flex items-center",
        p: "flex-1 !text-xs text-gray-500",
        pleft: "text-right",
        pright: "text-left",
        div: " w-36 h-36 flex-1 flex flex-col justify-between items-center border border-secondary shadow-xl rounded-xl mx-4 my-2",
        img: "",
        h2: "!text-md lg:!text-lg !font-bold text-center"
    }
    return (
        <section className="flex flex-col items-center px-4 text-center">
            <h1>Pourquoi choisir <strong>TAKE MY KEYS</strong> ?</h1>
            <p className="text-gray-500">Découvrez les avantages de faire confiance à Take My Keys pour la gestion de votre propriété</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 lg:mt-20">
                <div className={className.container}>
                    <p className={`${className.p} ${className.pleft}`}>Ne perdez plus de temps à gérer votre location saisonnière</p>
                    <div className={className.div}>
                        <div className={className.img}>
                            <Image src={logo} alt="why1" className="" />
                        </div>
                        <h2 className={className.h2}>Gain de temps</h2>
                    </div>
                </div>
                <div className={className.container}>
                    <div className={className.div}>
                        <Image src={logo} alt="why1" className={className.img} />
                        <h2 className={className.h2}>Gain de temps</h2>
                    </div>
                    <p className={`${className.p} ${className.pright}`}>Ne perdez plus de temps à gérer votre location saisonnière</p>
                </div>
                <div className={className.container}>
                    <p className={`${className.p} ${className.pleft}`}>Ne perdez plus de temps à gérer votre location saisonnière</p>
                    <div className={className.div}>
                        <Image src={logo} alt="why1" className={className.img} />
                        <h2 className={className.h2}>Gain de temps</h2>
                    </div>
                </div>
                <div className={className.container}>
                    <div className={className.div}>
                        <Image src={logo} alt="why1" className={className.img} />
                        <h2 className={className.h2}>Gain de temps</h2>
                    </div>
                    <p className={`${className.p} ${className.pright}`}>Ne perdez plus de temps à gérer votre location saisonnière</p>
                </div>
            </div>
        </section>
    )
}