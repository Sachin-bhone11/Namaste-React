import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1> Namaste react with JSX</h1>;

const Heading = () => (
  <div id="container">
    <Title />
    <h1>Functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
