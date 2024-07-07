import React from "react";
import Breadcrumbs from "../../../../components/Breadcrumbs.jsx";
// import PageHeader from "../../../../components/PageHeader.jsx";
import { TbCloudCog } from "react-icons/tb";
import BizPerksCard from "../../../../components/BizPerksCard.jsx";
import { Hsas, Hc, Sds, Rnr } from "../../../../components/icons";
import { FiPhoneCall } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Link from "next/link.js";

const CloudPbxandCallCenter = () => {
  // CloudPBX solutions page breadcrumbs
  const crumbs = [
    { title: "home", href: "/" },
    { title: "solutions", href: "/solutions" },
    { title: "Cloud PBX & Call Center", href: "#" },
  ];
  return (
    <div>
      <CloudPageHeader
        image="/journey2.jpg"
        icon={
          <TbCloudCog className="md:text-[200px] lg:text-[300px] text-customColors-porcelain" />
        }
        btntxt="contact us"
        description="Deliver a business communication environment to your SMB and enterprise customers with NetSwitch voice, video, CCaaS, CRM integrations, and more."
        height="h-[600px]"
      />
      {/* Voice solutions content */}
      <section className="bg-white pt-10 pb-10 ">
        <div className="container">
          <Breadcrumbs crumbs={crumbs} />
          <div className="my-10 grid sm:grid-cols-1 md:grid-cols-2">
            <div className="">
              <div className="flex flex-col gap-4">
                <p className="uppercase font-medium text-2xl tracking-widest">
                  Cloud PBX & Call Center
                </p>
                <p className="text-primary text-5xl font-semibold tracking-wider leading-normal">
                  Integrated business communication solution
                </p>
                <p className="font-medium text-lg">
                  Become a next-generation provider of communication services by
                  delivering an integrated business cloud telephony solution
                  that your SMB and enterprise customers will be excited about.
                </p>
              </div>
            </div>
            <div className="font-bold grid place-content-center">
              <FiPhoneCall className=" md:text-[250px] text-customColors-loblolly -scale-x-100" />
            </div>
          </div>
          {/* voice perks */}
          <div className="my-14 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            <BizPerksCard
              icon={<Hsas fill="#9EAEB4" />}
              // bgcolor="bg-customColors-fiord"
              title="no hidden costs"
              content="Use our cloud marketplace to expand your range of value-added services and create irresistible 'a la carte' bundles & solutions for niche enterprise markets"
            />
            <BizPerksCard
              icon={<Hc fill="#9EAEB4" />}
              title="Increase your revenue"
              content="Use our cloud marketplace to expand your range of value-added services and create irresistible 'a la carte' bundles & solutions for niche enterprise markets"
            />
            <BizPerksCard
              icon={<Sds fill="#9EAEB4" />}
              title="Stay agile and flexible"
              content="Use our cloud marketplace to expand your range of value-added services and create irresistible 'a la carte' bundles & solutions for niche enterprise markets"
            />
            <BizPerksCard
              icon={<Rnr fill="#9EAEB4" />}
              title="Monetize any service"
              content="Use our cloud marketplace to expand your range of value-added services and create irresistible 'a la carte' bundles & solutions for niche enterprise markets"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const CloudPageHeader = ({
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
        } bg-cover bg-top bg-no-repeat`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="imgoverlay h-full">
          <div className="container grid sm:grid-cols-1 md:grid-cols-2 gap-5 h-full">
            {/* icon */}
            <div className="hidden md:flex justify-center items-center">
              {/* {icon} */}
            </div>
            {/* Header title and content */}
            <div className="h-full">
              <div className="flex flex-col h-full justify-center gap-7 lg:max-w-[600px]">
                {pre_title && (
                  <h4 className="text-white uppercase text-xl font-medium tracking-wider">
                    {pre_title}
                  </h4>
                )}
                <h3 className="text-white text-3xl lg:text-6xl font-semibold leading-tight">
                  <h3>
                    Cloud PBX <p>and Call Center</p>
                  </h3>
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

export default CloudPbxandCallCenter;
