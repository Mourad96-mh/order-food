import { useContext } from "react";
import { formatCurrency } from "../utils/helpers";
import CartContext from "../context/CartContext";

const PizzaItem = ({ pizza }) => {
  const { addItem } = useContext(CartContext);

  const { id, name, price, description, image } = pizza;

  const addItemHandler = () => {
    const newItem = {
      id,
      name,
      price: Number(price),
      itemQuantity: 1,
      totalPrice: Number(price),
    };
    addItem(newItem);
  };

  return (
    <li className="menu-item">
      <article className="meals-item">
        <img src={`http://localhost:3000/${image}`} alt={name} />
        <div className="meal-info">
          <h2>{name}</h2>
          <span className="pizza-price">{formatCurrency(price)}</span>
          <p className="meal-description">{description}</p>
        </div>
        <div className="meal-action">
          <button className="btn button" onClick={addItemHandler}>
            Add to Cart
          </button>
        </div>
      </article>
    </li>
  );
};

export default PizzaItem;
