import { FaHome, FaTools } from "react-icons/fa";

export default function Project({ className, callback, ...props }) {
    const btnClass = "flex justify-center items-center gap-4 rounded-lg border border-gray-400 px-16 py-10 shadow-xl";
    const btnClassHover = "hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300 ease-in-out";
    return (
        <div className={`flex flex-col items-center ${className}`} {...props}>
        <h1 className="w-fit text-2xl font-bold my-6">Quel est votre projet ?</h1>
        <div className="flex gap-10 text-xl my-16">
            <button onClick={() => callback({ project: "achat" })} className={`${btnClass} ${btnClassHover}`}><FaHome /><span>Achat</span></button>
            <button onClick={() => callback({ project: "travaux" })} className={`${btnClass} ${btnClass
                } ${btnClassHover}`}><FaTools /><span>Travaux</span></button>
        </div>
        </div>
    );
}
