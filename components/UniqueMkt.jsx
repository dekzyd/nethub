import React from "react";
import { MedalIcon, RocketIcon, CrescentIcon, DiamondIcon } from "./icons";
import BizPerksCard from "./BizPerksCard";
import { UniqueMktData } from "@/lib/data/uniqueMktData";

const UniqueMkt = () => {
  return (
    <section className="bg-customColors-porcelain py-16">
      <div className="container">
        <div className="py-5 max-w-[687px]">
          <p className="uppercase font-medium text-xl tracking-widest pb-3">
            what makes Nethub unique
          </p>
          <p className="text-primary text-3xl font-semibold tracking-wide">
            Here’s why telcos around the world choose our products and services
            to help them succeed
          </p>
        </div>
        {/* biz perks cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 py-5">
          {UniqueMktData.map(({ icon, title, content }) => {
            return (
              <BizPerksCard
                key={title}
                icon={icon}
                title={title}
                content={content}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UniqueMkt;
