import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";

const PageHeader = ({
  image,
  icon,
  title,
  pre_title,
  description,
  btntxt,
  height,
  fontsize,
  pretitlefontsize,
}) => {
  return (
    <>
      <div
        className={`w-full ${
          height ? height : "h-[400px] md:h-[600px]"
        } bg-cover bg-center bg-no-repeat`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="imgoverlay h-full">
          <div className="container grid sm:grid-cols-1 md:grid-cols-2 gap-5 h-full">
            {/* icon */}
            <div className="hidden md:flex justify-center items-center md:text-[200px] lg:text-[400px] text-customColors-porcelain">
              <div className="hover:scale-110 transition-transform ease-in-out duration-500 ">
                {icon}
              </div>
            </div>
            {/* Header title and content */}
            <div className="h-full">
              <div className="flex flex-col h-full justify-center gap-10 lg:max-w-[600px]">
                {pre_title && (
                  <h4
                    className={`text-white uppercase font-Open_sans ${
                      pretitlefontsize ? pretitlefontsize : "text-xl"
                    } font-light tracking-[5px]`}
                  >
                    {pre_title}
                  </h4>
                )}
                <h3
                  className={`text-white text-[20px] md:text-[38px]  ${
                    fontsize ? fontsize : "xl:text-[52px]"
                  } font-semibold tracking-[-0.8px]  xl:leading-[64.8px]`}
                >
                  {title}
                </h3>
                <p className="text-white lg:text-2xl leading-relaxed">
                  {description}
                </p>
                <div>
                  {btntxt && (
                    <Link href="#contact">
                      <Button className="w-auto font-semibold font-Open_sans uppercase">
                        {btntxt}
                        <FaAngleRight className="ml-1 text-[12px] font-bold" />
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
