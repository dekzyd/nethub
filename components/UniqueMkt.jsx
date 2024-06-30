import React from "react";
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
        <div className="min-h-[300px] grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-1">
          <div className="p-5">
            <BizPerksCard />
          </div>
          <div className="p-5">
            <BizPerksCard />
          </div>
          <div className="p-5">
            <BizPerksCard />
          </div>
          <div className="p-5">
            <BizPerksCard />
          </div>
          <div className="p-5">
            <BizPerksCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueMkt;
