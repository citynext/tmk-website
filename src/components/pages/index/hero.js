import { IoPersonOutline } from "react-icons/io5";
import { LiaDoorOpenSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

const Input = (props) => {
    const btnClasses = "flex justify-center items-center rounded-full w-5 h-5 m-[1px] pb-0.5 text-primary line-height-[1.5]";
    return (
        <div className={`flex flex-col px-8 ${props.className}`}>
            <label className="amine text-lg mb-3">{props.label}</label>
            <div className="flex relative items-center">
                { props.icon && <props.icon className="absolute size-5 top-2/4 bottom-2/4 my-auto mx-3 text-gray-600" /> }
                <input className="appearance-none border border-gray-400 rounded-lg pl-12 w-full h-11" type={props.type} placeholder={props.placeholder} />
                {props.type === 'number' && 
                    <div className="ml-2 flex flex-col justify-center items-center">
                        <button className={`${btnClasses} bg-primary-80`} >+</button>
                        <button className={`${btnClasses} bg-primary-30`}>-</button>
                    </div>
                }
            </div>
        </div>
    );
}

function CTA({ className }) {
    return (
        <section className={className}>
            <div className="bg-white opacity-80 lg:opacity-100 w-fit px-5 py-2 font-medium text-lg rounded-tl-2xl rounded-tr-2xl border-gray-400 border-l border-t border-r">Calculez votre revenu garanti</div>
            <div className="bg-white opacity-80 flex-wrap lg:opacity-100 h-fit flex justify-between items-center rounded-2xl rounded-tl-none border-gray-400 border-solid border-b border-x p-5">
                <Input type="text" icon={IoLocationOutline} label="Localisation" placeholder="Où habitez-vous ?" className="w-80" />
                {/* <div className="border-l border-gray-400 h-20 mx-5"></div> */}
                <Input type="number" icon={LiaDoorOpenSolid} label="Chambre(s)" placeholder="0" className="w-48 border-gray-400 lg:border-solid lg:border-l lg:border-r" />
                {/* <div className="border-l border-gray-400 h-20 mx-5"></div> */}
                <Input type="number" icon={IoPersonOutline} label="Capacité d'accueil" placeholder="0" className="w-56" />
                <div className="flex flex-col">
                    <button className="bg-secondary text-white px-5 py-1 rounded-3xl ">Calculer</button>
                    {/* <button className="rounded-3xl border border-text mt-2">Voir plus</button> */}
                </div>
            </div>
        </section>
    );
}

export default function Hero() {
    const [cid, setCid] = useState(0)
    const choices = ['voyager', "t'épanouir", "profiter"];
    useEffect(() => {
        const id = setInterval(() => setCid((oldCount) => {
            if (oldCount === choices.length - 1) {
                return 0
            }
            else {
                return oldCount + 1
            }
        }), 1500);
        return () => {
          clearInterval(id);
        };
      }, [])
    return (
    <div className="relative flex justify-center h-screen">
        <img src="/images/general-landing/hero.jpeg" alt="Image principale" className="h-[95vh] w-screen object-cover" />
        <div className="absolute flex flex-col justify-end lg:justify-center inset-0 bg-gradient-to-b from-primary to-transparent px-5 lg:px-20 text-white">
          <h1 className="text-4xl leading-[3rem] lg:leading-[6rem] lg:text-[4.5rem]">TAKE MY KEYS te permettra <br />de <strong className="bg-secondary px-2 pb-2 transition ease-linear">{choices[cid]}</strong></h1>
          <h2 className="text-2xl font-light">Tout en payant ton loyer durant ton absence... et bien plus encore</h2>
          <CTA className="text-text my-20 lg:my-0 w-fit lg:mx-auto lg:left-0 lg:right-0 lg:absolute lg:bottom-0 lg:h-36" />
        </div>
      </div>
    )
}