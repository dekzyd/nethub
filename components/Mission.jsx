import React from "react";

const Mission = () => {
  return (
    <div className="bg-customColors-porcelain min-h-56 pt-12 pb-14">
      <div className="bg-red-20 container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-9">
          <div className="py-5">
            <p className="pre-title mb-5">the nethub mission</p>
            <h2 className="text-primary text-6xl font-semibold tracking-normal leading-snug">
              Help telcos connect people
            </h2>
          </div>
          <div className="pt-5">
            <p className="text-customColors-fiord pb-5 text-3xl">
              We empower the telecom community to provide reliable and
              easy-to-use services to everyone.
            </p>
            <p className="text-customColors-dune text-lg font-normal">
              Nethub supplies integrated and flexible BSS, OCS, and softswitch
              solutions for telcos to help them easily compete and succeed.
            </p>
          </div>
        </div>
        <p className="text-center py-7 text-customColors-hitgray text-2xl">
          Trusted by telecommunication service providers around the globe.
        </p>
      </div>
    </div>
  );
};

export default Mission;
