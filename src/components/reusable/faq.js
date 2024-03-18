import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/form/button";


export default function Faq({data, title, className, ...props}) {
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

  const [expanded, setExpanded] = useState(data.map((q) => false));
  const toggle = (i) => {
    let newExpanded = [...expanded];
    newExpanded[i] = !newExpanded[i];
    setExpanded(newExpanded);
  };

  return (
    <section className={`lg:py-12 px-4 ${className}`} {...props}>
        <h1 className="text-center !mb-8 lg:!mb-16">{title || "Questions fréquentes"}</h1>
        <ul className="flex flex-col justify-center items-stretch max-w-[50rem] mx-auto">
            {data.slice(0, 3).map((q, i) => (
                <motion.li
                initial={initialState}
                whileInView={inView}
                transition={{ ...transit, duration: 0.5 }}
                viewport={{ once: true }}
                key={i}
                className={`transition-all duration-250 ease-in-out bg-white flex flex-col overflow-hidden justify-between items-center my-2 border-2 rounded-lg border-primary`}
              >
                <div className="flex w-full justify-center items-stretch h-16 pl-4">
                  <h2 className={`flex-1 !text-base lg:!text-2xl !my-auto ${expanded[i] ? "" : "line-clamp-2"} overflow-hidden`}>{q.question}</h2>
                  <div>
                    <button
                      className={`${
                        expanded[i] ? "bg-third" : "text-white bg-primary"
                      } transition-all duration-200 ease-in-out size-16 ml-4`}
                      onClick={() => toggle(i)}
                    >
                      {expanded[i] ? "-" : "+"}
                    </button>
                  </div>
                </div>
                <p
                  className={`text-gray-500 mx-12 sm:mx-24 my-5 duration-200 transition-all transform ${
                    expanded[i]
                      ? "translate-y-0 opacity-[1]"
                      : "translate-y-[50px] opacity-0 hidden"
                  }`}
                >
                    {q.answer}
                </p>
            </motion.li>
            ))}
        </ul>
    </section>
  )

  return (
    <section className="mb-60 px-5">
      <div className="flex flex-col mb-10">
        <motion.h1
          initial={initialState}
          whileInView={inView}
          transition={{ ...transit }}
          viewport={{ once: true }}
          className="text-2xl sm:text-4xl font-bold text-center"
        >
          Réponses à vos questions
        </motion.h1>
        {/* <motion.p
          initial={initialState}
          whileInView={inView}
          transition={{ ...transit, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-500 my-5 text-xl text-center"
        >
          Besoin d&apos;aide ?{" "}
          <Link href="/faq" className="text-secondary">
            Posez votre question ici !
          </Link>
        </motion.p> */}
      </div>
      <ul className="flex flex-col justify-center items-stretch max-w-[50rem] mx-auto">
        {data.slice(0,3).map((q, i) => (
          <motion.li
            initial={initialState}
            whileInView={inView}
            transition={{ ...transit, duration: 0.5 }}
            viewport={{ once: true }}
            key={i}
            className={`transition-all duration-250 ease-in-out bg-white flex flex-col overflow-hidden justify-between items-center my-2 border-2 rounded-lg border-primary`}
          >
            <div className="flex w-full justify-center items-stretch h-16">
              <span className="text-xl rounded-3xl px-5 my-auto">
                {i}.
              </span>
              <h2 className={`flex-1 !text-base lg:!text-2xl !my-auto ${expanded[i] ? "" : "line-clamp-2"} overflow-hidden`}>{q.question}</h2>
              <div>
                <button
                  className={`${
                    expanded[i] ? "bg-third" : "text-white bg-primary"
                  } transition-all duration-200 ease-in-out size-16 ml-4`}
                  onClick={() => toggle(i)}
                >
                  {expanded[i] ? "-" : "+"}
                </button>
              </div>
            </div>
            <p
              className={`text-gray-500 mx-12 sm:mx-24 my-5 duration-200 transition-all transform ${
                expanded[i]
                  ? "translate-y-0 opacity-[1]"
                  : "translate-y-[50px] opacity-0 hidden"
              }`}
            >
              {q.answer}
            </p>
          </motion.li>
        ))}
      </ul>
      {/* <div className="flex justify-center mt-10">
        <Button className="text-3xl !py-2 !px-10 shadow-xl" href="/faq">FAQ</Button>
      </div> */}
    </section>
  );
}
