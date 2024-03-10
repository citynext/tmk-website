export function searchAddress(address) {
  return fetch(
    `https://api.tomtom.com/search/2/geocode/${address}.json?key=${process.env.NEXT_PUBLIC_TOMTOM_API_KEY}&countrySet=FR&limit=5&language=fr-FR&extendedPostalCodesFor=PAD`
  ).then((response) => response.json());
}