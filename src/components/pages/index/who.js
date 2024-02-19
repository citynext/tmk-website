import { IoKeyOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import bgImg from "../../../../public/images/general-landing/who-bg.svg";

export default function Who() {
  const className = {
    btn: "flex flex-col justify-center items-center rounded-xl px-10 py-10 m-5 max-w-[32rem]",
  };

  const initialState = {
    opacity: 0,
    y: 100,
  };
  const inView = {
    opacity: 1,
    y: 0,
  };

  const transit = {
    duration: 0.6,
    ease: "easeInOut",
  };
  return (
    <section className="relative mt-32 h-fit">
      <Image
        src={bgImg}
        alt="bg img"
        className="absolute top-40 lg:top-0 left-0 w-full z-[-1]"
      />
      <div className="flex flex-col mx-5">
        <div className="flex flex-col justify-center items-center">
          <motion.h1
            initial={initialState}
            whileInView={inView}
            transition={{ ...transit }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl text-center"
          >
            Curieux d&apos;en apprendre davantage ?
          </motion.h1>
          <motion.p
            initial={initialState}
            whileInView={inView}
            transition={{ ...transit, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-500 my-5 text-xl text-center"
          >
            Nous avons une offre adaptée à vos besoins
          </motion.p>
        </div>
        <div className="flex flex-wrap justify-center items-center my-10">
          <Link href="/sous-location">
            <button
              initial={{ x: -500, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              viewport={{ once: true }}
              className={`${className.btn} text-white bg-secondary`}
            >
              <IoKeyOutline size={80} className="mb-5" />
              <h2 className="text-4xl">Sous-location</h2>
              <p className="!text-white text-xl my-10 font-light">
                Transformez votre logement en source de revenu garantie avec Take My
                Keys
              </p>
              <span className="text-secondary bg-white text-xl rounded-3xl px-5 py-3">
                En savoir plus
              </span>
            </button>
          </Link>
          <Link href="/conciergerie">
            <button
              initial={{ x: 500, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              viewport={{ once: true }}
              className={`${className.btn} bg-white border border-gray-300`}
            >
              <IoHomeOutline size={80} className="text-primary mb-5" />
              <h2 className="text-4xl">Conciergerie</h2>
              <p className="text-xl my-10 font-light">
                Maximisez votre rentabilité et assurez-vous une tranquilité d&apos;esprit avec Take My Keys
              </p>
              <span className="text-white bg-primary text-xl rounded-3xl px-5 py-3">
                En savoir plus
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
