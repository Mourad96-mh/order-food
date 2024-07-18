import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./context/CartContext.jsx";
import { UserProgressProvider } from "./context/UserProgressContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProgressProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </UserProgressProvider>
  </React.StrictMode>
);
