import Image from "next/image";
import _Hero from "@/components/reusable/hero";
import heroImg from "@/../public/images/general-landing/hero.png";
import rectangle from "@/../public/images/general-landing/hero-rectangle.svg";


export default function Hero() {
  return (
    <_Hero bgImg={heroImg}>
        <div className="relative border-8 border-secondary max-w-[60rem] lg:border-none p-8 sm:p-16 flex flex-col justify-center">
            <Image src={rectangle} alt="rectangle" className="absolute left-0 h-full w-fit hidden object-[fit] lg:block" />
            <h1 className="">Locataire ? propriétaire ? Peu importe</h1>
            <h1 className="lg:max-w-[50vw]">TAKE MY KEYS est l&apos;agence qu&apos;il vous faut</h1>
            <p className="!text-white lg:max-w-[50vw]">Confiez-nous votre appartement en toute confiance et recevez vos gains dès maintenant</p>
        </div>
    </_Hero>
  );
}