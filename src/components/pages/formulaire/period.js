import { ToggleButton } from "@/components/form/inputs";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { useSearchParams } from "next/navigation";

export default function Period({ className, onPrev, onNext, ...props }) {
  const searchParams = useSearchParams();
  const [FormData, setFormData] = useState({
    startDate: searchParams.get("startDate") || null,
    endDate: searchParams.get("endDate") || null,
  });
  const [checked, setChecked] = useState(false);
  const handleFormDataChange = (newFormData) => {
    setFormData(newFormData);
  };

  const handleSubmit = (e) => {
    if (checked) {
        onNext({})
    }
    else {
        onNext(FormData)
    }
    e.preventDefault()
  }
  
  return (
    <div className={`light flex flex-col items-center ${className}`} {...props}>
      <h1 className="w-fit text-2xl text-center font-semibold my-10">
        Détaillez votre projet de mobilité
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full max-w-[50rem] mt-10 lg:mt-20">
        <div>
            <label>Période d&apos;absence</label>
            <div className="mt-2 border border-gray-400 rounded-lg">
                <Datepicker
                required
                disabled={checked}
                value={FormData}
                onChange={handleFormDataChange}
                />
            </div>
        </div>
        <ToggleButton
            checked={checked}
            label="Je ne connais pas mes dates"
            onChange={() => setChecked(!checked)}
        />
        <label>
            <input type="checkbox" className="checked:bg-primary mr-2" required />
            J&apos;accepte les CGU et le traitement de mes données personnelles.
        </label>

        <div className="w-full flex justify-between mt-10">
          <button
            type="button"
            onClick={() => onPrev()}
            className="bg-transparent border rounded-lg py-2 px-6 hover:underline"
          >
            Précédent
          </button>
          <button
            type="submit"
            className="border border-secondary bg-secondary-20 text-secondary rounded-lg py-2 px-10 hover:underline"
          >
            Suivant
          </button>
        </div>
      </form>
    </div>
  );
}