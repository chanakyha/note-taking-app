import React from "react";
import { useAuth } from "../lib/useAuth";

const Avatar = ({ className }) => {
  const { onSignout } = useAuth();
  return (
    <div onClick={onSignout} className={"avatar " + className}>
      <div className="w-12 rounded-full border-2">
        <img src="https://placeimg.com/192/192/people" />
      </div>
    </div>
  );
};

export default Avatar;
