import React from "react";
import { BellIcon, MenuIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";

const Navbar = ({ children }) => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-base-300">
          <div className="flex-none">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <MenuIcon className="w-6 h-6" />
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 font-bold text-xl">Note Taker</div>
          <ul className="menu menu-horizontal ">
            <li className=" w-full h-full">
              <button>
                <BellIcon className="w-6 h-6" />
              </button>
            </li>
            <li>
              <Avatar className="w-[4.5rem] h-[4.5rem]" />
            </li>
          </ul>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          <li>
            <p className="font-bold text-lg">Add Section</p>
          </li>
          <li>
            <p className="font-bold text-lg">Sidebar Item 2</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
