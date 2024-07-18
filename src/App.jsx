import { useContext } from "react";
import PizzaMenu from "./components/PizzaMenu";
import Checkout from "./components/UI/Checkout";
import Header from "./components/UI/Header";
import UserProgressContext from "./context/UserProgressContext";

function App() {

  const {progress} = useContext(UserProgressContext)

  return (
    <>
      <Header />
      <main>
        <PizzaMenu />
      </main>
      {progress === 'checkout' && <Checkout />}
    </>
  );
}

export default App;
