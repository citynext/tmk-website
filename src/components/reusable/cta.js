import { useEffect, useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { LiaDoorOpenSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";
import { LiaBedSolid } from "react-icons/lia";
import { LiaBathSolid } from "react-icons/lia";
import Button from "../form/button";
import gsap from "gsap";
import {motion} from  'framer-motion'


const Input = ({value, onChange, maxValue, ...props}) => {
    const _max = maxValue;
    const increment = () => {
        if (!value) onChange(1)
        else if (_max && value < _max) onChange(value + 1)
        else if (_max) onChange(_max)
        else onChange(value + 1)
    }

    const decrement = () => {
        if (value > 0) onChange(value - 1)
    }

    const handleChange = (e) => {
        if (_max && e.target.value < _max) onChange(e.target.value)
        else if (_max) onChange(_max)
        else onChange(e.target.value)
    }

    const btnClasses = "flex justify-center items-center rounded-full w-5 h-5 m-[1px] pb-0.5 text-primary line-height-[1.5]";
    return (
        <div className={`flex flex-col px-2 lg:px-8 ${props.className}`}>
            <label className="amine text-lg mb-3">{props.label}</label>
            <div className="flex relative items-center">
                { props.icon && <props.icon className="absolute size-5 top-2/4 bottom-2/4 my-auto mx-3 text-gray-600" /> }
                <input value={value} onChange={handleChange} className="appearance-none border border-gray-400 rounded-lg pl-12 w-full h-11" type={props.type} placeholder={props.placeholder} />
                {props.type === 'number' && 
                    <div className="ml-2 flex flex-col justify-center items-center">
                        <button onClick={increment} className={`${btnClasses} bg-primary-80`} >+</button>
                        <button onClick={decrement} className={`${btnClasses} bg-primary-30`}>-</button>
                    </div>
                }
            </div>
        </div>
    );
}

export default function CTA({ className }) {
    const [expanded, setExpanded] = useState(false)
    const [location, setLocation] = useState("");
    const [rooms, setRooms] = useState();
    const [capacity, setCapacity] = useState();
    const [beds, setBeds] = useState();
    const [bathrooms, setBathrooms] = useState();

    useEffect(() => {
    gsap.fromTo('#ctaHero',{
        y: '100%',
        opacity:0,
    }, 
    {
        y: 0,
        opacity:1,
        duration: 0.6,
        ease: 'power2.in'
    })
    }, [])
    
    return (
        <motion.section
        initial={{
            opacity: 0,
            y: 150,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
        className={`${className} transform translate-y-[100%]`} id="ctaHero">
            <div className="bg-white opacity-80 lg:opacity-100 w-fit px-5 py-2 font-medium text-lg rounded-tl-2xl rounded-tr-2xl border-gray-400 border-l border-t border-r">Estimez vos revenus</div>
            <div className="bg-white opacity-80 flex-wrap lg:opacity-100 h-fit flex justify-between items-start rounded-2xl rounded-tl-none border-gray-400 border-solid border-b border-x p-5">
                <div className="flex flex-col">
                    <div className="flex flex-wrap">
                        <Input type="text" value={location} onChange={(v) => setLocation(v)} icon={IoLocationOutline} label="Adresse" placeholder="Où habitez-vous ?" className="w-80 lg:pl-0" />
                        <Input type="number" value={rooms} onChange={(v) => setRooms(v)} icon={LiaDoorOpenSolid} label="Chambre(s)" placeholder="0" className="w-48 border-gray-400 lg:border-solid lg:border-l lg:border-r" />
                        <Input type="number" value={capacity} onChange={(v) => setCapacity(v)} icon={IoPersonOutline} label="Capacité d'accueil" placeholder="0" className="w-56" />
                    </div>
                    {expanded &&
                        <div className="flex lg:justify-end mt-5 flex-wrap">
                            <Input type="number" icon={LiaBedSolid} value={beds} onChange={(v) => setBeds(v)} label="Lit(s)" placeholder="0" className="w-48 border-gray-400 lg:border-solid lg:border-l lg:border-r" />
                            <Input type="number" icon={LiaBathSolid} value={bathrooms} onChange={(v) => setBathrooms(v)} label="Salle(s) de bain" placeholder="0" className="w-56" />
                        </div>
                    }
                </div>
                <div className="flex flex-col m-3">
                    <Button>Calculer</Button>
                    <Button outline onClick={() => setExpanded(!expanded)} className="mt-2">{expanded ? "Moins" : "Plus"} d&apos;options</Button>
                </div>
            </div>
        </motion.section>
    );
}
