import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AuthProvider from "./lib/useAuth";
import Main from "./Main";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <Main />
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
