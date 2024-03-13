import Image from "next/image";
import _Hero from "@/components/reusable/hero";
import heroImg from "@/../public/images/sous-location/hero.png";
import rectangle from "@/../public/images/sous-location/hero-rectangle.svg";


export default function Hero() {
  return (
    <_Hero bgImg={heroImg}>
        <div className="relative border-8 border-primary max-w-[60rem] lg:border-none p-8 sm:p-16 flex flex-col justify-center">
            <Image src={rectangle} alt="rectangle" className="absolute left-0 h-full w-fit hidden object-[fit] lg:block" />
            <h1 className="">Locataire ? propriétaire ? Peu importe</h1>
            <h1>TAKE MY KEYS est l&apos;agence qu&apos;il vous faut</h1>
            <p className="!text-white">Confiez-nous votre appartement en toute confiance et commencez à récolter dès maintenant</p>
        </div>
    </_Hero>
  );
}