import React from "react";
import Image from "next/image";
import BizPerksCard from "./BizPerksCard";

const UniqueMkt = ({
  pretitle,
  title,
  perks,
  image,
  flip,
  titlesize,
  ltrspacing,
  description,
}) => {
  return (
    <section className="bg-customColors-porcelain py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className={`p-5 max-w-[687px] ${flip && "order-last"}`}>
            <p className="uppercase font-light text-xl tracking-[5px] pb-3">
              {pretitle}
            </p>
            <p
              className={`text-primary ${
                titlesize ? titlesize : "text-[32px]"
              } font-semibold ${ltrspacing ? ltrspacing : "-tracking-wider"}`}
            >
              {title}
            </p>
            {description && (
              <div className="my-7 font-semibold font-Open_sans text-[20px] text-customColors-fiord">
                {description}
              </div>
            )}
          </div>
          {/* image container */}
          <div className="hidden lg:grid place-content-center">
            {image && (
              <div className="w-full flex">
                <div className="w-72 h-72 overflow-hidden rounded-full flex">
                  <Image
                    height={600}
                    width={600}
                    src={image}
                    alt="image"
                    className="object-cover"
                  />
                </div>
              </div>
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
