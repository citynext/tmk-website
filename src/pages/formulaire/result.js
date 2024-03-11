import hair1 from "@/../public/images/backgrounds/hair1.svg"
import hair2 from "@/../public/images/backgrounds/hair2.svg"
import happy from "@/../public/images/happy-woman.svg"
import Image from "next/image";
import Link from "next/link";


export default function Result() {
  return (
    
    <main className="relative flex flex-col items-center justify-end w-full gap-4 h-screen bg-third bg-opacity-30 px-4">
      <Image src={hair1} alt="Background Image" className="absolute top-0 left-0 -z-[50]" />
      <Image src={hair2} alt="Background Image" className="absolute bottom-0 right-0 -z-[50]" />
      <h1 className="text-center text-xl lg:text-3xl font-semibold max-w-[30rem]">Félicitations ! Votre estimation de prix est prête</h1>
      <p className="text-center text lg:text-lg my-6">Gagner jusqu&apos;à</p>
      <div className="flex items-center gap-4">
        <div className="w-10 h-1 bg-primary"></div>
        <h2 className="text-secondary text-center text-3xl lg:text-5xl font-semibold">1458€</h2>
        <div className="w-10 h-1 bg-primary"></div>
      </div>
      <div className="flex flex-col items-center lg:mt-10">
        <Link href="https://calendly.com/citynext-sas/30min">
          <button className="bg-secondary w-fit text-white rounded-full py-3 px-10 hover:underline z-10">Préparez votre départ</button>
        </Link>
        <Image src={happy} alt="happy woman raising hands" className="max-h-[50vh]" />
      </div>
    </main>
  )
}

Result.getLayout = function getLayout(page) {
  return page;
};