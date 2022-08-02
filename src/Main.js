import React from "react";
import { Toaster } from "react-hot-toast";
import App from "./App";
import { useAuth } from "./lib/useAuth";
import Login from "./Login";

const Main = () => {
  const { user } = useAuth();
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {user ? <App /> : <Login />}
    </>
  );
};

export default Main;
