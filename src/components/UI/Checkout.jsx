import { useContext } from "react";

import Modal from "./Modal";
import UserProgressContext from "../../context/UserProgressContext";
import Input from "./Input";
import {
  validateEmail,
  validateFullName,
  isNotEmpty,
  formatCurrency,
} from "../../utils/helpers";
import useInput from "../../hooks/useInput";
import CartContext from "../../context/CartContext";
import ErrorMessage from "./ErrorMessage";
import useHttp from "../../hooks/useHttp";

const configRequest = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const Checkout = () => {
  const { hideProgress } = useContext(UserProgressContext);
  const { cartItems, reset } = useContext(CartContext);

  const {
    isLoading: isSubmitting,
    httpError: submittingError,
    data,
    sendHttpRequest: submittingData,
  } = useHttp("http://localhost:3000/orders", configRequest);
  const totalCartPrice = cartItems.reduce(
    (acc, cur) => acc + cur.totalPrice,
    0
  );

  const {
    enteredValue: fullNameValue,
    isError: fullNameError,
    inputChangeHandler: fullNameChangeHandler,
    blurHandler: fullNameBlurHandler,
  } = useInput("", validateFullName);

  const {
    enteredValue: emailValue,
    isError: emailError,
    inputChangeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
  } = useInput("", validateEmail);

  const {
    enteredValue: postalCodeValue,
    isError: postalCodeError,
    inputChangeHandler: postalChangeHandler,
    blurHandler: postalBlurHandler,
  } = useInput("", isNotEmpty);

  const {
    enteredValue: cityName,
    isError: cityError,
    inputChangeHandler: cityChangeHandler,
    blurHandler: cityBlurHandler,
  } = useInput("", isNotEmpty);

  const {
    enteredValue: streetName,
    isError: streetError,
    inputChangeHandler: streetChangeHandler,
    blurHandler: streetBlurHandler,
  } = useInput("", isNotEmpty);

  const isErrorInForm =
    streetError || fullNameError || emailError || postalCodeError || cityError;
  const isOneFieldEmpty =
    !streetName ||
    !fullNameValue ||
    !emailValue ||
    !cityName ||
    !postalCodeValue;

  const isInvalidForm = isErrorInForm || isOneFieldEmpty;

  const submitHandler = async (event) => {
    event.preventDefault();

    const customer = {
      name: fullNameValue,
      email: emailValue,
      street: streetName,
      city: cityName,
      ["postal-code"]: postalCodeValue,
    };

    submittingData({
      order: {
        customer,
        items: cartItems,
      },
    });
    reset();
  };

  if (submittingError) {
    return (
      <Modal>
        <ErrorMessage message={submittingError} />
      </Modal>
    );
  }

  if (data.message) {
    // console.log(data);
    return (
      <Modal>
        {/* <p className="success">{data.message}</p> */}
        <h2 className="success">Success!</h2>
        <p>Your Order Was submitted successfully.</p>
        <p className="order-text">
          We Will get back to you with more details via email within the next
          few minutes
        </p>
      </Modal>
    );
  }

  return (
    <Modal>
      <div className="checkout">
        <h2>Checkout</h2>
        <p>
          Total Amount: <strong> {formatCurrency(totalCartPrice)}</strong>
        </p>
        <form className="checkout-form" onSubmit={submitHandler}>
          <Input
            className={fullNameError ? "invalid-input" : ""}
            label="Full Name"
            id="name"
            name="name"
            type="text"
            value={fullNameValue}
            onChange={(e) => fullNameChangeHandler(e.target.value)}
            onBlur={fullNameBlurHandler}
            error={fullNameError && "Please Provide a correct full name"}
            required
          />
          <Input
            className={emailError ? "invalid-input" : ""}
            label="E-mail Address"
            id="email"
            name="email"
            type="email"
            value={emailValue}
            onChange={(e) => emailChangeHandler(e.target.value)}
            onBlur={emailBlurHandler}
            error={emailError && "Please Provide a correct email"}
            required
          />
          <Input
            className={streetError ? "invalid-input" : ""}
            label="Street"
            id="street"
            name="street"
            type="text"
            value={streetName}
            onChange={(e) => streetChangeHandler(e.target.value)}
            onBlur={streetBlurHandler}
            error={streetError && "Please Provide a correct street name"}
            required
          />
          <div className="row-control">
            <Input
              className={postalCodeError ? "invalid-input" : ""}
              label="Postal Code"
              id="postalCode"
              name="postalCode"
              type="text"
              value={postalCodeValue}
              onChange={(e) => postalChangeHandler(e.target.value)}
              onBlur={postalBlurHandler}
              error={
                postalCodeError &&
                "Please Provide a correct postal code to your country"
              }
              required
            />
            <Input
              className={cityError ? "invalid-input" : ""}
              label="City"
              id="city"
              name="city"
              type="text"
              value={cityName}
              onChange={(e) => cityChangeHandler(e.target.value)}
              onBlur={cityBlurHandler}
              error={
                cityError && "Please Provide a correct city to your country"
              }
              required
            />
          </div>

          <div className="form__actions">
            <button
              className="btn text-button"
              type="button"
              onClick={() => hideProgress()}
            >
              Close
            </button>
            <button
              className="btn button"
              disabled={isInvalidForm || isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Order"}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default Checkout;
