import React from "react";
import { NavLink } from "react-router";

const MainContent = () => {
  return (
    <div>
      <div className="absolute right-0 border border-gray-600 bg-[#232429] px-5 py-5 rounded-bl-2xl rounded-tr-2xl">
        <div className="text-base font-medium text-gray-300 flex space-x-10 px-5">
          <NavLink to="/" className={({isActive}) => (isActive ? "font-medium text-[#6ef08e]" : "")}>About</NavLink>
          <NavLink to="/resume" className={({isActive}) => (isActive ? "font-medium text-[#6ef08e]" : "")}>Resume</NavLink>
          <NavLink to="/portfolio" className={({isActive}) => (isActive ? "font-medium text-[#6ef08e]" : "")}>Portfolio</NavLink>
          <NavLink to="/contact" className={({isActive}) => (isActive ? "font-medium text-[#6ef08e]" : "")}>Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
