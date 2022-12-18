// import React from "react";
// import { useContext } from "react";
// import { AppContext } from "../../utils/context/AppContext";
import Icons from "../atoms/Icons";
import SetNotificationCount from "./SetNotificationCount";

const BurgerButton = ({ isBurger, handleClick }) => {
  // const { burgerOptions } = useContext(AppContext);
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${isBurger ? "x" : "burger"} btn-icons`}
      aria-controls="primary-navigation"
      aria-expanded={isBurger === "x"}
      aria-label="menu">
      <Icons name={isBurger ? "x" : "burger"} size="2x" />
      <SetNotificationCount count={isBurger.notification} />
    </button>
  );
};

export default BurgerButton;
