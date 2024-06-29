import React from "react";
import { FaThLarge } from "react-icons/fa";

const Logo = ({ section }) => {
  return (
    <div
      className={`bottomftr flex justify-end items-center gap-2 ${
        section == "footer" ? "text-white" : ""
      } text-3xl font-bold`}
    >
      <span className="text-2xl text-white bg-primary h-11 w-11 flex justify-center items-center rounded-full">
        <FaThLarge />
      </span>{" "}
      Nethub
    </div>
  );
};

export default Logo;
