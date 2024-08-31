import Link from "next/link.js";
import { Button } from "@/components/ui/button.jsx";
import { FaAngleRight } from "react-icons/fa6";
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

{
  /* meta data and title */
}
export const metadata = {
  title: "DID Provisioning",
  content:
    "Resell inbound DIDs (local, toll-free, premium and international) to call centers, enterprises and residential customers. Manage DID inventory or use on-demand number acquisition to reduce costs",
};

const Did = () => {
  // Did Management solutions page breadcrumbs
  const crumbs = [
    { title: "home", href: "/" },
    { title: "solutions", href: "/solutions" },
    { title: "DID Management" },
  ];
  return (
    <div>
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
            <div className="rounded-[50px] mt-5  mx-4 md:mx-8 mb-8 px-7 py-10 lg:p-14 bg-white">
              <div>
                <p className="text-customColors-fiord text-2xl font-semibold">
                  Suleiman Babayo
                </p>
                <p className="text-primary text-lg font-medium mt-1 mb-5">
                  Commercial Director at Nethub Telecoms
                </p>
              </div>
              <p className=" text-lg md:text-[20px] text-customColors-dovegray mb-[33px]">
                Nethub provides IT & Telecom solutions for international call
                centers that help reduce operations cost & improve revenue
                generation and multi-channel management.
              </p>
              <p className=" text-lg md:text-[20px] text-customColors-dovegray">
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
            <p className="text-white text-4xl lg:text-[44px] font-bold drop-shadow-md">
              Having trouble managing your DID inventory?
            </p>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {havingtroubles.map(({ title, content, icon }) => {
                return (
                  <BizPerksCard
                    key={title}
                    content={content}
                    icon={icon}
                    title={title}
                    titlecolor="text-black"
                    contentcolor="text-black"
                    hoverbgcolor="hover:bg-[#a0b0b5]"
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
      <section className="p-8 md:p-16">
        <div className="container">
          <h3 className="text-4xl lg:text-5xl text-primary font-semibold mb-6">
            Discover a better way
          </h3>
          <p className="text-lg lg:text-xl tracking-wide text-black">
            NetSwitch combines the top technologies to improve operations for
            telecom providers. With us you can:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 lg:gap-8 my-16">
            {disBstWay.map(({ icon, title, content, bgcolor }) => {
              return (
                <BizPerksCard
                  key={title}
                  title={title}
                  content={content}
                  icon={icon}
                  bgcolor={bgcolor}
                />
              );
            })}
          </div>
          <div>
            <p className="mb-3 font-medium text-lg">
              Ready to talk? Let’s arrange a demo via a personal call or online
              presentation.
            </p>

            <Link href="#contact">
              <Button className="w-auto font-semibold font-Open_sans uppercase">
                contact us
                <FaAngleRight className="ml-1 -mt-[1px] text-[12px] font-bold" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* whats in it  */}
      <section className="xl:p-20 lg:p-16 p-8 bg-customColors-porcelain">
        <div className="container">
          <h3 className="text-4xl lg:text-5xl text-primary font-semibold my-6">
            What&apos;s in it for you?
          </h3>
          <p className="text-lg lg:text-xl font-medium tracking-wide">
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
      <section className="xl:p-20 lg:p-16 p-8 bg-customColors-fiord">
        <div className="container text-white ">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* written */}
            <div>
              <h3 className="text-4xl lg:text-5xl font-semibold mb-10">
                Why choose Nethub?
              </h3>
              <p className="text-lg lg:text-xl font-medium tracking-wide">
                What has made so many telecom providers join the community of
                NetSwitch users when providing DID management provisioning?
              </p>
            </div>
            {/* pic */}
            <div className="w-full flex justify-center mt-10">
              <div className="h-52 w-52 lg:w-72 lg:h-72 overflow-hidden rounded-full flex">
                <Image
                  height={500}
                  width={500}
                  src="/whynethub2.jpg"
                  alt="image"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 lg:gap-8 mt-10">
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
