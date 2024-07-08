import { Button } from "@/components/ui/button";
import { Carousel } from "flowbite-react";
import Link from "next/link";
import React from "react";
import { talkWithUsData } from "@/lib/data/talkWithUsData";

const Talkwithus = () => {
  return (
    <div className="">
      <div className="container h-[478px] py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-full">
          <div className="pt-7">
            <div className="flex flex-col gap-5">
              <h3 className="text-primary text-6xl font-semibold">
                Talk with us
              </h3>
              <p className="text-customColors-dovegray text-2xl pr-5">
                Let us show you how moving to Nethub can help you achieve your
                goals
              </p>
            </div>
            <Button className="uppercase mt-9">
              <Link href="#footer">contact us</Link>
            </Button>
          </div>
          <div className="h-full">
            <Link href="#footer">
              <Carousel
                className=""
                // slide={false}
              >
                {talkWithUsData.map(({ icon, content }, index) => {
                  return (
                    <div
                      key={index}
                      style={{ backgroundImage: "url(/3.jpg)" }}
                      className="grid place-content-center bg-cover bg-no-repeat bg-center w-full bg-red-100 h-full p-9"
                    >
                      <div className="">
                        <p className="text-xl tracking-wide">{content}</p>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talkwithus;
