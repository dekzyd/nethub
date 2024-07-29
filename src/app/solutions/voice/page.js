import Breadcrumbs from "../../../../components/Breadcrumbs.jsx";
import PageHeader from "../../../../components/PageHeader.jsx";
import { RiVoiceprintLine } from "react-icons/ri";
import BizPerksCard from "../../../../components/BizPerksCard.jsx";
import { DiamondIcon } from "../../../../components/icons";
import { FiPhoneCall } from "react-icons/fi";

const VoiceSolutions = () => {
  // voice solutions page breadcrumbs
  const voicecrumbs = [
    { title: "home", href: "/" },
    { title: "solutions", href: "/solutions" },
    { title: "voice solutions", href: "#" },
  ];
  return (
    <div>
      <PageHeader
        image="/voice.jpg"
        title="Voice solutions"
        // pre_title="company overview"
        // icon={
        //   <RiVoiceprintLine className="md:text-[200px] lg:text-[250px] text-customColors-porcelain" />
        // }
        btntxt="contact us"
        description="Deliver a business communication environment to your SMB and enterprise customers with NetSwitch – voice, video, CCaaS, CRM integrations, and more."
        height=""
      />
      {/* Voice solutions content */}
      <section className="bg-white pt-10 pb-10 ">
        <div className="container">
          <Breadcrumbs crumbs={voicecrumbs} />
          <div className="my-10 grid sm:grid-cols-1 md:grid-cols-2">
            <div className="">
              <div className="flex flex-col gap-4">
                <p className="uppercase font-medium text-2xl tracking-widest">
                  Nethub&apos;s voice solutions
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
              icon={<DiamondIcon fill="#9EAEB4" />}
              // bgcolor="bg-customColors-fiord"
              title="no hidden costs"
              content="Use our cloud marketplace to expand your range of value-added services and create irresistible 'a la carte' bundles & solutions for niche enterprise markets"
            />
            <BizPerksCard
              icon={<DiamondIcon fill="#9EAEB4" />}
              title="Increase your revenue"
              content="Use our cloud marketplace to expand your range of value-added services and create irresistible 'a la carte' bundles & solutions for niche enterprise markets"
            />
            <BizPerksCard
              icon={<DiamondIcon fill="#9EAEB4" />}
              title="Stay agile and flexible"
              content="Use our cloud marketplace to expand your range of value-added services and create irresistible 'a la carte' bundles & solutions for niche enterprise markets"
            />
            <BizPerksCard
              icon={<DiamondIcon fill="#9EAEB4" />}
              title="Monetize any service"
              content="Use our cloud marketplace to expand your range of value-added services and create irresistible 'a la carte' bundles & solutions for niche enterprise markets"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default VoiceSolutions;
