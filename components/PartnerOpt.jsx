import React from "react";
import PartoptCard from "./PartoptCard";
import { PartnerData } from "@/lib/data/aboutData";

const PartnerOpt = () => {
  return (
    <section className="min-h-[300px] container bg-white grid gap-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-16">
      {PartnerData.map(({ icon, title, content }) => {
        return (
          <PartoptCard
            key={title}
            icon={icon}
            title={title}
            content={content}
          />
        );
      })}
    </section>
  );
};

export default PartnerOpt;
