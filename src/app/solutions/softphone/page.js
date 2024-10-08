import React from "react";
import Image from "next/image.js";
import Breadcrumbs from "../../../../components/Breadcrumbs.jsx";
import PageHeader from "../../../../components/PageHeader.jsx";
import BizPerksCard from "../../../../components/BizPerksCard.jsx";
import { FaChevronRight } from "react-icons/fa6";
import { ImMobile } from "react-icons/im";
import { IoHappyOutline } from "react-icons/io5";
import { MdOutlineSwitchAccessShortcutAdd } from "react-icons/md";
import { TbDeviceMobileCog } from "react-icons/tb";
import {
  CycleIcon,
  StarIcon,
  HandInWaterIcon,
} from "../../../../components/icons.jsx";
import {
  disBstWay,
  whynetPhone,
  easyToStrt,
} from "@/lib/data/softphonedata.jsx";
import { Button } from "@/components/ui/button.jsx";
import Link from "next/link.js";

{
  /* meta data and title */
}
export const metadata = {
  title: "Softphone Solution",
  description:
    "Offer new-generation UCaaS using a white-label softphone app for any device via WebRTC",
};

const Softphone = () => {
  // softphone solutions page breadcrumbs
  const crumbs = [
    { title: "home", href: "/" },
    { title: "solutions", href: "/solutions" },
    { title: "Softphone" },
  ];

  return (
    <div>
      <PageHeader
        image="/softphone2.jpg"
        title="Cloud Softphone Solution with NetPhone Web & Mobile Apps"
        // pre_title="company overview"
        icon={<ImMobile />}
        btntxt="contact us"
        description="Offer new-generation UCaaS using a white-label softphone app for any device via WebRTC"
        height=""
      />
      {/* Voice solutions content */}
      <section className="bg-customColors-porcelain pt-10 pb-10 min-h-96">
        <div className="container">
          <Breadcrumbs crumbs={crumbs} />
          {/* in todays softphone mkt*/}
          <div className="my-10 grid sm:grid-cols-1 md:grid-cols-2 font-Open_sans ">
            <div className="p-10">
              <p className="text-[38px] -tracking-[0.4px] leading-[48.6px] text-primary mb-7 font-semibold font-sans">
                In today’s softphone market...
              </p>
              <p className="text-lg font-medium mb-6">
                Many CSPs and MSPs are having trouble competing and monetizing
                OTT solutions and are in danger of getting left behind.
              </p>
              <div className="grid gap-10">
                <div className="flex gap-4">
                  <div className="flex ">
                    <div className="h-[80px] w-[80px] bg-white rounded-full flex justify-center items-center">
                      <CycleIcon fill="var(--hitgray)" />
                    </div>
                  </div>
                  <p className="text-customColors-dovegray col-span-4 leading-[28.8px] text-[18px]">
                    The biggest vendors and providers of softphones are closing
                    down, slowing development, or becoming direct competitors of
                    smaller CSPs
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="flex">
                    <div className="h-[80px] w-[80px] bg-white rounded-full flex justify-center items-center">
                      <StarIcon fill="var(--hitgray)" />
                    </div>
                  </div>
                  <p className="text-customColors-dovegray leading-[28.8px] text-[18px]">
                    End-users are choosing new-age OTT and UCaaS services, with
                    features absent from traditional telecom solutions
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="flex">
                    <div className="h-[80px] w-[80px] bg-white rounded-full flex justify-center items-center">
                      <HandInWaterIcon fill="var(--hitgray)" />
                    </div>
                  </div>
                  <p className="text-customColors-dovegray col-span-4 leading-[28.8px] text-[18px]">
                    And they’re losing revenue due to a lack of differentiation
                    in their offers and therefore a lack of monetization
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[50px] mt-5  mx-4 md:mx-8 mb-8 px-7 py-10 lg:p-14 bg-white">
              <div className="w-full flex mb-5">
                <div className="w-52 h-52 overflow-hidden rounded-full flex">
                  <Image
                    height={300}
                    width={300}
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
                  Marketing Manager at Nethub
                </p>
              </div>
              <p className="italic text-lg md:text-[22px] text-customColors-dovegray mb-[33px]">
                Over The Top (OTT) communication has rapidly become one of the
                most popular ways for end users to send and receive audio,
                voice, share files, and collaborate – all while using the
                Internet.
              </p>
              <p className="italic text-lg md:text-[22px] text-customColors-dovegray">
                The explosive demand for OTT services and software can mean big
                opportunities for UCaaS providers.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* discover a better way */}
      <section className="py-16">
        <div className="container">
          <h3 className="text-4xl lg:text-5xl text-primary font-semibold mb-8">
            Discover a better way
          </h3>
          <p className="text-2xl lg:text-3xl tracking-wide text-customColors-dovegray">
            Increase the tools in your UCaaS toolkit with NetPhone and deliver
            users a seamless experience they’ll prefer over WhatsApp or
            Messenger.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 lg:gap-10 my-16">
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
          <p className="text-lg">
            Ready to talk? Let’s arrange a demo via a personal call or online
            presentation.
          </p>
          <Button className="mt-4 uppercase font-semibold">
            <Link href="#footer">
              <p className="flex items-center gap-2">
                contact us
                <span className="text-xs">
                  <FaChevronRight />
                </span>
              </p>
            </Link>
          </Button>
        </div>
      </section>
      {/* why choose netphone */}
      <section className="py-16  bg-customColors-porcelain">
        <div className="container">
          <h3 className="text-4xl lg:text-5xl text-primary font-semibold mb-8">
            Why choose NetPhone?
          </h3>
          <p className="text-2xl lg:text-3xl tracking-wide text-customColors-dovegray">
            With Nethub’s cloud softphone solution, you’ll get unmatched
            flexibility when customizing and reduced operational efforts, making
            for unparalleled convenience and value for end-users.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 my-14">
            {whynetPhone.map(({ icon, title, content }) => {
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
          <p className="text-lg">
            Make PortaPhone part of your Cloud PBX platform and launch at
            minimal costs to you.
          </p>
          <Button className="mt-4 uppercase font-semibold">
            <Link href="/solutions/cloudpbx">
              <p className="flex items-center gap-2">
                more about our cloud pbx solution{" "}
                <span className="text-xs">
                  <FaChevronRight />
                </span>
              </p>
            </Link>
          </Button>
        </div>
      </section>
      {/* easy to start */}
      <section className="min-h-56 py-16">
        <div className="container">
          <h3 className="text-primary text-3xl lg:text-4xl font-semibold mb-8">
            Easy to start, great to use...
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-7 lg:gap-10 my-16">
            {easyToStrt.map(
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
          <p className="text-lg">
            Check out just how easy it is to get started with NetPhone by
            contacting us.
          </p>
          <Button className="mt-4 uppercase font-semibold">
            <Link href="#footer">
              <p className="flex items-center gap-2">
                contact us
                <span className="text-xs">
                  <FaChevronRight />
                </span>
              </p>
            </Link>
          </Button>
        </div>
      </section>
      {/* how you benefit */}
      <section className="bg-customColors-porcelain pt-10 pb-10">
        <div className="container">
          <div className="my-10 grid sm:grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
            <div className="grid gap-7 lg:h-[488px]">
              <p className="text-4xl lg:text-5xl text-primary font-semibold">
                How you benefit
              </p>
              <div className="flex gap-4">
                <div className="flex">
                  <div className="h-[80px] w-[80px] bg-white rounded-full flex justify-center items-center">
                    <TbDeviceMobileCog className="text-5xl text-customColors-hitgray" />
                  </div>
                </div>
                <div>
                  <p className="text-2xl text-customColors-fiord mb-3">
                    Optimize your daily operations
                  </p>
                  <p className="text-customColors-dovegray col-span-4  text-lg">
                    with mobile app auto-provision and real-time call monitoring
                    and alerts
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex">
                  <div className="h-[80px] w-[80px] bg-white rounded-full flex justify-center items-center">
                    <MdOutlineSwitchAccessShortcutAdd className="text-5xl text-customColors-hitgray" />
                  </div>
                </div>
                <div>
                  <p className="text-2xl text-customColors-fiord mb-3">
                    Increase profitability
                  </p>
                  <p className="text-customColors-dovegray col-span-4  text-lg">
                    with real-time authorization and overdraft protection,
                    charging for VAS, and profit guarantee function.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex">
                  <div className="h-[80px] w-[80px] bg-white rounded-full flex justify-center items-center">
                    <IoHappyOutline className="text-5xl text-customColors-hitgray" />
                  </div>
                </div>
                <div>
                  <p className="text-2xl text-customColors-fiord mb-3">
                    Make your customers happy
                  </p>
                  <p className="text-customColors-dovegray col-span-4  text-lg">
                    easy transition and setup, plus comprehensive call
                    management
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[50px] mt-5  mx-4 md:mx-8 mb-8 px-7 py-10 lg:p-14 bg-white">
              <div>
                <p className="text-customColors-fiord text-2xl font-semibold">
                  Simeon Aduragba
                </p>
                <p className="text-primary text-lg font-medium mt-1 mb-5">
                  Marketing Manager at Nethub
                </p>
              </div>
              <p className="italic text-lg md:text-[22px] text-customColors-dovegray mb-[33px]">
                “During the COVID crisis, many of our customers had to send
                their employees to work from home.
              </p>
              <p className="italic text-lg md:text-[22px] text-customColors-dovegray">
                With NetPhone we were able to offer them a reliable way to
                continue working. Our WebRTC app allowed them to quickly respond
                to rapidly changing market demands and to continue operating
                during difficult times.”
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Softphone;
