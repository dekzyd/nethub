import React from "react";
import { feedbackdata } from "@/lib/data/feedbackdata";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const FeedbackSlider = ({ flip }) => {
  return (
    <div className={`${flip && "bg-customColors-porcelain"}`}>
      <div className="container py-20">
        <div className="p-3 w-full">
          <div className="mb-3 bg-slate-50">
            <h3
              className={`${
                flip
                  ? "text-customColors-fiord bg-customColors-porcelain"
                  : "text-customColors-hitgray "
              } text-3xl font-semibold text-center`}
            >
              Feedback from Happy customers
            </h3>
          </div>
          <div className="flex justify-center">
            <Carousel className="w-full max-w-[1040px]">
              <CarouselContent className="gap-2 w-full py-3 pl-5">
                {feedbackdata.map(({ author, logo, review, position }) => (
                  <CarouselItem
                    key={author}
                    className={`basis-full md:basis-1/2 ${
                      flip ? "bg-white" : "bg-customColors-porcelain"
                    } p-5 rounded-3xl max-h-[400px] border border-gray-200`}
                  >
                    <div className="flex flex-col items-start md:p-5 gap-4 justify-stretch">
                      <div className="h-24 w-24 lg:h-36 lg:w-36 rounded-full flex overflow-hidden">
                        <Image
                          src={logo}
                          width={200}
                          height={200}
                          alt="company logo"
                          className="object-cover"
                        />
                      </div>
                      <p className="text-medium">{review}</p>
                      <div className="">
                        <p className="text-primary font-semibold text-xl md:text-2xl italic">
                          {author}
                        </p>
                        <p className="text-customColors-dovegray">{position}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSlider;
