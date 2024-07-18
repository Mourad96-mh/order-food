import { useContext } from "react";
import UserProgressContext from "../../context/UserProgressContext";

const EmptyCart = ({ onClose }) => {
  const { hideProgress } = useContext(UserProgressContext);

  return (
    <div className="cart">
      <h3>Your Cart</h3>
      <p className="fallback-text">
        No items found maybe try to add someone 😊
      </p>
      <div className="cart__actions">
        <button className="btn text-button" onClick={() => hideProgress()}>
          Close
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
