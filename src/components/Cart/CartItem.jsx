import { useContext } from "react";
import { formatCurrency } from "../../utils/helpers";
import CartContext from "../../context/CartContext";

const CartItem = ({ item }) => {
  const { increaseItemQuantity, decreaseItemQuantity } =
    useContext(CartContext);

  const { id, name, itemQuantity, price } = item;

  return (
    <li className="cart__item">
      <h4>{name}</h4>
      <p className="cart__item--info">
        <span className="cart__item--quantity">+ {itemQuantity}</span>
        <span className="cart__item--price">{formatCurrency(price)}</span>
      </p>
      <div className="cart__item--actions">
        <button
          className="btn btn-operation"
          onClick={() => decreaseItemQuantity(id)}
        >
          &minus;
        </button>
        <span>{itemQuantity}</span>
        <button
          className="btn btn-operation"
          onClick={() => increaseItemQuantity(id)}
        >
          &#x2b;
        </button>
      </div>
    </li>
  );
};

export default CartItem;
