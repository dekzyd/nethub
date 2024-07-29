import React from "react";
import Image from "next/image";
import BizPerksCard from "./BizPerksCard";

const UniqueMkt = ({ pretitle, title, perks, image, flip }) => {
  return (
    <section className="bg-customColors-porcelain py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className={`p-5 max-w-[687px] ${flip && "order-last"}`}>
            <p className="uppercase font-light text-xl tracking-[5px] pb-3">
              {pretitle}
            </p>
            <p className="text-primary text-[32px] font-semibold -tracking-wider">
              {title}
            </p>
          </div>
          <div className="hidden lg:grid place-content-center rounded-full">
            {image && (
              <Image src={image} alt="basic image" width={300} height={300} />
            )}
          </div>
        </div>
        {/* biz perks cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 py-5">
          {perks.map(({ icon, title, content }) => {
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
