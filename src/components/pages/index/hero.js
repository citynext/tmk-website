import CTA from "../../reusable/cta";
import { useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Hero() {
  const [cid, setCid] = useState(0);
  const choices = ["voyager", "t'épanouir", "profiter"];
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
      <div className="absolute flex flex-col justify-end lg:justify-center inset-0 px-5 lg:px-20 text-white">
        <h1 className="overflow-hidden text-4xl leading-[3rem] lg:leading-[6rem] lg:text-[4.5rem]">
          TAKE MY KEYS te permettra <br />
          de{" "}
          <span
            className="bg-secondary px-2 pb-2 transition ease-linear font-[700] inline-block"
            id="cidTextWrap"
          >
            <span className="inline-block" id="cidText">
              {choices[cid]}
            </span>
          </span>
        </h1>
        <h2 className="text-2xl font-light">
          Tout en payant ton loyer durant ton absence... et bien plus encore
        </h2>
        <CTA className="text-text my-10 lg:my-0 w-fit lg:mx-auto lg:left-0 lg:right-0 lg:absolute lg:bottom-0 lg:h-36" />
      </div>
    </div>
  );
}
