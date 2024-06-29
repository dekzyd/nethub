"use client";
import React from "react";
import { Carousel } from "flowbite-react";
import { CustomFlowbiteTheme } from "flowbite-react";

const customTheme = {
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth",
    snap: "snap-x",
  },
};

const Slider = () => {
  return (
    <div className="h-96 sm:h-64 xl:h-80 2xl:h-[450px]">
      <Carousel
        theme={customTheme}
        className="rounded-none"
        onSlideChange={(index) => console.log("onSlideChange()", index)}
      >
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 1
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 2
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 3
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
