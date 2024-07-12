import React from "react";
import Breadcrumbs from "../../../../components/Breadcrumbs.jsx";
import Image from "next/image.js";
import { TbCloudCog } from "react-icons/tb";
import BizPerksCard from "../../../../components/BizPerksCard.jsx";
import { Hsas, Hc, Sds, Rnr } from "../../../../components/icons";
import { FiPhoneCall } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Link from "next/link.js";
import { FaLaptop, FaChevronRight } from "react-icons/fa6";
import {
  bizsoldata,
  unbeatftdata,
  stepspbx,
} from "../../../lib/data/cloudpbxdata.jsx";

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
        // icon={
        //   <TbCloudCog className="md:text-[200px] lg:text-[300px] text-customColors-porcelain" />
        // }
        title="Cloud PBX / Hosted PBX platform and Cloud Call Center with Netswitch"
        btntxt="contact us"
        description="Deliver a business communication environment to your SMB and enterprise customers with NetSwitch voice, video, CCaaS, CRM integrations, and more."
        height="h-[600px]"
      />
      {/* in todays pbx mkt */}
      <section className="bg-customColors-porcelain pt-10 pb-10 min-h-96">
        <div className="container">
          <Breadcrumbs crumbs={crumbs} />
          {/* in todays softphone mkt*/}
          <div className="my-10 grid sm:grid-cols-1 md:grid-cols-2">
            <div className="grid p-8">
              <p className="text-4xl text-primary font-semibold mb-7">
                In today’s PBX market...
              </p>
              <p className="text-lg text-customColors-dovegray font-medium leading-relaxed">
                Hosted PBX and cloud-based PBX / UCaaS providers are losing
                money, losing their competitive advantage, and losing control
                over their solutions – and their customers.{" "}
                <b className="tracking-wide text-xl">
                  They know that it’s no longer possible to offer only ‘cheap
                  voice calls’ or ‘cloud PBX’ and expect to be competitive or
                  profitable.
                </b>
              </p>
              <p className="my-[27px] text-lg text-customColors-dovegray font-medium leading-relaxed">
                If this sounds familiar, you might be experiencing the
                following:
              </p>
              <div className="grid gap-4">
                <div className="flex gap-4">
                  <div className="flex">
                    <div className="h-[72px] w-[72px] bg-customColors-hitgray/60 rounded-full flex justify-center items-center">
                      <FaLaptop className="text-5xl text-customColors-porcelain" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      You’ve been forced to move to SaaS
                    </h3>
                    <p className="text-customColors-dovegray col-span-4  text-lg">
                      so you don’t control product development, integration, or
                      troubleshooting. You’re left to resell the same solutions
                      as your competitors, locked out of the ability to offer
                      popular new tools like CCaaS.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex">
                    <div className="h-[72px] w-[72px] bg-customColors-hitgray/60 rounded-full flex justify-center items-center">
                      <FaLaptop className="text-5xl text-customColors-porcelain" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      Your PBX provider has been acquired
                    </h3>
                    <p className="text-customColors-dovegray col-span-4  text-lg">
                      by a large corporation that is less worried about updates.
                      That means you’re losing new sales as your system becomes
                      more and more outdated.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex">
                    <div className="h-[72px] w-[72px] bg-customColors-hitgray/60 rounded-full flex justify-center items-center">
                      <FaLaptop className="text-5xl text-customColors-porcelain" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      Your customers are fleeing
                    </h3>
                    <p className="text-customColors-dovegray col-span-4  text-lg">
                      to new-age platforms such as WhatsApp, Slack, or MS Teams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[50px] mt-5 mx-8 mb-8 p-10 bg-white">
              {/* pic */}
              <div className="w-full flex mb-5">
                <div className="w-52 h-52 overflow-hidden rounded-full flex">
                  <Image
                    height={500}
                    width={500}
                    src="/about2.jpeg"
                    alt="image"
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-customColors-fiord text-2xl font-semibold">
                  Michelle Igwe
                </p>
                <p className="text-primary text-lg font-medium mt-1 mb-5">
                  Nethub Head of Marketing
                </p>
              </div>
              <p className="text-lg text-customColors-dovegray mb-[33px]">
                Cloud PBX customers are demanding more functionality, cheaper
                prices, and additional cloud contact center seats from CSPs –
                all while per-seat and per-active-call licensing fees drive
                margins downward and put the squeeze on growth.
              </p>
              <p className="text-lg text-customColors-dovegray">
                NetSwitch comes with the very unique offering of an{" "}
                <b>
                  unlimited perpetual license: we do not charge you per
                  subscriber
                </b>
                , so you can maintain a predictable total cost of ownership.
                That means your business telephony service can grow with your
                customers – while your profits grow, too.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* cloud pbx and call center */}
      <section className="bg-white pt-10 pb-10">
        <div className="container">
          <div className="my-10 grid sm:grid-cols-1 md:grid-cols-2">
            <div className="">
              <div className="flex flex-col gap-4">
                <p className="uppercase text-2xl tracking-widest">
                  Nethub Cloud PBX & Call Center
                </p>
                <p className="text-primary text-5xl font-semibold tracking-wide leading-normal">
                  Integrated business communication solution
                </p>
                <p className="font-semibold text-lg tracking-wide">
                  Become a next-generation provider of communication services by
                  delivering an integrated business cloud telephony solution
                  that your SMB and enterprise customers will be excited about.
                </p>
              </div>
            </div>
            <div className="font-bold md:flex gap-5 items-center justify-center hidden ml-14">
              <div className="bg-customColors-loblolly/85 p-12 rounded-full grid">
                <FiPhoneCall className=" md:text-[200px] text-white -scale-x-100" />
              </div>
            </div>
          </div>
          {/* voice perks */}
          <div className="my-14 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            {bizsoldata.map(({ title, icon, content }, index) => {
              return (
                <div className="p-5" key={index}>
                  <BizPerksCard title={title} icon={icon} content={content} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* unbeatable features */}
      <section className="bg-customColors-porcelain py-20 min-h-96">
        <div className="container">
          <h3 className="text-customColors-fiord text-5xl font-semibold">
            unbeatable features
          </h3>
          <div className="my-12 grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1">
            {unbeatftdata.map(({ title, icon, content, titlecolor }, index) => {
              return (
                <div className="p-2" key={index}>
                  <BizPerksCard
                    title={title}
                    icon={icon}
                    content={content}
                    titlecolor="text-primary"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* why choose nethub */}
      <section className="py-16 bg-customColors-fiord text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div className="">
              <h3 className="text-4xl font-semibold mb-7">
                Why choose Nethub?
              </h3>
              <p className="text-lg font-bold tracking-wide mb-10">
                We promise and deliver the best value and fair pricing.
              </p>
              <p className="text-lg tracking-wide">
                With our convergent billing and online charging system plus
                class 4 and 5 SIP softswitch you can expect flexibility,
                transparency, and our full investment in your success.
              </p>
            </div>
            <div className="grid place-content-center">
              <div className="w-full flex">
                <div className="w-72 h-72 overflow-hidden rounded-full flex">
                  <Image
                    height={600}
                    width={600}
                    src="/about2.jpeg"
                    alt="image"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 my-14">
            {unbeatftdata.map(
              ({ icon, title, content, titlecolor, contentcolor }) => {
                return (
                  <BizPerksCard
                    key={title}
                    title={title}
                    content={content}
                    icon={icon}
                    bgcolor="bg-customColors-fiord"
                    contentcolor="text-white"
                    titlecolor="text-primary"
                  />
                );
              }
            )}
          </div>
        </div>
      </section>
      {/* steps to managing cloudpbx */}
      <section className="min-h-56 py-16">
        <div className="container">
          <h3 className="text-primary text-3xl font-semibold mb-8">
            4 steps to managing your cloud PBX – from idea to earnings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-7 lg:gap-10 my-16">
            {stepspbx.map(
              ({
                icon,
                title,
                content,
                bgcolor,
                fontsize,
                fontweight,
                txtcolor,
              }) => {
                return (
                  <BizPerksCard
                    key={title}
                    title={title}
                    content={content}
                    icon={icon}
                    bgcolor={bgcolor}
                    txtcolor={txtcolor}
                    fontsize={fontsize}
                    fontweight={fontweight}
                  />
                );
              }
            )}
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
  fontsize,
}) => {
  return (
    <>
      <div
        className={`w-full ${
          height ? height : "h-[600px]"
        } bg-cover bg-no-repeat`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="imgoverlay h-full">
          <div className="container grid sm:grid-cols-1 md:grid-cols-2 gap-5 h-full">
            {/* icon */}
            <div className="hidden md:flex justify-center items-center">
              {icon}
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
                    fontsize ? fontsize : "lg:text-5xl"
                  } font-bold tracking-wider`}
                >
                  {title}
                </h3>
                <p className="text-white lg:text-xl leading-relaxed">
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

export default CloudPbxandCallCenter;
