import CTA from "../../reusable/cta";
import { useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Hero() {
  const [cid, setCid] = useState(0);
  const choices = ["rendre visite à la famille", "découvrir de nouveaux pays", "télétravailler depuis la plage"];
  useEffect(() => {
    const id = setInterval(
      () =>
        setCid((oldCount) => {
          if (oldCount === choices.length - 1) {
            return 0;
          } else {
            return oldCount + 1;
          }
        }),
      1900
    );
    return () => {
      clearInterval(id);
    };
  }, [choices.length]);

  useEffect(() => {
    gsap.fromTo(
      "#cidTextWrap",
      {
        opacity: 0.4,
        y: "100px",
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.26,
      }
    );
    gsap.fromTo(
      "#cidText",
      {
        opacity: 0,
        y: "100px",
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
      }
    );
  }, [cid]);

  return (
    <div className="relative flex justify-center h-screen sm:h-[95vh] w-screen">
      <img
        src="/images/general-landing/hero.svg"
        alt="Image principale"
        className="bg-primary object-cover w-full h-full"
      />
      <div className="absolute pt-36 flex flex-col justify-around lg:justify-center inset-0 px-5 lg:px-20 text-white">
        <h1 className="overflow-hidden text-4xl leading-[3rem] lg:leading-[6rem] lg:text-[3.5rem]">
          Besoin d&apos;argent pour{" "}<br />
          
          <span
            className="px-2 bg-secondary pb-2 transition ease-linear font-[700] inline-block"
            id="cidTextWrap"
          >
            <span className="inline-block" id="cidText">
              {choices[cid]} ?
            </span>
          </span>
        </h1>
        <h1 className="text-4xl lg:leading-[6rem] lg:text-[3.5rem]">
          TAKE MY KEYS a la solution !
        </h1>
        <CTA className="text-text mb-5 mt-16 lg:my-0 w-fit lg:mx-auto lg:left-0 lg:right-0 lg:absolute lg:bottom-0 lg:h-36" />
      </div>
    </div>
  );
}
