import React from "react";
import { useAuth } from "../lib/useAuth";

const Avatar = ({ className }) => {
  const { onSignout, user } = useAuth();
  return (
    <div onClick={onSignout} className={"avatar " + className}>
      <div className="w-12 rounded-full border-2">
        <img src={user?.photoURL} />
      </div>
    </div>
  );
};

export default Avatar;
