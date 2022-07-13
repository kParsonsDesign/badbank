import React from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import BadBank from './bank';
import './style.css';
// import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BadBank />
  </React.StrictMode>
);
