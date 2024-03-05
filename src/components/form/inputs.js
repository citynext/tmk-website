import { useState } from "react";

export function Input({
  type,
  pattern,
  disabled,
  autocomplete,
  className,
  icon,
  placeholder,
  name,
  value,
  onChange,
  onSuggestionClick,
  ...props
}) {
    const [suggestions, setSuggestions] = useState([]);
    const [selectedAddress, setSelectedAddress] = useState(true);

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
    }, [value]);

    const _onSuggestionClick = (suggestion) => {
      setSelectedAddress(true);
      onSuggestionClick(suggestion);
      setTimeout(() => setSelectedAddress(false), 1000);
      setSuggestions([]);
    };
  

  return <div className={`${className}`} {...props}>
    {icon && <icon />}
    
  </div>;
}
