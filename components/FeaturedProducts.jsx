import React from "react";
import { FaStar } from "react-icons/fa6";
import { Carousel } from "flowbite-react";
import { solutions, products } from "@/lib/data/NavLinksData";

const FeaturedProducts = () => {
  const allServices = products.concat(solutions);
  return (
    <div className="">
      <div className="container pt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 max-h-[444px] min-h-56">
          <div className="grid place-content-center gap-5">
            <div className="flex gap-2 text-primary/50 hover:text-primary">
              {Array.from({ length: 5 }).map((_, index) => {
                return <FaStar key={index} className="text-3xl" />;
              })}
            </div>
            <p className="text-2xl text-customColors-dovegray">
              Nethub featured products and solutions
            </p>
          </div>
          <div className=" col-span-2 p-5 rounded-xl border-2 border-customColors-porcelain">
            <Carousel>
              {allServices.map(({ title, href, description, icon }) => {
                return (
                  <div
                    className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
                    key={index}
                  >
                    {index + 1}
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
