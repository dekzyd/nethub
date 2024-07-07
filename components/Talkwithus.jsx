import { Button } from "@/components/ui/button";
import { Carousel } from "flowbite-react";
import Link from "next/link";
import React from "react";

const Talkwithus = () => {
  return (
    <div>
      <div className="container min-h-56 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 h-full">
          <div className="">
            <div className="flex flex-col gap-5">
              <h3 className="text-primary text-6xl font-semibold">
                Talk with us
              </h3>
              <p className="text-customColors-dovegray text-2xl">
                Let us show you how moving to Nethub can help you achieve your
                goals
              </p>
            </div>
            <Button className="uppercase mt-9">
              <Link href="#footer">contact us</Link>
            </Button>
          </div>
          <div className="bg-slate-200 h-full">
            <Carousel className="">
              {Array.from({ length: 5 }).map((_, index) => {
                return <div key={index}>{index + 1}</div>;
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talkwithus;
