import React from "react";
import { FaThumbsUp } from "react-icons/fa6";
import { bestValueData } from "@/lib/data/bestvaluedata";
import BizPerksCard from "./BizPerksCard";

const BestValues = () => {
  return (
    <div className="min-h-56">
      <div className="container">
        <div className="pt-16 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            <div className="p-5 grid gap-5">
              <p className="uppercase font-medium text-xl tracking-[2px] leading-[33px] pr-5">
                from wholesale to retail and anything in between
              </p>
              <p className="text-primary text-[40px] leading-[48.6px] font-semibold">
                The best value for telcos
              </p>
              <p className="text-lg font-semibold leading-[30px] pr-5">
                Nethub gives you the tools and solutions that allow you to
                proudly offer exceptional telecom services, work effectively,
                and stay competitive in your market.
              </p>
            </div>
            {/* icon */}
            <div className="hidden md:flex items-center md:ml-10">
              <div className="bg-primary/90 rounded-full p-12 grid place-content-center">
                <FaThumbsUp className="text-customColors-porcelain text-9xl pb-2" />
              </div>
            </div>
          </div>
          {/* value cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 my-10">
            {bestValueData.map(({ title, content, icon }) => {
              return (
                <BizPerksCard
                  key={title}
                  title={title}
                  content={content}
                  icon={icon}
                  titlesize="text-xl"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestValues;
