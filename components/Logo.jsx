import React from "react";
import { FaThLarge } from "react-icons/fa";

const Logo = ({ section }) => {
  return (
    <div
      className={`bottomftr flex justify-end items-center hover:scale-90 transition-transform ease-in-out duration-500 tracking-tight gap-3 ${
        section == "footer" ? "text-white" : ""
      } text-5xl font-bold`}
    >
      <span className="text-2xl text-white bg-primary h-11 w-11 flex justify-center items-center rounded-full">
        <FaThLarge />
      </span>{" "}
      Nethub
    </div>
  );
};

export default Logo;
