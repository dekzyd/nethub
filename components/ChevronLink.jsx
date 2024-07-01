import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const ChevronLink = ({ text, href, color }) => {
  return (
    <div className="hover-container">
      <p className="text-primary">
        <FaAngleRight />
      </p>
      <p className={`${color} uppercase font-semibold`}>{text}</p>
    </div>
  );
};

export default ChevronLink;
