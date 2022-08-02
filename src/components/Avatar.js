import React from "react";

const Avatar = ({ className }) => {
  return (
    <div className={"avatar " + className}>
      <div className="w-12 rounded-full border-2">
        <img src="https://placeimg.com/192/192/people" />
      </div>
    </div>
  );
};

export default Avatar;
