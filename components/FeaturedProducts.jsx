"use client";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { Carousel } from "flowbite-react";
import { solutions, products } from "@/lib/data/NavLinksData";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const FeaturedProducts = () => {
  const allServices = products
    .concat(solutions)
    .filter((service) => service.featured);
  return (
    <div className="bg-customColors-fiord">
      <div className="container pt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:h-[444px] ">
          <div className="flex flex-col gap-5 items-center justify-center lg:items-start">
            <div className="flex gap-5 text-primary/70 hover:text-primary">
              {Array.from({ length: 5 }).map((_, index) => {
                return <FaStar key={index} className="text-3xl" />;
              })}
            </div>
            <p className="text-2xl text-customColors-hitgray text-center lg:text-left">
              <span className="text-3xl">N</span>ethub&apos;s featured products
              and solutions
            </p>
          </div>
          <div
            className={`h-60 lg:h-full col-span-2 p-5 py-2 lg:p-[50px] rounded-[40px] border-2 border-white`}
          >
            <Carousel
              leftControl=" "
              rightControl=" "
              slideInterval={5000}
              pauseOnHover
              indicators={false}
              // slide={false}
            >
              {allServices.map(
                ({ title, href, description, icon, button, bgcol }) => {
                  return (
                    <Link href={href} key={title} className="h-full">
                      <div className="grid h-full content-center gap-2 grid-cols-1 md:grid-cols-3 dark:bg-gray-700 dark:text-white">
                        {/* animate slide content */}
                        <motion.div
                          initial={{ opacity: 0, y: 200 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1.5 }}
                          className="gap-2 md:gap-4 lg:gap-5 col-span-2 lg:p-5"
                        >
                          <div className="flex flex-col gap-2 md:gap-4 lg:gap-5 ">
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white hover:text-primary/80">
                              {title}
                            </h3>
                            <p className="text-customColors-hitgray text-lg md:text-xl lg:text-2xl">
                              {description}
                            </p>
                          </div>
                          <Button className="uppercase font-semibold font-Open_sans mt-5 bg-customColors-cuttysark/50">
                            {button}
                          </Button>
                        </motion.div>
                        <motion.div
                          initial={{ scale: 0.5 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 1.5 }}
                          className={`m-1 p-3 border-2 border-white hidden md:flex justify-center items-center text-9xl text-white rounded-xl ${
                            bgcol ? bgcol : "bg-primary/90"
                          } `}
                        >
                          {icon}
                        </motion.div>
                      </div>
                    </Link>
                  );
                }
              )}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
