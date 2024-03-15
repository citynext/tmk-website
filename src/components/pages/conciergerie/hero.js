import _Hero from "@/components/reusable/hero";
import { useState, useEffect } from "react";
import heroImg from "../../../../public/images/conciergerie/hero.svg";
import gsap from "gsap";

export default function Hero() {
  const [cid, setCid] = useState(0);
  const choices = [
    "optimise vos revenus airbnb",
    "maximise vos taux d'occupation",
    "vous libère des tracas de la Location saisonnière",
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
      <h1 className="!text-4xl lg:!text-5xl uppercase">
        La conciergerie qui
      </h1>
      <h1 id="cidTextWrap" className="!leading-relaxed">
        <strong
          id="cidText"
          className="bg-secondary !text-white !text-4xl lg:!text-5xl uppercase"
        >
          {choices[cid]} ?
        </strong>
      </h1>
      <h2 className="!font-semibold uppercase">
        Votre propriété a du potentiel !
      </h2>
    </_Hero>
  );
}
