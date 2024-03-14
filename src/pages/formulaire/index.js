import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { FaCheck } from "react-icons/fa6";
import Type from "@/components/pages/formulaire/type";
import Info from "@/components/pages/formulaire/info";
import Period from "@/components/pages/formulaire/period";
import Project from "@/components/pages/formulaire/project";
import { useRouter } from "next/navigation";
import Image from "next/image";
import hair1 from "@/../public/images/backgrounds/hair1.svg"
import hair2 from "@/../public/images/backgrounds/hair2.svg"


const Formulaire = () => {
  const [errors, setErrors] = useState({});
  const totalSteps = 4;
  const router = useRouter();
  const searchParams = useSearchParams();
  let step = searchParams.get("step");
  if (!step || step < 1 || step > totalSteps.length || !searchParams.get("owner")) {
    step = 1;
  }
  else {
    step = parseInt(step);
  }

  let query = {};
  for (const [key, value] of searchParams.entries()) {
    query[key] = value;
  }
  const onPrev = (additionnalParams) => {
    router?.push({
      pathname: `/formulaire`,
      query: {
        ...query,
        step: step - 1,
        ...additionnalParams,
      },
    });
  }

  const onNext = (additionnalParams) => {
    console.log(additionnalParams);
    router?.push({
      pathname: `/formulaire`,
      query: {
        ...query,
        step: step + 1,
        ...additionnalParams,
      },
    });
  };

  const submitResult = (additionnalParams)  => {
    let input = {...query, ...additionnalParams};
    delete input.step;
    const body = {
      isOwner: input.owner,
      address: input.address,
      postal_code: input.postalCode,
      city: input.city,
      category: input.category,
      rent: parseFloat(input.rent),
      rooms: parseInt(input.rooms),
      area: parseFloat(Intinput.area),
      floor: parseInt(input.floor),
      capacity: input.capacity,
      hasElevator: input.elevator === "true",
      start_date: input.startDate,
      end_date: input.endDate,
      email: input.email,
      first_name: input.firstName,
      last_name: input.lastName,
      phone: input.phone,
    }
    fetch(process.env.NEXT_PUBLIC_API_URL + "/formSubmission/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          router?.push({
            pathname: `/formulaire/result`,
            query: {
              id: data.id,
            },
          });
        });
      }
      else if (response.status === 400) {
        response.json().then((data) => {
          setErrors(data);
          console.error(data)
        })
      }
      else {
        throw new Error("Network response was not ok.");
      }
    }).catch((error) => {
      console.error("There was an error!", error);
    });
  }

  const stepProps = { className: "px-4 py-16", onPrev, onNext }

  return (
    <main className="relative w-full h-screen bg-third bg-opacity-30 pt-10 px-4">
      <Image src={hair1} alt="Background image" className="absolute top-0 left-0 -z-[50]" />
      <Image src={hair2} alt="Background image" className="absolute bottom-0 right-0 -z-[50]" />
      <div className="relative flex justify-between mx-auto max-w-[50rem] w-[90%]">
        <div className="absolute border border-primary w-full top-6"></div>
        { Array.from({length: totalSteps}, (_, i) => (
          <button
            key={i}
            className={`z-10 flex justify-center items-center size-12 text-xl ${
              i + 1 === step ? "bg-primary text-white" : "bg-white text-primary"
            } rounded-full border-2 border-primary`}
          >
            {i + 1 < step ? <FaCheck /> : i + 1}
          </button>
        ))}
      </div>
      { step == 1 && <Type {...stepProps} /> }
      { step == 2 && <Project {...stepProps} /> }
      { step == 3 && <Period {...stepProps} /> }
      { step == 4 && <Info {...stepProps} onNext={submitResult} /> }
      { Object.keys(errors).length > 0 && <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-[red]">Erreur</h2>
          <ul>
            {Object.entries(errors).map(([key, values]) => (
              <li key={key}><p>{key} :</p>{values.map((value, i) => (<p key={i}>{value}</p>))}<br /></li>
            ))}
          </ul>
          <button onClick={() => setErrors({})} className="bg-primary text-white rounded-lg px-4 py-2">Fermer</button>
        </div>
      </div> }
      <div className={`fixed bottom-0 left-0 w-full h-2 flex`}>
        { Array.from({length: totalSteps}, (_, i) => (
          <div key={i} className={`${i < step-1 ? "bg-primary": "bg-transparent"} flex-1 transition transform duration-1000`}></div>
        ))}
      </div>
    </main>
  );
};

Formulaire.getLayout = function getLayout(page) {
  return page;
};

export default Formulaire;
