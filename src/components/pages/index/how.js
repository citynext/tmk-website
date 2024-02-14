"use client";

import { useEffect, useState } from "react";
import {
  HiOutlineArrowSmallLeft,
  HiOutlineArrowSmallRight,
} from "react-icons/hi2";
import Image from "next/image";
import gsap from "gsap";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Estimez vos revenus",
    description:
      "Décrivez-nous votre logement, sa localisation, sa capacité d’accueil, ses petits plus pour recevoir votre estimation.",
    image: "/images/general-landing/how1.svg",
  },
  {
    title: "Confiez-nous votre logement",
    description:
      "Nous nous occupons de tout : de la mise en ligne de votre annonce à l’accueil de vos voyageurs.",
    image: "/images/general-landing/how2.svg",
  },
  {
    title: "Encaissez votre loyer chaque mois",
    description:
      "Profitez de votre temps libre, nous nous occupons de tout pour vous garantir un revenu régulier.",
    image: "/images/general-landing/how3.svg",
  },
];

const StepCard = ({ step, title, description, className }) => {
  return (
    <div
      className={`flex items-center p-5 bg-white border border-gray-400 rounded-xl h-32 w-[28rem] ${className}`}
    >
      <label
        id="stepLabel"
        className="flex justify-center items-center text-lg bg-secondary text-white rounded-[50%] min-h-10 min-w-10"
      >
        {step}
      </label>
      <div className="ml-5">
        <h2 className="text-xl mb-2">{title}</h2>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default function How() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep === steps.length - 1) {
      // setCurrentStep(0);
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep === 0) {
      // setCurrentStep(steps.length - 1);
      return;
    }
    setCurrentStep(currentStep - 1);
  };

  const getNextStep = () => {
    if (currentStep === steps.length - 1) {
      return 0;
    }
    return currentStep + 1;
  };

  const getPrevStep = () => {
    if (currentStep === 0) {
      return steps.length - 1;
    }
    return currentStep - 1;
  };

  const className = {
    arrow: "text-3xl bg-text text-white rounded-full p-3 m-4",
    inactiveArrow: "opacity-30 cursor-not-allowed",
    image: "m-5 rounded-2xl object-cover min-w-96",
  };

  useEffect(() => {
    gsap.fromTo(
      "#firstSlide",
      {
        x: steps.length <= currentStep ? -200 : 200,
      },
      {
        x: 0,
        duration: 0.5,
        ease: "power.inOut",
      }
    );
    gsap.fromTo(
      "#lastSlide",
      {
        x: steps.length <= currentStep ? 200 : -200,
      },
      {
        x: 0,
        duration: 0.5,
        ease: "power1.inOut",
      }
    );
    gsap.fromTo(
      "#currentSlide",
      {
        x: steps.length < currentStep ? 200 : -200,
      },
      {
        x: 0,
        duration: 0.5,
        ease: "power.in",
      }
    );
    gsap.fromTo(
      "#currentSlideText",
      {
        scale: 0,
        x: steps.length < currentStep ? -200 : 200,
      },
      {
        scale: 1,
        x: 0,
        duration: 0.3,
        delay: 0.2,
        ease: "power.in",
      }
    );
    gsap.fromTo(
      "#nextSlideText",
      {
        x: steps.length < currentStep ? -200 : 200,
      },
      {
        x: 0,
        duration: 0.4,
        ease: "power.inOut",
      }
    );
    gsap.fromTo(
      "#stepLabel",
      {
        scale: 0,
      },
      {
        scale: 1,
        duration: 0.2,
        delay: 0.4,
        ease: "power.in",
      }
    );
  }, [currentStep]);

  return (
    <section className="flex justify-center items-center lg:py-32">
      <div className="flex flex-col justify-center items-center">
        <motion.h1
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="max-w-[95vw] lg:max-w-[60rem] my-5 text-2xl lg:text-4xl text-center"
        >
          Une démarche simplifiée pour nous confier votre logement
        </motion.h1>
        <div className="">
          <div className="relative">
            <ul className="flex justify-center my-5">
              <li id="firstSlide">
                <Image
                  src={steps[getPrevStep()].image}
                  alt={steps[getPrevStep()].title}
                  width={384}
                  height={0}
                  className={`${className.image} opacity-50 scale-90`}
                />
              </li>
              <li id="currentSlide">
                <Image
                  src={steps[currentStep].image}
                  alt={steps[currentStep].title}
                  width={384}
                  height={0}
                  className={className.image}
                />
              </li>
              <li id="lastSlide">
                <Image
                  src={steps[getNextStep()].image}
                  alt={steps[getNextStep()].title}
                  width={384}
                  height={0}
                  className={`${className.image} opacity-50 scale-90`}
                />
              </li>
            </ul>
            <ul className="flex absolute right-0 left-32 mx-auto md:left-auto scale-75 md:scale-75 lg:scale-100 md:right-20 bottom-20 lg:right-[-5rem] w-[40rem] overflow-hidden">
              {steps.map((step, index) => {
                if (index === currentStep) {
                  return (
                    <li key={index} id="currentSlideText">
                      <StepCard
                        step={index + 1}
                        title={step.title}
                        description={step.description}
                      />
                    </li>
                  );
                } else if (index >= currentStep) {
                  return (
                    <li key={index} id="nextSlideText">
                      <StepCard
                        className="scale-90 opacity-50"
                        step={index + 1}
                        title={step.title}
                        description={step.description}
                      />
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div className="flex justify-center items-center m-4">
            <button
              className={`${className.arrow} ${
                currentStep === 0 ? className.inactiveArrow : ""
              }`}
              onClick={prevStep}
            >
              <HiOutlineArrowSmallLeft />
            </button>
            <button
              className={`${className.arrow} ${
                currentStep === steps.length - 1 ? className.inactiveArrow : ""
              }`}
              onClick={nextStep}
            >
              <HiOutlineArrowSmallRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
