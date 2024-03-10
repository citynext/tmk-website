import { useState, useEffect, useRef } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

export function TextInput({
  type,
  pattern,
  disabled,
  autocomplete,
  className,
  icon,
  placeholder,
  unit,
  name,
  value,
  required,
  onChange,
  onSuggestionClick,
  ...props
}) {
  const [suggestions, setSuggestions] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(true);
  setTimeout(() => setSelectedAddress(false), 1000);

  useEffect(() => {
    if (type === "address") {
      if (!selectedAddress) {
        const timeOutId = setTimeout(() => {
          if (value && value.length > 2) {
            searchAddress(value)
              .then((response) => {
                setSuggestions(response.data.results);
              })
              .catch((error) => {
                console.log(error);
              });
          }
        }, 500);
        return () => clearTimeout(timeOutId);
      }
    }
  }, [value, selectedAddress, type]);

  const _onSuggestionClick = (suggestion) => {
    setSelectedAddress(true);
    onSuggestionClick(suggestion);
    setTimeout(() => setSelectedAddress(false), 1000);
    setSuggestions([]);
  };

  return (
    <div
      className={`h-fit relative items-center border border-1 border-gray-300 rounded-lg ${
        disabled ? "bg-gray-100" : "bg-white"
      } ${className}`}
      {...props}
    >
      {icon &&
        icon({
          size: 20,
          className: `absolute top-0 bottom-0 left-2 my-auto ${
            disabled ? "text-gray-400" : "text-inherit"
          }`,
        })}
      {unit && (
        <span className="absolute top-0 bottom-0 right-2 my-auto text-sm text-gray-400 h-fit">
          {unit}
        </span>
      )}
      <input
        className={`bg-transparent p-2 ${icon ? "pl-10" : "pl-4"} w-full ${
          disabled ? "text-gray-400" : "text-inherit"
        }`}
        type={type}
        required={required}
        pattern={pattern}
        disabled={disabled}
        autoComplete={autocomplete}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      { type === 'address' && suggestions.length > 1 && 
        <ul className='absolute bg-white w-full border z-10'>
            {suggestions.map((suggestion, i) => (
            <li key={i} className="flex gap-2 items-center p-2 cursor-pointer text-primary hover:bg-primary hover:text-white" onClick={() => _onSuggestionClick(suggestion)}>
              <IoLocation className="text-inherit mr-2" />
              {suggestion.address.freeformAddress}
            </li>
            ))}
        </ul>
      }
    </div>
  );
}

export function Select({ className, required, options, ...props }) {
  return (
    <select
      required={required}
      className={`border border-1 border-gray-300 rounded-lg bg-white p-2 ${className}`}
      {...props}
    >
      <option hidden value=""></option>
      {options &&
        options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
    </select>
  );
}

export function ToggleButton({
  className,
  checked,
  onChange,
  name,
  label,
  ...props
}) {
  return (
    <label className={`flex cursor-pointer relative rounded-full ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        name={name}
        className="sr-only peer"
      />
      <div className="w-10 h-6 bg-gray-200 rounded-full p-1 flex peer-checked:justify-end peer-checked:bg-primary">
        <div className="bg-gray-400 size-4 rounded-full"></div>
      </div>
      {label && <span className="ml-2">{label}</span>}
    </label>
  );
}

export function LabelInput({ label, children, className, ...props }) {
  return (
    <div className={`flex flex-col gap-1 ${className}`} {...props}>
      <label className="text-text">{label}</label>
      {children}
    </div>
  );
}

export function NumberInput({ className, required, value, onChange, name, placeholder, maxValue, ...props }) {
  const ref = useRef();
  const _max = parseInt(maxValue);

  const increment = () => {
    const e = {target: ref.current}
    if (!value) e.target.value = 1;
    else if (_max && value < _max) e.target.value = parseInt(value) + 1;
    else if (_max) e.target.value = (_max);
    else e.target.value = parseInt(value) + 1;
    onChange(e)
  };

  const decrement = () => {
    const e = {target: ref.current}
    if (value > 0) e.target.value = value - 1;
    onChange(e);
  };

  const handleChange = (e) => {
    if (_max && e.target.value < _max) onChange(e.target.value);
    else if (_max) onChange(_max);
    else onChange(e.target.value);
  };

  const btnClass =
    "size-8 flex justify-center items-center bg-gray-100 hover:bg-gray-200 rounded-full border border-gray cursor-pointer";
  return (
    <div className={`flex rounded-lg ${className}`} {...props}>
      <button type="button" className={btnClass} onClick={decrement}>
        <FaMinus />
      </button>
      <input
        ref={ref}
        type="number"
        name={name}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={`w-20 text-center bg-transparent`}
      />
      <button type="button" className={btnClass} onClick={increment}>
        <FaPlus />
      </button>
    </div>
  );
}
