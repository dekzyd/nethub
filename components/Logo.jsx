import React from "react";
import { FaThLarge } from "react-icons/fa";

const Logo = ({ section, animation }) => {
  return (
    <div
      className={`flex items-center gap-2  ${
        animation
          ? "hover:scale-90 transition-transform ease-in-out duration-500"
          : ""
      } font-Open_sans  tracking-tight ${
        section == "footer" ? "text-white justify-end bottomftr" : ""
      } font-bold`}
    >
      <span className="text-3xl text-white bg-primary h-14 w-14 flex justify-center items-center rounded-full">
        <FaThLarge />
      </span>{" "}
      <p className="text-4xl">
        N<span className="text-3xl">ethub</span>
      </p>
    </div>
  );
};

export default Logo;
