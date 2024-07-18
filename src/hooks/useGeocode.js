import { useState } from "react";

const useGeocode = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [position, setPosition] = useState(null);

  const fetchLocation = async (street, postalCode, city) => {
    try {
      setIsLoading(true);
      setError(null);
      const address = `${street}, ${postalCode}, ${city}`;
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          address
        )}`
      );
      const resData = await res.json();
      if (!res.ok) {
        throw new Error("Something went wrong while fetching position");
      }
      if (resData.length > 0) {
        const { lat, lon } = resData[0];
        setPosition({ lat, lon });
      } else {
        setPosition(null);
        throw new Error(
          "There No position with your provided informations about your location"
        );
      }
    } catch (e) {
      setError(e.message);
    }
    setIsLoading(false);
  };

  return { isLoading, error, position, fetchLocation };
};

export default useGeocode;

// nor our custom hook is already to use
