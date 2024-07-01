import React from "react";
import HotTopicCard from "./HotTopicCard";
import ChevronLink from "./ChevronLink";

const HotTopics = () => {
  return (
    <section className="min-h-[300px] bg-customColors-loblolly pt-[50px] pb-[70px]">
      <div className="container py-4">
        <h2 className="text-white text-4xl font-bold mb-6">Hot topics</h2>

        {/* All hot topics link */}
        <ChevronLink text="All hot topics" color="text-white" />
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
