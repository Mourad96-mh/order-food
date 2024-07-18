import { useState } from "react";

const useInput = (defaultValue = "", validator) => {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [isEdited, setIsEdited] = useState(false);

  const isError = isEdited && !validator(enteredValue);

  const inputChangeHandler = (value) => {
    // console.log(value);
    setEnteredValue(value);
  };

  const blurHandler = () => {
    setIsEdited(true);
  };

  return {
    enteredValue,
    isError,
    inputChangeHandler,
    blurHandler,
  };
};

export default useInput;
