import React from "react";
const BizPerksCard = ({ title, content, icon, bgcolor }) => {
  return (
    <div>
      <div
        className={`${
          bgcolor ? bgcolor : "bg-white"
        } p-2 pt-3 h-16 w-16 rounded-full flex justify-center items-center mb-2`}
      >
        {icon}
      </div>
      <div>
        <h4 className="text-customColors-fiord text-2xl font-semibold mb-2 pr-2">
          {title}
        </h4>
        <p className="text-customColors-dovegray max-w-[300px] pr-2">
          {content}
        </p>
      </div>
    </div>
  );
};

export default BizPerksCard;
