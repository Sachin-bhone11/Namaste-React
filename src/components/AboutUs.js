import { useContext } from "react";
import UserClass from "./UserClass";
import UserContext from "../utills/userContext";

const AboutUs = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="about-container">
      <h1>AboutUs Page</h1>
      <h3> This is namaste react course</h3>
      <div className="font-bold">{loggedInUser}</div>
      <UserClass
        name={"sachin class"}
        location={"pune class"}
        contact={"sachinbhone7@gmail.com class"}
      />
    </div>
  );
};

export default AboutUs;
