import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export const UserProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState("");

  const showCart = () => {
    setProgress("cart");
  };


  const showCheckout = () => {
    setProgress("checkout");
  };


  const hideProgress = ()=> {
    setProgress("");
  }

  return (
    <UserProgressContext.Provider
      value={{ progress, showCart,  showCheckout, hideProgress }}
    >
      {children}
    </UserProgressContext.Provider>
  );
};

export default UserProgressContext;
