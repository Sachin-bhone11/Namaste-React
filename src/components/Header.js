import { useState } from "react";
import { LOGO_URL } from "../utills/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utills/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const handleChangeBtn = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };

  return (
    <div className="flex justify-between bg-pink-100">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 items-center">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-4">
            <Link to={"/cart"}>Cart</Link>
          </li>
          <button
            className="bg-black px-4 py-1 text-white"
            onClick={handleChangeBtn}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
