import React from "react";
import { Hsas } from "./icons";
const BizPerksCard = () => {
  return (
    <div>
      <div className="bg-white p-2 pt-3 h-16 w-16 rounded-full flex justify-center items-center mb-2">
        <Hsas />
      </div>
      <div>
        <h4 className="text-customColors-fiord text-2xl font-semibold">
          No hidden costs
        </h4>
        <p className="text-customColors-dovegray max-w-[300px]">
          Unlimited lifelong license with no artificial limitations on
          subscribers, calls, or features.
        </p>
      </div>
    </div>
  );
};

export default BizPerksCard;
