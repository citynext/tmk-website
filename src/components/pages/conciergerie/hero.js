import _Hero from "@/components/reusable/hero";
import Image from "next/image";
import heroImg from "../../../../public/images/conciergerie/hero.png";
import rectangle from "../../../../public/images/conciergerie/hero-rectangle.svg";

export default function Hero() {
  return (
    <_Hero bgImg={heroImg}>
      <div className="border-8 border-secondary lg:border-none relative h-fit py-10 lg:py-20 pl-5 lg:pl-10">
        <Image
          src={rectangle}
          alt="Conciergerie"
          className="hidden lg:block absolute left-0 top-0 h-full object-[fit]"
        />
        <h1 className="!text-2xl lg:!text-5xl">
          MAXIMISEZ VOS REVENUS
        </h1>
        <h1 className="!text-2xl lg:!text-5xl">
          Confiez votre propriété à <br />
          <strong>TAKE MY KEYS</strong>
        </h1>
        <p className="!text-white !text-md lg:!text-xl">
          Confiez-nous votre bien immobilier et profitez d&apos;une gestion sans tracas
        </p>
      </div>
    </_Hero>
  );
}
