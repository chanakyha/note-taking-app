import React from "react";
import { GrGoogle } from "react-icons/gr";
import { useAuth } from "./lib/useAuth";

const Login = () => {
  const { onSignin } = useAuth();
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="card w-96 bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Login with Google to Continue!</h2>
          <div className="card-actions justify-end">
            <button
              onClick={onSignin}
              className="btn btn-primary flex items-center space-x-2"
            >
              <GrGoogle />
              <p>Login</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
