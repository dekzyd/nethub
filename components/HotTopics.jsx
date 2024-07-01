import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import HotTopicCard from "./HotTopicCard";

const HotTopics = () => {
  return (
    <section className="min-h-[300px] bg-customColors-loblolly pt-[50px] pb-[70px]">
      <div className="container py-4">
        <h2 className="text-white text-4xl font-bold mb-6">Hot topics</h2>

        {/* All hot topics link */}
        <div className="hover-container">
          <p className="text-primary">
            <FaAngleRight />
          </p>
          <p className="text-white uppercase font-semibold">all hot topics</p>
        </div>

        {/* Hot topics container */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <HotTopicCard />
          <HotTopicCard />
          <HotTopicCard />
          <HotTopicCard />
          <HotTopicCard />
          <HotTopicCard />
          <HotTopicCard />
          <HotTopicCard />
        </div>
      </div>
    </section>
  );
};

export default HotTopics;
