import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Login from "./Login";

const root = ReactDOM.createRoot(document.getElementById("root"));

const login = false;
root.render(<React.StrictMode>{login ? <App /> : <Login />}</React.StrictMode>);

reportWebVitals();
