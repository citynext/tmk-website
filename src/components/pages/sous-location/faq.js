import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import questions from "@/data/index/faq";


export default function Faq() {
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

  const [expanded, setExpanded] = useState(questions.map((q) => false));
  const toggle = (i) => {
    let newExpanded = [...expanded];
    newExpanded[i] = !newExpanded[i];
    setExpanded(newExpanded);
  };
  return (
    <section className="mb-60 px-5">
      <div className="flex flex-col ">
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
        {questions.slice(0, 3).map((q, i) => (
          <motion.li
            initial={initialState}
            whileInView={inView}
            transition={{ ...transit, duration: 0.5, delay: i / 4 }}
            viewport={{ once: true }}
            key={i}
            className={`${
              expanded[i] ? "h-full" : "h-[55px]"
            } transition-all duration-250 ease-in-out bg-white flex flex-col overflow-hidden justify-between items-center my-5 border-2 rounded-lg border-primary`}
          >
            <div className="flex justify-between items-center w-full sm:pl-5">
              {/* <span className=" bg-white text-xl rounded-3xl mx-5 my-3">
                {i}.
              </span> */}
              <h2 className="flex-1 !text-base lg:!text-2xl">{q.question}</h2>
              <button
                className={`${
                  expanded[i] ? "bg-third" : "text-white bg-primary"
                } h-full text-xl px-5 py-3 transition-all duration-200 ease-in-out`}
                onClick={() => toggle(i)}
              >
                {expanded[i] ? "-" : "+"}
              </button>
            </div>
            <p
              className={`text-gray-500 mx-12 sm:mx-24 my-5 duration-200 transition-all transform ${
                expanded[i]
                  ? "translate-y-0 opacity-[1] visible"
                  : "translate-y-[50px] opacity-0 invisible"
              }`}
            >
              {q.answer}
            </p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
