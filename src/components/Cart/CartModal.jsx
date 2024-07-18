import { useContext } from "react";
import CartContext from "../../context/CartContext";

import CartItem from "./CartItem";
import { formatCurrency } from "../../utils/helpers";
import EmptyCart from "./EmptyCart";
import UserProgressContext from "../../context/UserProgressContext";

const CartModal = ({ onClose }) => {
  const { cartItems } = useContext(CartContext);
  const { showCheckout, hideProgress } = useContext(UserProgressContext);
  const totalCartPrice = cartItems.reduce(
    (acc, cur) => acc + cur.totalPrice,
    0
  );

  if (cartItems.length === 0) {
    return <EmptyCart onClose={onClose} />;
  }

  return (
    <div className="cart">
      <h3>Your Cart</h3>
      <ul className="cart__items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <span className="cart-price">
        <strong>{formatCurrency(totalCartPrice)}</strong>
      </span>
      <div className="cart__actions">
        <button className="btn btn-flat" onClick={() => hideProgress()}>
          Close
        </button>
        <button className="btn button" onClick={() => showCheckout("checkout")}>
          Go to Chekout
        </button>
      </div>
    </div>
  );
};

export default CartModal;
