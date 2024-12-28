import React from "react";

function HeaderItem({ name, Icon }) {
  return (
    <div
      className="flex items-center gap-3 text-[12px] font-serif cursor-pointer text-white relative group"
      aria-label={name}
    >
      <Icon className="text-lg" />
      <h2 className="hidden md:block relative">
        {name}
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
      </h2>
    </div>
  );
}

export default HeaderItem;
