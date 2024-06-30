"use client";
import React from "react";
import { Carousel } from "flowbite-react";
import { Button } from "@/components/ui/button";

const customTheme = {
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth",
    snap: "snap-x",
  },
};

const Slider = () => {
  return (
    <div className="h-96 sm:h-64 lg:h-[400px] xl:h-[450px]">
      <Carousel
        theme={customTheme}
        // slide={false}
        pauseOnHover
        slideInterval={5000}
        className=""
        onSlideChange={(index) => console.log("onSlideChange()", index)}
      >
        <div
          className="bg-cover bg-no-repeat h-full w-full"
          style={{ backgroundImage: `url('/tech2.jpg')` }}
        >
          <div className="imgoverlay">
            <div className="lg:basis-1/2"></div>
            <div className="lg:basis-1/2 h-full">
              <div className="flex flex-col h-full justify-center gap-4 lg:max-w-[600px]">
                <h3 className="text-white sm:text-3xl lg:text-4xl font-semibold leading-tight">
                  How PortaOne Helped Speedcast Reduce Its Capex and Increase
                  Its Scalability
                </h3>
                <p className="text-white lg:text-xl">
                  Learn how PortaOne helped Speedcast ‘de-complicate’ its
                  infrastructure so it could reduce capex, increase scalability,
                  and get ready for the future.
                </p>
                <div>
                  <Button className="w-auto">Read Success Story</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat h-full w-full"
          style={{ backgroundImage: `url('/tech.jpg')` }}
        >
          <div className="imgoverlay">
            <div className="lg:basis-1/2"></div>
            <div className="lg:basis-1/2 h-full">
              <div className="flex flex-col h-full justify-center gap-4 lg:max-w-[600px]">
                <h3 className="text-white sm:text-3xl lg:text-4xl font-semibold leading-tight">
                  How PortaOne Helped Speedcast Reduce Its Capex and Increase
                  Its Scalability
                </h3>
                <p className="text-white lg:text-xl">
                  Learn how PortaOne helped Speedcast ‘de-complicate’ its
                  infrastructure so it could reduce capex, increase scalability,
                  and get ready for the future.
                </p>
                <div>
                  <Button className="w-auto">Read Success Story</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat h-full w-full"
          style={{ backgroundImage: `url('/tech3.jpg')` }}
        >
          <div className="imgoverlay">
            <div className="lg:basis-1/2"></div>
            <div className="lg:basis-1/2 h-full opacity-100">
              <div className="flex flex-col h-full justify-center gap-4 lg:max-w-[600px]">
                <h3 className="text-white sm:text-3xl lg:text-4xl font-semibold leading-tight">
                  How PortaOne Helped Speedcast Reduce Its Capex and Increase
                  Its Scalability
                </h3>
                <p className="text-white lg:text-xl">
                  Learn how PortaOne helped Speedcast ‘de-complicate’ its
                  infrastructure so it could reduce capex, increase scalability,
                  and get ready for the future.
                </p>
                <div>
                  <Button className="w-auto">Read Success Story</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
