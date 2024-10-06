import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

function Test() {
  return <StarRating color="blue" />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={10} />
    <StarRating maxRating={5} color="red" size={30} />
    <StarRating
      maxRating={5}
      color="blue"
      size={30}
      messages={["Terrible", "Bad", "Average", "Good", "Excellent"]}
    />
    <StarRating maxRating={15} color="green" size={30} defaultRating={10} />

    <Test />
  </React.StrictMode>
);
