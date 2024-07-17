import Image from "next/image";
import React from "react";

const PartoptCard = ({ title, icon, content }) => {
  return (
    <div>
      <div className="bg-customColors-fiord h-20 w-20 flex items-center justify-center text-5xl rounded-lg mb-5">
        {icon}
      </div>
      <div>
        <h4 className="text-customColors-dune text-2xl font-semibold mb-3">
          {title}
        </h4>
        <p className="text-customColors-dovegray max-w-[300px]">{content}</p>
      </div>
    </div>
  );
};

export default PartoptCard;
