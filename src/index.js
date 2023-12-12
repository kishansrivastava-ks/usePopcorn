import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StartRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

    {/* <StartRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StartRating
      maxRating={5}
      size={24}
      color="red"
      className="test"
      deafultRating={3}
    /> */}
  </React.StrictMode>
);
