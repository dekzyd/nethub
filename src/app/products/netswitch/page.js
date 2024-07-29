import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowsToCircle, FaAngleRight } from "react-icons/fa6";
import MostTelcos from "../../../../components/netswitch/most_telcos.jsx";
import UniqueMkt from "../../../../components/UniqueMkt.jsx";
import Divider from "../../../../components/divider.jsx";
import { BetterWayData } from "@/lib/data/products/netswitchData.jsx";

const Netswitch = () => {
  return (
    <>
      <Header
        image="/netswitch.jpg"
        title="NetSwitch"
        btntxt="contact us"
        description={
          <p>
            <span className="font-semibold">
              A Unified Service Management & Delivery Platform
            </span>{" "}
            for voice, messaging, IoT/M2M, and data traffic within a single
            converged network.
          </p>
        }
        height=""
      />
      <MostTelcos />
      <Divider />
      <UniqueMkt
        title="Discover a better way"
        perks={BetterWayData}
        image="/about3.jpg"
        flip
      />
    </>
  );
};

const Header = ({
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
        className={`w-full relative ${
          height ? height : "h-[600px]"
        } bg-cover bg-center bg-no-repeat`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="bg-gradient-to-tr to-[#0D4157]/70 to-50% from-[#183104]/50 h-full">
          <div className="container grid sm:grid-cols-1 md:grid-cols-2 gap-5 h-full">
            {/* icon */}
            <div className="hidden md:flex justify-center items-center ">
              <div className="bg-black/35 p-9 rounded-[40px] text-white text-[200px]">
                <FaArrowsToCircle />
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
                  } font-semibold tracking-wide leading-tight`}
                >
                  {title}
                </h3>
                <p className="text-white lg:text-[24px] leading-[1.7em] font-normal">
                  {description}
                </p>
                <div>
                  {btntxt && (
                    <Link href="#footer">
                      <Button className="w-auto uppercase font-semibold text-[15px] p-6 font-ubuntu tracking-widest">
                        {btntxt}{" "}
                        <FaAngleRight className="ml-1 text-[12px] font-bold" />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* divider */}
        <div
          style={{ transform: "rotateX(180deg) rotateY(180deg)" }}
          className={`absolute z-10 bottom-0 w-full`}
        >
          <svg
            className="w-full h-4 bg-transparent"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path fill="#fec" d="M0,6V0h1000v100L0,6z"></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Netswitch;
