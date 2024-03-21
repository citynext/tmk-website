import { LuShieldCheck } from "react-icons/lu";
import { TbCircleKey } from "react-icons/tb";
import { AiOutlineEuroCircle } from "react-icons/ai";
import { motion } from "framer-motion";

const whys = [
  {
    icon: AiOutlineEuroCircle,
    title: "Générosité",
    description:
      "Nous offrons le meilleur système de rémunération à nos clients. Que vous soyez proprétaire ou locataire, c'est avec Take My Keys que vous percevrez le plus de revenus.",
    delay: 0,
  },
  {
    icon: LuShieldCheck,
    title: "Fiabilité",
    description:
      "Notre couverture complémentaire protège votre bien contre les éventuels dommages causés par les locataires. Elle complète votre assurance habitation, renforçant la protection de votre logement.",
    delay: 0.1,
  },
  {
    icon: TbCircleKey,
    title: "Flexibilité",
    description:
      "Nous vous offrons une flexibilité exceptionnelle. Vous pouvez choisir de louer votre bien pour une courte ou moyenne durée, ou même de le retirer du marché à tout moment. Vous avez le contrôle.",
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
        className="min-w-20 min-h-20 mb-5 bg-primary-40 text-primary p-5 rounded-full"
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
    <section className="flex flex-col justify-center items-center">
      <div className="mx-5 sm:mx-10 max-w-[60rem]">
        <motion.h1
          initial={initialState}
          whileInView={inView}
          transition={{ ...transit }}
          viewport={{ once: true }}
          className="text-center font-medium"
        >
          Pourquoi choisir{" "}
          <span className="whitespace-nowrap">
            <strong className="text-secondary">TAKE MY KEYS</strong> ?
          </span>
        </motion.h1>
        <motion.p
          initial={initialState}
          whileInView={inView}
          transition={{ ...transit, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-500 text-xl sm:text-2xl font-light text-center"
        >
          Maximisez vos gains, assurez votre tranquilité d&apos;esprit, et
          profitez de notre flexibilité exceptionnelle.
        </motion.p>
      </div>
      <ul className="flex flex-wrap w-full justify-around lg:px-24 gap-10 pt-10 lg:pt-24">
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
