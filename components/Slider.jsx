"use client";
import React from "react";
import { Carousel } from "flowbite-react";
import { Button } from "@/components/ui/button";
import { slides } from "@/lib/data/slides";

const customTheme = {
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth",
    snap: "snap-x",
  },
};

const Slider = () => {
  return (
    <div className="h-96 lg:h-[420px] xl:h-[600px]">
      <Carousel
        theme={customTheme}
        slide={false}
        pauseOnHover
        slideInterval={6000}
        className=""
        onSlideChange={(index) => console.log("onSlideChange()", index)}
      >
        {/* slides */}
        {slides.map((slide, index) => {
          {
            /* destructure slide  */
          }
          const { image, icon, title, details, btntxt } = slide;
          return (
            <div
              key={index}
              className="bg-cover bg-no-repeat bg-center h-full w-full"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="slider-overlay h-full grid sm:grid-cols-1 md:grid-cols-2 px-5">
                {/* icon */}
                <div className="hidden md:grid">{icon}</div>
                {/* slide content */}
                <div className="">
                  <div className="flex flex-col h-full justify-center gap-6 lg:max-w-[600px] drop-shadow-md">
                    <h3 className="text-white text-3xl sm:text-3xl lg:text-[48px] font-semibold lg:leading-normal leading-tight">
                      {title}
                    </h3>
                    <p className="text-white lg:text-2xl font-Open_sans leading-normal">
                      {details}
                    </p>
                    <div>
                      <Button className="w-auto drop-shadow font-semibold capitalize">
                        {btntxt}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
