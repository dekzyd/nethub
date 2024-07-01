import React from "react";
import MiscCard from "./MiscCard";

const Misc = () => {
  return (
    <section className="bg-customColors-porcelain min-h-[300px] py-14">
      <div className="container grid lg:grid-cols-5 md:grid-cols-3 sm:grid">
        <MiscCard />
        <MiscCard />
        <MiscCard />
        <MiscCard />
        <MiscCard />
      </div>
    </section>
  );
};

export default Misc;
