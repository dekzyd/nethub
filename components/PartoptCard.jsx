import Image from "next/image";
import React from "react";

const PartoptCard = () => {
  return (
    <div>
      <div className="bg-white h-20 w-20 overflow-hidden flex rounded-lg mb-5">
        <Image
          src="/tech2.jpg"
          alt="partner img"
          width={500}
          height={500}
          className="object-cover"
        />
      </div>
      <div>
        <h4 className="text-customColors-dune text-2xl font-semibold mb-3">
          Become a partner
        </h4>
        <p className="text-customColors-dovegray max-w-[300px]">
          Becoming a Nethub team member means joining a group that cares deeply
          about their work and our customers, fostering professional
          development, on the job learning, and out of office recreational
          activities, because work isn’t everything.
        </p>
      </div>
    </div>
  );
};

export default PartoptCard;
