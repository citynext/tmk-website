export function searchAddress(address) {
    return fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?region=fr&language=fr&types=address&input=${address}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`,
        {  
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Allow-Control-Allow-Origin": "*"
            },
            }

    ).then((response) => response.json());
  }