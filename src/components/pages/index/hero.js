import _Hero from "@/components/reusable/hero";
import { useState, useEffect } from "react";
import heroImg from "../../../../public/images/general-landing/hero.png";
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
    <_Hero bgImg={heroImg}>
      <h1 className="!text-4xl lg:!text-5xl !font-bold">
        Besoin d&apos;argent pour
      </h1>
      <h1 id="cidTextWrap">
        <strong
          id="cidText"
          className="bg-secondary !text-white !text-4xl lg:!text-5xl"
        >
          {choices[cid]} ?
        </strong>
      </h1>
      <h2 className="!text-3xl lg:!text-4xl !font-bold">
        TAKE MY KEYS a la solution !
      </h2>
    </_Hero>
  );
}
