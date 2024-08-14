import { useState } from "react";
import { LOGO_URL } from "../utills/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const handleChangeBtn = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login-btn" onClick={handleChangeBtn}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
