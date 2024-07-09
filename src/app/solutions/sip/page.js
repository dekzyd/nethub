import React from "react";
import Breadcrumbs from "../../../../components/Breadcrumbs.jsx";
import PageHeader from "../../../../components/PageHeader.jsx";
import { MdDialerSip } from "react-icons/md";
import BizPerksCard from "../../../../components/BizPerksCard.jsx";
import { Hsas, Hc, Sds, Rnr } from "../../../../components/icons";
import { FiPhoneCall } from "react-icons/fi";

const Sip = () => {
  // SIP solutions page breadcrumbs
  const crumbs = [
    { title: "home", href: "/" },
    { title: "solutions", href: "/solutions" },
    { title: "SIP", href: "#" },
  ];
  return (
    <div>
      <PageHeader
        image="/sip.jpg"
        title="NetSwitch for SIP Trunking Providers"
        fontsize="lg:text-5xl"
        // pre_title="company overview"
        // icon={
        //   <MdDialerSip className="md:text-[180px] lg:text-[230px] text-customColors-porcelain" />
        // }
        btntxt="contact us"
        description="Offer enterprise PBX and call center connectivity, resell phone numbers (DID), protect yourself and users with anti-fraud tools, and implement custom scenarios via a programmable voice API, all via NetSwitch"
        height=""
      />
      {/* SIP solutions content */}
      <section className="bg-white pt-10 pb-10 ">
        <div className="container">
          <Breadcrumbs crumbs={crumbs} />
        </div>
      </section>
    </div>
  );
};

export default Sip;
