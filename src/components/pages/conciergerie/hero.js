import _Hero from "@/components/reusable/hero";
import Image from "next/image";
import heroImg from "@/../public/images/conciergerie/hero.png";
import rectangle from "@/../public/images/conciergerie/hero-rectangle.svg";

export default function Hero() {
  return (
    <_Hero bgImg={heroImg}>
      <div className="flex flex-col gap-4 border-8 border-secondary lg:border-none relative h-fit py-10 lg:py-20 pl-5 lg:pl-10">
        <Image
          src={rectangle}
          alt="Conciergerie"
          className="hidden lg:block absolute left-0 top-0 h-full object-[fit]"
        />
        <h1 className="">
          Votre propriété a du potentiel !
        </h1>
        <h2 className="max-w-[60rem]">
          Take my Keys la conciergerie spécialisée en location saisonnière simple et sécurisée
        </h2>
        <p className="!text-white !text-md lg:!text-xl">
          Découvrez combien vous pouvez gagner avec Take my Keys
        </p>
      </div>
    </_Hero>
  );
}
