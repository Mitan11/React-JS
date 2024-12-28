import React, { useState } from "react";
import logo from "../assets/Images/logo-d-plus.svg";
import { HiDotsVertical, HiHome, HiPlus, HiStar } from "react-icons/hi";
import { HiMagnifyingGlass, HiPlayCircle, HiTv } from "react-icons/hi2";
import HeaderItem from "./HeaderItem";

function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCH LIST", icon: HiPlus },
    { name: "ORIGINALS", icon: HiStar },
    { name: "MOVIES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
  ];

  return (
    <div className="flex items-center justify-between p-4 bg-[#121212] text-white relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <img
          src={logo}
          alt="logo"
          className="w-[60px] md:w-[50px] object-cover"
        />
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {menu.map((item, index) => (
            <HeaderItem key={index} name={item.name} Icon={item.icon} />
          ))}
        </div>
        {/* Mobile Menu */}
        <div className="flex md:hidden items-center gap-4">
          {menu.slice(0, 3).map((item, index) => (
            <HeaderItem key={index} name={""} Icon={item.icon} />
          ))}
          {/* More Options */}
          <div onClick={() => setToggle(!toggle)} className="relative">
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle && (
              <div className="absolute top-full right-0 mt-2 bg-[#1c1c1c] border border-gray-700 px-5 py-4 space-y-3 shadow-lg rounded-lg">
                {menu.slice(3).map((item, index) => (
                  <HeaderItem key={index} name={item.name} Icon={item.icon} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* User Avatar */}
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className="w-[40px] rounded-full"
        alt="user-avatar"
      />
    </div>
  );
}

export default Header;
