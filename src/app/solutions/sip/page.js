import React from "react";
import Breadcrumbs from "../../../../components/Breadcrumbs.jsx";
import PageHeader from "../../../../components/PageHeader.jsx";
import BizPerksCard from "../../../../components/BizPerksCard.jsx";
import { Button } from "@/components/ui/button.jsx";
import { disBstWay, whatsinit, whynethubdata } from "@/lib/data/sipdata.jsx";
import { FaChevronRight } from "react-icons/fa6";
import { MdDialerSip } from "react-icons/md";
import Link from "next/link.js";

const Sip = () => {
  // SIP solutions page breadcrumbs
  const crumbs = [
    { title: "home", href: "/" },
    { title: "solutions", href: "/solutions" },
    { title: "SIP", href: "#" },
  ];
  return (
    <div>
      {/* meta data and title */}
      <head>
        <title>SIP Trunking</title>
        <meta
          name="Nethub's NetSwitch for SIP Trunking Providers"
          content="Offer enterprise PBX and call center connectivity, resell phone numbers (DID), protect yourself and users with anti-fraud tools, and implement custom scenarios via a programmable voice API, all via NetSwitch."
        />
      </head>
      <PageHeader
        image="/sip.jpg"
        title="NetSwitch for SIP Trunking Providers"
        fontsize="lg:text-5xl"
        // pre_title="company overview"
        icon={<MdDialerSip />}
        btntxt="contact us"
        description="Offer enterprise PBX and call center connectivity, resell phone numbers (DID), protect yourself and users with anti-fraud tools, and implement custom scenarios via a programmable voice API, all via NetSwitch"
        height=""
      />
      {/* SIP solutions content */}
      <section className="bg-customColors-porcelain pt-10 pb-10 min-h-96">
        <div className="container">
          <Breadcrumbs crumbs={crumbs} />
          {/* profitable sip*/}
          <div className="my-10 grid sm:grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-[30px]">
              <p className="text-4xl text-primary font-semibold mb-8">
                Your SIP trunking services can be more profitable
              </p>
              <p className="text-customColors-dovegray text-lg mb-4">
                As a SIP trunking provider, you are constantly fighting tight
                margins, high churn, and revenue leakage. Margins on your core
                services are low, hungry new competitors are always pitching a
                lower price, and your enterprise customers are demanding the
                latest PBX features before you’re ready to offer them. Here’s
                the good news: there is a clear pathway to profitability!
              </p>
              <p className="text-customColors-dovegray text-lg">
                NetSwitch is a customizable, scalable PBX/UCaaS platform that
                can help you design targeted, tailored packages for the
                businesses and call centers within your specific market. More
                importantly,{" "}
                <span className="font-semibold">
                  since Nethub does not offer VoIP connectivity and resells no
                  SIP trunks,
                </span>{" "}
                you can deal with any carriers and termination partners of your
                choice, and get the best bargains you can find on your own. And
                with our flexible pricing models, 7-week software update
                schedule, and open API, you can scale and adapt as quickly as
                you need to.
              </p>
            </div>
            {/* review */}
            <div className="rounded-[50px] mt-5 mx-8 mb-8 p-10 bg-white">
              <div>
                <p className="text-customColors-fiord text-2xl font-semibold">
                  Michelle Igwe
                </p>
                <p className="text-primary text-lg font-medium mt-1 mb-5">
                  Marketing Manager at Nethub
                </p>
              </div>
              <p className="italic text-[22px] text-customColors-dovegray mb-[33px]">
                Over The Top (OTT) communication has rapidly become one of the
                most popular ways for end users to send and receive audio,
                voice, share files, and collaborate – all while using the
                Internet.
              </p>
              <p className="italic text-[22px] text-customColors-dovegray">
                The explosive demand for OTT services and software can mean big
                opportunities for UCaaS providers.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Discover a better way */}
      <section className="py-16">
        <div className="container">
          <h3 className="text-5xl text-primary font-semibold mb-8">
            Discover a better way
          </h3>
          <p className="text-3xl tracking-wide text-customColors-dovegray">
            If you’re ready to change all of that, then Nethub is here to help.
            We can offer a software solution for your SIP trunking business that
            will:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5 lg:gap-8 my-16">
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
      {/* whats in it for you */}
      <section className="py-16 bg-customColors-porcelain">
        <div className="container">
          <h3 className="text-5xl text-primary font-semibold mb-8">
            What&apos;s in it for you?
          </h3>
          <p className="text-xl font-medium tracking-wide">
            See why SIP trunking providers are choosing NetSwitch to provide
            enterprise PBX, call center connectivity, and more.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5 lg:gap-8 my-16">
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
      {/* why choose Nethub */}
      <section className="py-16 bg-customColors-fiord">
        <div className="container text-white ">
          <h3 className="text-5xl font-semibold mb-8">Why choose Nethub?</h3>
          <p className="text-xl font-medium tracking-wide">
            What makes NetSwitch the go-to for SIP trunking in a competitive
            market?
          </p>
          <p className="text-xl font-medium tracking-wide">
            Allow us to highlight how we differentiate ourselves from the pack.
          </p>
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
    </div>
  );
};

export default Sip;
