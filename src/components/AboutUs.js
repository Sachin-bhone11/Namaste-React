import UserClass from "./UserClass";

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>AboutUs Page</h1>
      <h3> This is namaste react course</h3>
      <UserClass
        name={"sachin class"}
        location={"pune class"}
        contact={"sachinbhone7@gmail.com class"}
      />
    </div>
  );
};

export default AboutUs;
