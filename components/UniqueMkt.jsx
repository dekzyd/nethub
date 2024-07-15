import React from "react";
import {
  MedalIcon,
  RocketIcon,
  CrescentIcon,
  DiamondIcon,
  LoveIcon,
} from "./icons";
import BizPerksCard from "./BizPerksCard";

const UniqueMkt = () => {
  return (
    <section className="bg-customColors-porcelain py-16">
      <div className="container">
        <div className="p-5 max-w-[687px]">
          <p className="uppercase font-medium text-xl tracking-widest pb-3">
            what makes Nethub unique
          </p>
          <p className="text-primary text-3xl font-semibold tracking-wide">
            Here’s why telcos around the world choose our products and services
            to help them succeed
          </p>
        </div>
        {/* biz perks cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
          <BizPerksCard
            icon={<LoveIcon fill="#9EAEB4" />}
            title="no hidden costs"
            content="Use our cloud marketplace to expand your range of value-added services and create irresistible 'a la carte' bundles & solutions for niche enterprise markets"
          />
        </div>
      </div>
    </section>
  );
};

export default UniqueMkt;
