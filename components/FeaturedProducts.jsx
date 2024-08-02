import React from "react";
import { FaStar } from "react-icons/fa6";
import { Carousel } from "flowbite-react";
import { solutions, products } from "@/lib/data/NavLinksData";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FeaturedProducts = () => {
  const allServices = products
    .concat(solutions)
    .filter((service) => service.featured);
  console.log(allServices);
  return (
    <div className="bg-customColors-porcelain">
      <div className="container pt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 h-[444px] ">
          <div className="grid place-content-center gap-5">
            <div className="flex gap-5 text-primary/70 hover:text-primary">
              {Array.from({ length: 5 }).map((_, index) => {
                return <FaStar key={index} className="text-3xl" />;
              })}
            </div>
            <p className="text-2xl text-customColors-dovegray">
              <span className="text-3xl">N</span>ethub&apos;s featured products
              and solutions
            </p>
          </div>
          <div className=" col-span-2 p-[50px] rounded-[40px] border-2 border-white">
            <Carousel
              leftControl=" "
              rightControl=" "
              slideInterval={10000}
              pauseOnHover
              // slide={false}
            >
              {allServices.map(({ title, href, description, icon, button }) => {
                return (
                  <Link href={href} key={title} className="h-full">
                    <div className="grid h-full content-center gap-2 grid-cols-1 md:grid-cols-3 dark:bg-gray-700 dark:text-white">
                      <div className="gap-5 col-span-2 p-5">
                        <div className="flex flex-col gap-5 ">
                          <h3 className="text-5xl font-bold hover:text-customColors-dovegray">
                            {title}
                          </h3>
                          <p className="text-customColors-dovegray text-2xl">
                            {description}
                          </p>
                        </div>
                        <Button className="uppercase font-semibold font-Open_sans mt-5 bg-customColors-cuttysark/50">
                          {button}
                        </Button>
                      </div>
                      <div
                        className={`m-1 p-3 md:flex justify-center items-center text-9xl rounded-xl ${
                          icon && "bg-primary/90 text-white"
                        } `}
                      >
                        {icon}
                      </div>
                    </div>
                  </Link>
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
