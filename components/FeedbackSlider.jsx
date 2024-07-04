import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const FeedbackSlider = () => {
  return (
    <div className="">
      <div className="container py-20">
        <div className="p-3 w-full">
          <div className="mb-3 bg-slate-50">
            <h3 className="text-customColors-hitgray text-2xl font-semibold text-center">
              Feedback from happy customers
            </h3>
          </div>
          <div className="flex justify-center">
            <Carousel className="pl-1 w-full max-w-[1140px]">
              <CarouselContent className="gap-2 w-full py-3">
                {Array.from({ length: 6 }).map((_, index) => (
                  <CarouselItem
                    key={index}
                    className="ml-1 basis-full md:basis-1/2 bg-customColors-porcelain p-5 rounded-3xl max-h-[400px]"
                  >
                    <div className="flex flex-col items-start p-10 gap-4 justify-stretch">
                      <div className="bg-white h-36 w-36 rounded-full flex justify-center items-center">
                        logo
                      </div>
                      <p className="text-medium">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Amet praesentium exercitationem, ea nesciunt ut.
                      </p>
                      <div className="">
                        <p className="text-primary font-semibold text-2xl italic">
                          Samuel Taylor
                        </p>
                        <p className="text-customColors-dovegray">
                          Head of IT at MTN Kenya
                        </p>
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
