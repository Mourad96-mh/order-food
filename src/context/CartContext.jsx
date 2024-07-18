// {
//   name: "pizza1",
//   id: "p1",
//   price: 12,
//   itemQuantity: 1,
//   totalPrice: 12,
// },

import { useReducer } from "react";
import { createContext } from "react";

const actionTypes = {
  ADD_ITEM: "ADD_ITEM",
  INCREASE_QUANTITY: "INCREASE_QUANTITY",
  DECREASE_QUANTITY: "DECREASE_QUANTITY",
  RESET: "RESET",
};

const initialState = {
  items: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM: {
      const id = action.payload.id;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item.id === id
            ? {
                ...item,
                itemQuantity: item.itemQuantity + 1,
                totalPrice: item.totalPrice + action.payload.price,
              }
            : item
        );
        return { ...state, items: updatedItems };
      } else {
        return { ...state, items: [...state.items, action.payload] };
      }
    }
    case actionTypes.INCREASE_QUANTITY: {
      const id = action.payload;
      const updatedItems = state.items.map((item) =>
        item.id === id
          ? {
              ...item,
              itemQuantity: item.itemQuantity + 1,
              totalPrice: item.totalPrice + item.price,
            }
          : item
      );
      return { ...state, items: updatedItems };
    }
    case actionTypes.DECREASE_QUANTITY: {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.itemQuantity === 1) {
        const updatedItems = state.items.filter((item) => item.id !== id);
        return { ...state, items: updatedItems };
      } else {
        const updatedItems = state.items.map((item) =>
          item.id === id
            ? {
                ...item,
                itemQuantity: item.itemQuantity - 1,
                totalPrice: item.totalPrice - item.price,
              }
            : item
        );
        return { ...state, items: updatedItems };
      }
    }
    case actionTypes.RESET: {
      return { ...state, items: [] };
    }
    default:
      return state;
  }
};

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  increaseItemQuantity: (id) => {},
  decreaseItemQuantity: (id) => {},
  reset: () => {},
});

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (item) => {
    dispatch({ type: actionTypes.ADD_ITEM, payload: item });
  };

  const increaseItemQuantity = (id) => {
    dispatch({ type: actionTypes.INCREASE_QUANTITY, payload: id });
  };

  const decreaseItemQuantity = (id) => {
    dispatch({ type: actionTypes.DECREASE_QUANTITY, payload: id });
  };

  const reset = () => {
    dispatch({ type: actionTypes.RESET });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.items,
        addItem,
        increaseItemQuantity,
        decreaseItemQuantity,
        reset,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
