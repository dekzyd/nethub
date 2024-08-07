import React from "react";
import Breadcrumbs from "../../../../components/Breadcrumbs.jsx";
import PageHeader from "../../../../components/PageHeader.jsx";
import { havingtroubles } from "../../../lib/data/diddata.jsx";
import BizPerksCard from "../../../../components/BizPerksCard.jsx";
import { IoKeypad } from "react-icons/io5";
import {
  disBstWay,
  whatsinit,
  whynethubdata,
} from "../../../lib/data/diddata.jsx";
import Image from "next/image.js";

const Did = () => {
  // Did Management solutions page breadcrumbs
  const crumbs = [
    { title: "home", href: "/" },
    { title: "solutions", href: "/solutions" },
    { title: "DID Management", href: "#" },
  ];
  return (
    <div>
      {/* meta data and title */}
      <head>
        <title>DID Provisioning</title>
        <meta
          name="Nethub's DID Provisioning"
          content="Resell inbound DIDs (local, toll-free, premium and international) to call centers, enterprises and residential customers. Manage DID inventory or use on-demand number acquisition to reduce costs"
        />
      </head>
      <PageHeader
        image="/did3.jpeg"
        title="Build a DID trading platform using NetSwitch"
        icon={
          <IoKeypad className="md:text-[150px] lg:text-[230px] text-customColors-porcelain" />
        }
        btntxt="contact us"
        description="Resell inbound DIDs (local, toll-free, premium and international) to call centers, enterprises and residential customers. Manage DID inventory or use on-demand number acquisition to reduce costs."
        height=""
      />
      {/* DID mgmt solutions content */}
      <section className="bg-customColors-porcelain pt-10 pb-10 ">
        <div className="container">
          <Breadcrumbs crumbs={crumbs} />
          {/* what is did mgmt */}
          <div className="my-10 grid sm:grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-[30px]">
              <p className="text-4xl text-primary font-semibold mb-8">
                What is DID management?
              </p>
              <p className="text-customColors-dovegray text-[18px] mb-4 tracking-wide">
                Manage local, toll-free and international phone numbers (aka DID
                – Direct Inward Dialing numbers) to be delivered to your hosted
                PBX or SIP trunking customers. Enjoy flexible monetization based
                on volumes of minutes, trunks, numbers, etc. Take advantage of
                rich features such as customized call flows via API and easily
                integrate with your CRM via low-code tools that automate and
                streamline repeated functions and tasks.
              </p>
              <p className="text-customColors-dovegray text-[18px] tracking-wide">
                Quickly and easily build integrations with systems that provide
                phone numbers, reducing the hassles you suffer each time you
                want to offer your customers DIDs from a new country. Plus enjoy
                the flexibility of defining your own markup price and each time
                you offer your customers other countries’ DIDs, use the same
                configuration. Set it and forget it.
              </p>
            </div>
            {/* review */}
            <div className="rounded-[50px] mt-5 mx-8 mb-8 p-14 bg-white">
              <div>
                <p className="text-customColors-fiord text-2xl font-semibold">
                  Suleiman Babayo
                </p>
                <p className="text-primary text-lg font-medium mt-1 mb-5">
                  Commercial Director at Nethub Telecoms
                </p>
              </div>
              <p className=" text-[20px] text-customColors-dovegray mb-[33px]">
                Nethub provides IT & Telecom solutions for international call
                centers that help reduce operations cost & improve revenue
                generation and multi-channel management.
              </p>
              <p className=" text-[20px] text-customColors-dovegray">
                We were VERY impressed with Nethub as a company and the
                NetSwitch equipment was superbly engineered, reliable and hugely
                flexible.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* having trouble */}
      <section className="bg-[#a0b0b5] min-h-56 pt-12 pb-16">
        <div className="container">
          <div className="p-5 grid gap-5">
            <p className="text-white text-[44px] font-bold drop-shadow-md">
              Having trouble managing your DID inventory?
            </p>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {havingtroubles.map(({ title, content }) => {
                return (
                  <BizPerksCard
                    key={title}
                    content={content}
                    title={title}
                    titlecolor="text-black"
                    contentcolor="text-black"
                  />
                );
              })}
            </div>
            <p className="text-white text-[18px] font-semibold">
              Our 20+ years of experience says you need an easy-to-use DID
              management solution. Learn more about how we can help your company
              operate more efficiently, increase sales, generate more revenue
              and give your customers a better user experience.
            </p>
          </div>
        </div>
      </section>
      {/* better way */}
      <section className="py-16">
        <div className="container">
          <h3 className="text-5xl text-primary font-semibold mb-6">
            Discover a better way
          </h3>
          <p className="text-xl tracking-wide text-black">
            NetSwitch combines the top technologies to improve operations for
            telecom providers. With us you can:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 lg:gap-8 my-16">
            {disBstWay.map(({ icon, title, content }) => {
              return (
                <BizPerksCard
                  key={title}
                  title={title}
                  content={content}
                  icon={icon}
                />
              );
            })}
          </div>
        </div>
      </section>
      {/* whats in it  */}
      <section className="py-16 bg-customColors-porcelain">
        <div className="container">
          <h3 className="text-5xl text-primary font-semibold mb-6">
            What&apos;s in it for you?
          </h3>
          <p className="text-xl font-medium tracking-wide">
            Reduce costs by outsourcing implementation of custom scenarios to
            customers or 3rd parties. We also maintain the platform, so you save
            on hardware purchasing, hosting, provisioning, and maintenance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 my-16">
            {whatsinit.map(({ icon, title, content }) => {
              return (
                <BizPerksCard
                  key={title}
                  title={title}
                  content={content}
                  icon={icon}
                />
              );
            })}
          </div>
        </div>
      </section>
      {/* why nethub */}
      <section className="py-16 bg-customColors-fiord">
        <div className="container text-white ">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* written */}
            <div>
              <h3 className="text-5xl font-semibold mb-8">
                Why choose Nethub?
              </h3>
              <p className="text-xl font-medium tracking-wide">
                What has made so many telecom providers join the community of
                NetSwitch users when providing DID management provisioning?
              </p>
              <p className="text-xl font-medium tracking-wide">
                Allow us to highlight how we differentiate ourselves from the
                pack.
              </p>
            </div>
            {/* pic */}
            <div className="w-full flex justify-center">
              <div className="w-72 h-72 overflow-hidden rounded-full flex">
                <Image
                  height={500}
                  width={500}
                  src="/about2.jpeg"
                  alt="image"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 lg:gap-8 my-16">
            {whynethubdata.map(({ icon, title, content }) => {
              return (
                <BizPerksCard
                  key={title}
                  title={title}
                  content={content}
                  bgcolor="bg-customColors-fiord"
                  icon={icon}
                  titlecolor="text-primary"
                  contentcolor="text-white"
                />
              );
            })}
          </div>
        </div>
      </section>
      {/* 6 steps */}
    </div>
  );
};

export default Did;
