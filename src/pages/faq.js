import { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li
      className="bg-white shadow-md rounded-lg p-4 transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-base lg:text-lg font-semibold">{question}</h2>
        <button className="text-primary font-semibold">
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen && <p className="text-sm lg:text-base mt-4">{answer}</p>}
    </li>
  );
};

export default function Faq({ data }) {
  return (
    <main className="px-4 lg:px-12 pt-32">
      <div className="">
        <h1 className="text-2xl lg:text-4xl font-bold text-center">
          Foire aux questions
        </h1>
        <ul className="mx-auto max-w-[60rem] grid grid-cols-1 gap-4 mt-8">
          {data.map((faq, index) => (
            <FaqItem key={index} {...faq} />
          ))}
        </ul>
      </div>
    </main>
  );
}

Faq.navColor = "bg-primary";

export const getStaticProps = async () => {
  const res = await fetch(process.env.PRIVATE_API_URL + "/faq/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch posts, received status ${res.status}`);
  }
  const faq = await res.json();
  return {
    props: {
      navColor: Faq.navColor,
      data: faq,
    },
    revalidate: 300,
  };
};
