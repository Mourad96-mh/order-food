// import { useState } from "react";

const Input = ({ label, id, onChange, onBlur, error, className, ...props }) => {
  // const [enteredValue, setEnteredValue] = useState("");

  return (
    <div className="control">
      <label htmlFor={id}>{label}</label>
      <input
        className={className}
        id={id}
        name="name"
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Input;
