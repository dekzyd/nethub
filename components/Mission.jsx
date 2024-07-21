import React from "react";
import { FaStar } from "react-icons/fa6";

const Mission = () => {
  return (
    <div className="bg-customColors-porcelain md:h-[666px] pt-12 pb-14">
      <div className="bg-red-20 container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-9">
          <div className="p-5">
            <p className="pre-title mb-7">the nethub mission</p>
            <h2 className="text-primary text-6xl font-semibold -tracking-[0.8px] leading-[70.2px]">
              Help telcos connect people
            </h2>
          </div>
          <div className="pt-5">
            <p className="text-customColors-fiord pb-6 text-[33px] tracking-wide leading-[40.5px]">
              We empower the telecom community to provide reliable and
              easy-to-use services to everyone.
            </p>
            <p className="text-customColors-dune text-xl tracking-normal leading-[31.5px] font-normal ">
              Nethub supplies integrated and flexible BSS, OCS, and softswitch
              solutions for telcos to help them easily compete and succeed.
            </p>
          </div>
        </div>

        <div className="lg:mt-20">
          <p className="text-center py-5 text-customColors-hitgray text-2xl">
            Trusted by telecommunication service providers around the globe.
          </p>
          <div className="flex gap-5 justify-center text-primary/70 hover:text-primary">
            {Array.from({ length: 5 }).map((_, index) => {
              return <FaStar key={index} className="text-2xl" />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
