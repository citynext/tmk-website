import CTA from "../../reusable/cta";
import { useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Hero() {
  const [cid, setCid] = useState(0);
  const choices = [
    "rendre visite à la famille",
    "découvrir de nouveaux pays",
    "télétravailler depuis la plage",
  ];
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
      3000
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
    <>
      <div className="relative h-screen w-screen">
        <img
          src="/images/general-landing/hero.svg"
          alt="Image principale"
          className="bg-primary object-cover w-full h-screen lg:h-[95%]"
        />
        <div className="absolute inset-0 w-full h-full flex flex-col">
          <div className="flex-1 flex flex-col justify-center text-white pt-24 px-4 lg:px-10">
            <h1 className="!text-4xl lg:!text-5xl !font-medium lg:!font-bold">Besoin d&apos;argent pour</h1>
            <h1 id="cidTextWrap"><strong id="cidText" className="bg-secondary !text-white !text-4xl lg:!text-5xl">{choices[cid]} ?</strong></h1>
            <h2 className="!text-3xl lg:!text-4xl !font-medium lg:!font-bold lg:mt-6">
              TAKE MY KEYS a la solution !
            </h2>
          </div>
          <CTA className="mx-4 lg:mx-auto mt-4" />
        </div> 
      </div>
    </>
  );
}
