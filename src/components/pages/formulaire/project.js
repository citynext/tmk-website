import { useState } from "react";
import {
  TextInput,
  LabelInput,
  ToggleButton,
  NumberInput,
} from "@/components/form/inputs";
import { FaCity } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa6";
import { Select } from "@/components/form/inputs";
import { useSearchParams } from "next/navigation";

const roomsOptions = [
  { value: "1", label: "Studio" },
  { value: "2", label: "2 pièce" },
  { value: "3", label: "3 pièces" },
  { value: "4", label: "4 pièces" },
  { value: "5", label: "5 pièces" },
  { value: "6", label: "Plus de 6 pièces" },
]

const categoryOptions = [
  { value: "primary", label: "Résidence principale" },
  { value: "secondary", label: "Résidence secondaire" },
  { value: "other", label: "Autre" },
]

const FormGroup = ({ children, title, className, ...props }) => {
  return (
    <div className={`flex flex-wrap items-end gap-4 my-4 ${className}`} {...props}>
      <h2 className="py-3 text-xl text-text font-medium mb-3 w-full border-b border-b-1 border-b-gray-300">
        {title}
      </h2>
      {children}
    </div>
  );
};

export default function Project({ className, onPrev, onNext, ...props }) {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    address: searchParams.get("address") || "",
    elevator: searchParams.get("elevator") == "true",
    category: searchParams.get("category") || "",
    postalCode: searchParams.get("postalCode") || "",
    city: searchParams.get("city") || "",
    rooms: searchParams.get("rooms") || "",
    area: searchParams.get("area") || "",
    floor: searchParams.get("floor") || "",
    capacity: searchParams.get("capacity") || "",
  });

  const handleChange = (e) => {
    if (e.target.type === "checkbox")
      setFormData({ ...formData, [e.target.name]: e.target.checked });
    else setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData)

  return (
    <div className={`flex flex-col items-center ${className}`} {...props}>
      <h1 className="w-fit text-2xl text-center font-semibold my-6">
        Votre logement
      </h1>
      <form
        onSubmit={(e) => {
          onNext(formData);
          e.preventDefault();
        }}
        className="max-w-[50rem] w-full"
      >
        <FormGroup title="Adresse" className="w-full mb-6">
          <TextInput
            required
            value={formData.address}
            onChange={handleChange}
            name="address"
            type="address"
            className="w-full"
            icon={FaMapMarkedAlt}
            onSuggestionClick={(suggestion) => {
              setFormData({
                ...formData,
                address: suggestion.address.freeformAddress,
                postalCode: suggestion.address.postalCode,
                city: suggestion.address.municipality,
              });
            }}
            placeholder="Adresse postale"
          />
          <TextInput
            required
            className="flex-1"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            icon={FaMapPin}
            placeholder="Code postal"
          />
          <TextInput
            required
            value={formData.city}
            onChange={handleChange}
            name="city"
            className="flex-1"
            icon={FaCity}
            placeholder="Ville"
          />
        </FormGroup>
        <FormGroup title="Le logement" className="w-full mb-6">
          {searchParams.get("owner") === 'true' && 
            <LabelInput label="Catégorie" className="flex-1 min-w-[40%]">
              <Select
                value={formData.category}
                onChange={handleChange}
                name="category"
                options={categoryOptions}
                className="w-full"
              />
            </LabelInput>
          }
          {searchParams.get("owner") === 'false' &&
            <LabelInput label="Loyer Mensuel (Charges comprises)" className="flex-1 min-w-[40%]">
              <TextInput
                required
                value={formData.monthlyRent}
                onChange={handleChange}
                name="monthlyRent"
                className="w-full"
                unit="€"
                placeholder="0"
              />
            </LabelInput>
          }
          <LabelInput label="Type" className="flex-1 min-w-[40%]">
            <Select
              required
              value={formData.rooms}
              onChange={handleChange}
              name="rooms"
              options={roomsOptions}
              className="w-full"
            />
          </LabelInput>
          <LabelInput label="Surface" className="flex-1 min-w-[40%]">
            <TextInput
              required
              type="number"
              value={formData.area}
              onChange={handleChange}
              name="area"
              className="flex-1 min-w-[40%]"
              unit="m2"
              placeholder="0"
            />
          </LabelInput>
          <LabelInput label="Etage" className="flex-1 min-w-[40%]">
            <TextInput
              required
              type="number"
              value={formData.floor}
              onChange={handleChange}
              name="floor"
              className="flex-1 min-w-[40%]"
              placeholder="0"
            />
          </LabelInput>
          <LabelInput label="Capacité" className="flex-1 min-w-[40%]">
            <NumberInput
              required
              value={formData.capacity}
              maxValue={10}
              onChange={handleChange}
              name="capacity"
              className="flex-1 min-w-[40%]"
              placeholder="0"
            />
          </LabelInput>
          <LabelInput label="Ascenseur" className="flex-1 min-w-[40%]">
            <ToggleButton
              checked={formData.elevator}
              onChange={handleChange}
              name="elevator"
            />
          </LabelInput>
        </FormGroup>
        <div className="w-full flex justify-between">
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
