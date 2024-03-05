import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { FaCheck } from "react-icons/fa6";
import Type from "@/components/pages/formulaire/type";
import Info from "@/components/pages/formulaire/info";
import Project from "@/components/pages/formulaire/project";
import { useRouter } from "next/navigation";

const steps = [Type, Project, Info];

const Formulaire = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  let step = searchParams.get("step");
  if (!step || step < 1 || step > steps.length) {
    step = 1;
  }
  step = parseInt(step);

  const callback = (additionnalParams) => {
    let query = {};
    for (const [key, value] of searchParams.entries()) {
      query[key] = value;
    }

    router?.push({
      pathname: `/formulaire`,
      query: {
        ...query,
        step: step + 1,
        ...additionnalParams,
      },
    }, undefined, { shallow: true });
  };

  return (
    <main className="w-full h-screen bg-gray-50 pt-16">
      <div className="relative flex justify-between mx-auto max-w-[50rem] w-[90%]">
        <div className="absolute border border-primary w-full top-6"></div>
        {steps.map((_, i) => (
          <div
            key={i}
            className={`z-10 flex justify-center items-center size-12 text-xl ${
              i + 1 === step ? "bg-primary text-white" : "bg-white text-primary"
            } rounded-full border-2 border-primary`}
          >
            {i + 1 < step ? <FaCheck /> : i + 1}
          </div>
        ))}
      </div>
      {steps[step - 1]({ className: "my-16", callback })}
    </main>
  );
};

Formulaire.getLayout = function getLayout(page) {
  return page;
};

export default Formulaire;
