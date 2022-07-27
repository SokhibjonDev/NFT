import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/nav/Navbar";
import Header from "./components/header/Header";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <Navbar />
      <Header />
    </div>
  </React.StrictMode>
);