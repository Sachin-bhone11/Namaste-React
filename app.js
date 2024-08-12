import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1> Namaste react with JSX</h1>;

const AppLayout = () => {
  return <div></div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
