import { useState } from "react";

const useHttp = (url, config = {}) => {
  const [httpError, setHttpError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const sendHttpRequest = async (data) => {
    try {
      setIsLoading(true);
      setHttpError(null);

      let response;
      if (!config.method) {
        response = await fetch(url);
      } else {
        response = await fetch(url, { ...config, body: JSON.stringify(data) });
      }
      const resData = await response.json();
      if (!response.ok) {
        throw new Error(
          resData.message || "Something went wrong While sending http request"
        );
      }
      setData(resData);
    } catch (err) {
      setHttpError(err.message);
    }
    setIsLoading(false);
  };

  //   sendHttpRequest();

  return { isLoading, httpError, data, sendHttpRequest };
};

export default useHttp;
