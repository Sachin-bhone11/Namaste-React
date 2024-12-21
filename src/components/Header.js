import { useContext, useState } from "react";
import { LOGO_URL } from "../utills/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utills/useOnlineStatus";
import UserContext from "../utills/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  const handleChangeBtn = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };

  // Subscrbing to the store using a Selector
  const cartItems = useSelector((state) => state.cart.items);

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
          <li className="px-2 font-bold ">
            <Link to={"/cart"}>Cart {cartItems?.length}</Link>
          </li>
          <button
            className="bg-black px-4 py-1 text-white"
            onClick={handleChangeBtn}
          >
            {btnName}
          </button>
          <li className="px-2">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
