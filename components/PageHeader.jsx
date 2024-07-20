import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PageHeader = ({
  image,
  icon,
  title,
  pre_title,
  description,
  btntxt,
  height,
  fontsize,
}) => {
  return (
    <>
      <div
        className={`w-full ${
          height ? height : "h-[600px]"
        } bg-cover bg-center bg-no-repeat`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="imgoverlay h-full">
          <div className="container grid sm:grid-cols-1 md:grid-cols-2 gap-5 h-full">
            {/* icon */}
            <div className="hidden md:flex justify-center items-center ">
              <div className="hover:scale-110 transition-transform ease-in-out duration-500">
                {icon}
              </div>
            </div>
            {/* Header title and content */}
            <div className="h-full">
              <div className="flex flex-col h-full justify-center gap-10 lg:max-w-[600px]">
                {pre_title && (
                  <h4 className="text-white uppercase text-xl font-medium tracking-wider">
                    {pre_title}
                  </h4>
                )}
                <h3
                  className={`text-white sm:text-3xl ${
                    fontsize ? fontsize : "lg:text-6xl"
                  } font-bold tracking-wide leading-tight`}
                >
                  {title}
                </h3>
                <p className="text-white lg:text-2xl leading-relaxed">
                  {description}
                </p>
                <div>
                  {btntxt && (
                    <Link href="#footer">
                      <Button className="w-auto font-semibold capitalize">
                        {btntxt}
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
