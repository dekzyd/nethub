import React from "react";
import Image from "next/image";

const HotTopicCard = () => {
  return (
    <div className="flex w-full flex-1 gap-3">
      <div className="h-14 w-14 rounded-md overflow-hidden flex basis-1/4">
        <Image
          src="/tech.jpg"
          alt="hot topic"
          width={500}
          height={500}
          className="object-cover"
        />
      </div>
      <p className="font-semibold basis-3/4">
        Cloud PBX checklist | Profit from the latest enterprise telephony
        strategies
      </p>
    </div>
  );
};

export default HotTopicCard;
