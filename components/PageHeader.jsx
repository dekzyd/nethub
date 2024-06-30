import React from "react";
import { Button } from "@/components/ui/button";

const PageHeader = ({ image, icon, title, pre_title, description, btntxt }) => {
  return (
    <>
      <div
        className="w-full h-[467px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="imgoverlay">
          <div className="container flex">
            <div className="lg:basis-1/2 flex justify-center items-center">
              {icon}
            </div>
            <div className="lg:basis-1/2 h-full">
              <div className="flex flex-col h-full justify-center gap-4 lg:max-w-[600px]">
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
                  {btntxt && <Button className="w-auto">{btntxt}</Button>}
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
