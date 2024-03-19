import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Cta() {
  const initialState = {
    opacity: 0,
    y: 100,
  };
  const inView = {
    opacity: 1,
    y: 0,
  };

  const transit = {
    duration: 0.3,
    ease: "easeInOut",
  };
  return (
    <section className="relative hidden sm:flex justify-center w-[40rem] h-[15rem] md:h-[20rem] lg:w-[70rem] lg:h-[22.5rem] mx-auto my-40">
      <Image
        src="/images/general-landing/cta-img.svg"
        alt="discover image"
        fill
        className="z-[-1]"
      />
      <div className="absolute top-0 bottom-0 right-0 w-full h-full flex flex-col justify-center items-start max-w-96 mx-10">
        <motion.p
          initial={initialState}
          whileInView={inView}
          transition={{ ...transit }}
          viewport={{ once: true }}
          className="!text-white text-xl lg:text-3xl"
        >
          Convaincu(e) ?
        </motion.p>
        <p className="!text-white text-xl lg:text-2xl mt-2">
          Commencez l&apos;aventure avec{" "}
          <strong className="text-secondary">TAKE MY KEYS</strong>
        </p>
        <Link href="/form">
          <motion.button
            initial={initialState}
            whileInView={inView}
            transition={{ ...transit, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-secondary !text-white rounded-3xl lg:text-xl px-5 py-1 lg:px-10 lg:py-3 mt-5"
          >
            Démarrer la simulation
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
