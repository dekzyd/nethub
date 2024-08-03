import BizPerksCard from "../../../../components/BizPerksCard.jsx";
import Breadcrumbs from "../../../../components/Breadcrumbs.jsx";
import PageHeader from "../../../../components/PageHeader.jsx";
import { MdOutlineNetworkCheck } from "react-icons/md";
import { Hsas, Hc, Sds, RocketIcon } from "../../../../components/icons";

const InternetSolutions = () => {
  const internetcrumbs = [
    { title: "home", href: "/" },
    { title: "solutions", href: "/solutions" },
    { title: "internet solutions", href: "#" },
  ];

  return (
    <div>
      {/* meta data and title */}
      <head>
        <title>Internet solution</title>
        <meta
          name="Nethub's Internet solutions"
          content="Offer enterprise PBX and call center connectivity, resell phone numbers (DID), protect yourself and users with anti-fraud tools, and implement custom scenarios via a programmable voice API, all via NetSwitch."
        />
      </head>
      <PageHeader
        image="/internet.jpeg"
        title="Internet solution"
        // pre_title="company overview"
        // icon={
        //   <MdOutlineNetworkCheck className="md:text-[200px] lg:text-[250px] text-customColors-porcelain" />
        // }
        height=""
      />
      {/* Internet solutions content */}
      <section className="bg-white pt-10 pb-10 ">
        <div className="container">
          <Breadcrumbs crumbs={internetcrumbs} />
          <div className="my-10 grid sm:grid-cols-1 md:grid-cols-2">
            <div className="">
              <div className="flex flex-col gap-4">
                <p className="uppercase font-medium text-2xl tracking-widest">
                  Nethub&apos;s Internet solutions
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
            <div className="bg-slate-100 font-bold grid place-content-center">
              icon
            </div>
          </div>
          {/* voice perks */}
          <div className="my-14 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            <BizPerksCard
              icon={<RocketIcon fill="#9EAEB4" />}
              // bgcolor="bg-customColors-fiord"
              title="no hidden costs"
              content="Use our cloud marketplace to expand your range of value-added services and create irresistible 'a la carte' bundles & solutions for niche enterprise markets"
            />
            <BizPerksCard
              icon={<RocketIcon fill="#9EAEB4" />}
              title="Increase your revenue"
              content="Use our cloud marketplace to expand your range of value-added services and create irresistible 'a la carte' bundles & solutions for niche enterprise markets"
            />
            <BizPerksCard
              icon={<RocketIcon fill="#9EAEB4" />}
              title="Stay agile and flexible"
              content="Use our cloud marketplace to expand your range of value-added services and create irresistible 'a la carte' bundles & solutions for niche enterprise markets"
            />
            <BizPerksCard
              icon={<RocketIcon fill="#9EAEB4" />}
              title="Monetize any service"
              content="Use our cloud marketplace to expand your range of value-added services and create irresistible 'a la carte' bundles & solutions for niche enterprise markets"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternetSolutions;
