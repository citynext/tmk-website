import { LuShieldCheck } from "react-icons/lu";
import { TbCircleKey } from "react-icons/tb";
import { AiOutlineEuroCircle } from "react-icons/ai";
import { motion } from "framer-motion";

const whys = [
  {
    icon: AiOutlineEuroCircle,
    title: "Générosité",
    description:
      "Nous offrons le meilleur système de rémunération à nos clients. Que vous soyez proprétaires ou locataires, c'est avec Take My Keys que vous allez gagner le plus d'argent.",
    delay: 0,
  },
  {
    icon: LuShieldCheck,
    title: "Fiabilité",
    description:
      "Notre couverture complémentaire exclusive protège votre bien contre d'éventuels dommages causés par les locataires. Elle complète votre assurance habitation, renforçant la fiabilité et la sécuritté communautaire.",
    delay: 0.1,
  },
  {
    icon: TbCircleKey,
    title: "Flexibilité",
    description:
      "Nous vous offrons une flexibilité exceptionnelle. Vous pouvez choisir de louer votre bien pour une courte ou longue durée, ou même de le retirer du marché à tout moment. Vous avez le contrôle.",
    delay: 0.2,
  },
];

const WhyItem = ({ icon, title, description, delay }) => {
  const Icon = icon;
  return (
    <div className="flex flex-col justify-center items-center mx-5 max-w-80">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          ease: "easeIn",
          delay: delay,
        }}
        className="min-w-20 min-h-20 mt-20 mb-5 bg-primary-40 text-primary p-5 rounded-full"
      >
        <Icon className="text-6xl" />
      </motion.div>
      <h2 className="text-3xl font-medium text-center">{title}</h2>
      <p className="mt-5 text-center font-light">{description}</p>
    </div>
  );
};

export default function Why() {
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
    <section className="flex flex-col justify-center items-center md:py-10">
      <div className="mx-5 sm:mx-10 mt-10 max-w-[60rem]">
        <motion.h2
          initial={initialState}
          whileInView={inView}
          transition={{ ...transit }}
          viewport={{ once: true }}
          className="text-center text-2xl sm:text-4xl font-medium mb-4"
        >
          Pourquoi choisir{" "}
          <strong className="text-secondary">TAKE MY KEYS</strong> ?
        </motion.h2>
        <motion.p
          initial={initialState}
          whileInView={inView}
          transition={{ ...transit, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-500 text-xl sm:text-2xl font-light text-center"
        >
          Maximisez vos gains, assurez la tranquilité d&apos;esprit, et
          bénéficiez d&apos;une flexibilité exceptionnelle avec nous.
        </motion.p>
      </div>
      <ul className="flex flex-wrap w-full justify-around lg:px-24">
        {whys.map((why, index) => (
          <li key={index}>
            <WhyItem {...why} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export { whys };
