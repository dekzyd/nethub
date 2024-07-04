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
}) => {
  return (
    <>
      <div
        className={`w-full ${
          height ? height : "h-[467px]"
        } bg-cover bg-center bg-no-repeat`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="imgoverlay">
          <div className="container grid sm:grid-cols-1 md:grid-cols-2 gap-5">
            {/* icon */}
            <div className="hidden md:flex justify-center items-center">
              {icon}
            </div>
            {/* Header title and content */}
            <div className="h-full">
              <div className="flex flex-col h-full justify-center gap-7 lg:max-w-[600px]">
                {pre_title && (
                  <h4 className="text-white uppercase text-xl font-medium tracking-wider">
                    {pre_title}
                  </h4>
                )}
                <h3 className="text-white sm:text-3xl lg:text-6xl font-semibold leading-tight">
                  {title}
                </h3>
                <p className="text-white lg:text-xl">{description}</p>
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
