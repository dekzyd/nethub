import React from "react";
import { FaThLarge } from "react-icons/fa";

const Logo = ({ section }) => {
  return (
    <div
      className={`bottomftr flex justify-end items-center gap-2 hover:scale-90 font-Open_sans transition-transform ease-in-out duration-500 tracking-tight ${
        section == "footer" ? "text-white" : ""
      } text-3xl font-bold`}
    >
      <span className="text-3xl text-white bg-primary h-14 w-14 flex justify-center items-center rounded-full">
        <FaThLarge />
      </span>{" "}
      Nethub
    </div>
  );
};

export default Logo;
