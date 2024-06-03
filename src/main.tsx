import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const htmlElement = document.getElementById("root")!;

ReactDOM.createRoot(htmlElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
