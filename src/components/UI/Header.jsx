import logo from "../../assets/logo.jpg";
import Cart from "../Cart/Cart";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo-img" />
      <h1>reactfood</h1>
      {/* <div className="cart">Cart</div> */}
      <Cart />
    </header>
  );
};

export default Header;
