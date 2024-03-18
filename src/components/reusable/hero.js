import CTA from "@/components/reusable/cta";
import Image from "next/image";

export default function Hero({ children, bgImg, className, quality, ...props }) {
  return (
    <section className={`relative h-screen w-screen ${className}`} {...props}>
      <Image
        src={bgImg}
        placeholder="blur"
        quality={quality || 100}
        alt="Image principale"
        className="object-cover w-full h-full lg:h-[95%]"
      />
      <div className="absolute inset-0 w-full h-full flex flex-col">
        <div className="flex-1 flex flex-col justify-center text-white pt-24 px-4 lg:px-10">
          {children}
        </div>
        <CTA className="mx-4 mb-4 lg:mx-auto mt-4" />
      </div>
    </section>
  );
}
