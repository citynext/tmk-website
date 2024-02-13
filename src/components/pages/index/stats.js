import { BiSolidHappyHeartEyes } from "react-icons/bi";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";
import Image from "next/image";
import { motion } from "framer-motion";

const StatItem = ({ icon, kpi, text }) => {
  const _icon = icon;
  return (
    <div className="flex flex-col justify-end items-center">
      <div className="flex items-center mb-1">
        <_icon className="text-secondary text-5xl" />
        <span className="text-white text-3xl sm:text-6xl font-bold italic ml-3">
          {kpi}
        </span>
      </div>
      <label className="text-white text-center text-xl sm:text-2xl font-light">
        {text}
      </label>
    </div>
  );
};

export default function Stats() {
  const className = {
    li: "flex-1 scale-75 md:scale-100",
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
    duration: 0.34,
    ease: "easeInOut",
  };


  return (
    <section className="relative w-screen h-48">
      <Image
        src="images/general-landing/stats-bg.svg"
        alt="stats bg"
        fill
        objectFit="cover"
        className="z-[-1] object-cover"
      />
      <div className="absolute top-0 px-0 md:px-20 left-0 w-full h-full flex justify-center">
        <ul className="flex justify-around items-center w-full max-w-[80rem]">
          <motion.li
            className={className.li}
            initial={initialState}
            whileInView={inView}
            transition={transit}
          >
            <StatItem
              icon={BiSolidHappyHeartEyes}
              kpi="97%"
              text="Satisfaction client"
            />
          </motion.li>
          <motion.li
            className={className.li}
            initial={initialState}
            whileInView={inView}
            transition={{ ...transit, delay: 0.3 }}
          >
            <StatItem icon={BsPeopleFill} kpi="200+" text="Membres" />
          </motion.li>
          <motion.li
            className={className.li}
            initial={initialState}
            whileInView={inView}
            transition={{ ...transit, delay: 0.6 }}
          >
            <StatItem icon={FaHeartCirclePlus} kpi="0" text="Stress" />
          </motion.li>
        </ul>
      </div>
    </section>
  );
}
