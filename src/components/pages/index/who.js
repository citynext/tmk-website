import { IoKeyOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";


export default function Who() {
    const className = {
        btn: "flex flex-col justify-center items-center rounded-xl px-20 py-10 mx-5 max-w-[32rem]"
    }
    return (
        <section className="relative mt-32 h-fit">
            <img src="/images/general-landing/who-bg.svg" className="absolute top-0 left-0 w-full z-[-1]" />
            <div className="flex flex-col">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl text-center">Curieux d'en apprendre davantage ?</h1>
                    <p className="text-gray-500 my-5 text-xl text-center">Explorez les opportunités passionnantes qui vous attendent</p>
                </div>
                <div className="flex justify-center items-center my-10">
                    <button className={`${className.btn} text-white bg-secondary`}>
                        <IoKeyOutline size={80} className="mb-5" />
                        <h2 className="text-4xl">Locataire</h2>
                        <p className="text-xl my-10 font-light">Transformez votre logement en source de revenus avec Take My Keys</p>
                        <span className="text-secondary bg-white text-xl rounded-3xl px-5 py-3">Commencer</span>
                    </button>
                    <button className={`${className.btn} bg-white border border-gray-300`}>
                        <IoHomeOutline size={80} className="text-primary mb-5" />
                        <h2 className="text-4xl">Locataire</h2>
                        <p className="text-xl my-10 font-light">Transformez votre logement en source de revenus avec Take My Keys</p>
                        <span className="text-white bg-primary text-xl rounded-3xl px-5 py-3">Commencer</span>
                    </button>
                </div>
            </div>
        </section>
    )
}