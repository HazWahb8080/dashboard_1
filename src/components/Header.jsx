import React, { useState } from "react";
import NavLink from "./links/NavLink";
import { nav_icon, notif_icon, search_icon } from "./../utils/svgs";

let userImg =
  "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
let navLinks = ["Overview", "Payments", "Cards", "Account", "Admin"];
function Header() {
  const [active, setActive] = useState("Overview");

  return (
    <div className="items-center justify-between flex w-full space-x-4 pb-2 pt-4 px-3">
      {/* logo */}
      <div className="border-b border-gray-900 w-[25%] flex md:space-x-2 md:pb-6 pb-2 items-center justify-center md:justify-start">
        <img
          className="md:w-12 md:h-12 w-10 h-10 "
          src="https://img.icons8.com/dotty/80/000000/merchant-account.png"
          alt="logo"
        />
        <h1 className="self-center hidden md:inline md:font-bold md:text-xl text-md">
          openbank
        </h1>
      </div>
      {/* navlinks */}
      <div className=" border-b pb-5  border-gray-900 w-[140%] items-center justify-center flex space-x-2">
        {navLinks.map((link) => (
          <div
            className="relative items-center justify-center flex "
            onClick={() => setActive(link)}
          >
            <NavLink title={link} key={link} />
            <div
              className={`${
                active === link
                  ? "items-center justify-center flex absolute -bottom-3 "
                  : "hidden"
              }`}
            >
              {nav_icon}
            </div>
          </div>
        ))}
      </div>
      {/* login */}
      <div className="border-b  border-gray-900 pb-6 pt-4 hidden md:flex items-center justify-end px-3 space-x-6 w-[60%]">
        <div>{search_icon}</div>
        <div>{notif_icon}</div>
        <img
          src={userImg}
          className="w-8 h-8 rounded-full object-center object-cover "
          alt="userimg"
        />
      </div>
    </div>
  );
}

export default Header;
