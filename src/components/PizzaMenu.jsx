import { useEffect } from "react";
import { useState } from "react";

import Error from "./UI/ErrorMessage";
import Loader from "./UI/Loader";
import PizzaItem from "../components/PizzaItem";
import useHttp from "../hooks/useHttp";
import ErrorMessage from "./UI/ErrorMessage";
import Modal from "./UI/Modal";

const PizzaMenu = () => {
  const {
    isLoading: isLoadingMenu,
    httpError: menuError,
    data: meals,
    sendHttpRequest: fetchMeals,
  } = useHttp("http://localhost:3000/meals");

  useEffect(() => {
    fetchMeals();
  }, []);

  if (isLoadingMenu) {
    return <Loader />;
  }

  if (menuError) {
    return (
      <Modal>
        <ErrorMessage message={menuError} />
      </Modal>
    );
  }

  return (
    <ul className="menu-list">
      {meals.map((pizza) => (
        <PizzaItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
};

export default PizzaMenu;
