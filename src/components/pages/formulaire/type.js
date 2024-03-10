import { PiKeyFill } from "react-icons/pi";
import { BsHouseDoorFill } from "react-icons/bs";

export default function Type({className, onPrev, onNext, ...props}) {
    const btnClass = "flex-1 flex justify-center text-text items-center gap-4 rounded-lg border border-gray-400 px-16 py-10 shadow-xl"
    const btnClassHover = "hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300 ease-in-out"
    return (
        <div className={`flex flex-col items-center ${className}`} {...props}>
            <h1 className="w-fit text-2xl text-center font-semibold my-6">Êtes-vous locataire ou propriétaire ?</h1>
            <div className="flex flex-wrap justify-center gap-10 text-xl my-16">
                <button onClick={() => onNext({owner: false})} className={`${btnClass} ${btnClassHover}`}><PiKeyFill /><span>Locataire</span></button>
                <button onClick={() => onNext({owner: true})} className={`${btnClass} ${btnClassHover}`}><BsHouseDoorFill /><span>Propriétaire</span></button>
            </div>
        </div>
    )
}