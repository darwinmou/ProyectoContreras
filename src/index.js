// Este archivo se encarga de:
// 1-. Carga librerias y dependencias iniciales (react, etc)
// 2-. Se encarga de conectar un componente de react con el dom

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
