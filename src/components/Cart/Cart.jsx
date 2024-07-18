import { useContext, useState } from "react";

import CartContext from "../../context/CartContext";
import CartModal from "./CartModal";
import Modal from "../UI/Modal";
import EmptyCart from "./EmptyCart";
import UserProgressContext from "../../context/UserProgressContext";
// import DialogModal from "../UI/DialogModal";

const Cart = () => {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const { cartItems } = useContext(CartContext);

  const { progress, showCart } = useContext(UserProgressContext);

  const totalCartItems = cartItems.reduce(
    (acc, curr) => acc + curr.itemQuantity,
    0
  );

  return (
    <>
      {/* {isOpenCart && <CartModal onClose={setIsOpenCart} />} */}
      {progress === "cart" && (
        <Modal>
          <CartModal />
        </Modal>
      )}

      <nav>
        <button className="btn text-button" onClick={() => showCart()}>
          Cart <span>({totalCartItems})</span>
        </button>
      </nav>
    </>
  );
};

export default Cart;
