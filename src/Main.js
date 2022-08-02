import React from "react";
import App from "./App";
import AuthProvider, { useAuth } from "./lib/useAuth";
import Login from "./Login";

const Main = () => {
  const { user } = useAuth();
  return <>{user ? <App /> : <Login />}</>;
};

export default Main;
