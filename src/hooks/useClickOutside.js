import { useEffect, useRef } from "react";

const useClickOutside = (handler) => {
  const ref = useRef();

  useEffect(() => {
    const clickOutsideHandler = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("click", clickOutsideHandler, true);

    return () =>
      document.removeEventListener("click", clickOutsideHandler, true);
  }, []);

  return ref;
};

export default useClickOutside;
