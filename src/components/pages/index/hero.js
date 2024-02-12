import CTA from "../../form/cta";
import { useState, useEffect } from "react";
import Image from "next/image";


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
      }, [choices.length])
    return (
    <div className="relative flex justify-center h-screen sm:h-[95vh] w-screen">
        <Image src="/images/general-landing/hero.svg" alt="Image principale" fill objectFit="cover" className="bg-primary" />
        <div className="absolute flex flex-col justify-end lg:justify-center inset-0 px-5 lg:px-20 text-white">
          <h1 className="text-4xl leading-[3rem] lg:leading-[6rem] lg:text-[4.5rem]">TAKE MY KEYS te permettra <br />de <strong className="bg-secondary px-2 pb-2 transition ease-linear">{choices[cid]}</strong></h1>
          <h2 className="text-2xl font-light">Tout en payant ton loyer durant ton absence... et bien plus encore</h2>
          <CTA className="text-text my-10 lg:my-0 w-fit lg:mx-auto lg:left-0 lg:right-0 lg:absolute lg:bottom-0 lg:h-36" />
        </div>
      </div>
    )
}