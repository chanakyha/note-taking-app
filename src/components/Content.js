import React, { useState } from "react";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { MdOutlineInsertPhoto } from "react-icons/md";

const Content = () => {
  const [note, setNote] = useState("");

  const onNoteFocus = () => {};
  return (
    <div className="my-5 mx-20 flex justify-center">
      <div className="border-2 rounded-md border-gray-500 flex items-center justify-between md:w-[35rem]">
        <input
          className="bg-transparent border-none w-full px-4 py-2 outline-none"
          placeholder="Note..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          onFocus={onNoteFocus}
        />
        <div className="px-4 flex items-center justify-center space-x-2">
          <AiOutlineCheckSquare className="cursor-pointer w-6 h-6" />
          <MdOutlineInsertPhoto className="cursor-pointer w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Content;
