import Breadcrumbs from "../../../components/Breadcrumbs.jsx";
import PageHeader from "../../../components/PageHeader.jsx";
import BizPerksCard from "../../../components/BizPerksCard.jsx";
// import { Hsas, Hc, Sds, Rnr } from "../../../components/icons";
import { FaGears } from "react-icons/fa6";
import { MdOutlineNetworkCheck, MdDialerSip } from "react-icons/md";
import { IoKeypad } from "react-icons/io5";
import { RiVoiceprintLine } from "react-icons/ri";
import { FiSmartphone } from "react-icons/fi";
import { TbCloudCog } from "react-icons/tb";

{
  /* meta data and title */
}
export const metadata = {
  title: "Telecom Solutions",
  description:
    "Start earning faster with solutions for modern telcos that are flexible, easily integrated, and fit your budget",
};

export default function Solutions() {
  // Did Management solutions page breadcrumbs
  const crumbs = [
    { title: "home", href: "/" },
    { title: "solutions", href: "#" },
  ];
  return (
    <div>
      <PageHeader
        image="/about.jpg"
        title="Nethub Telecom Solutions"
        // pre_title="company overview"
        icon={
          <FaGears className="md:text-[250px] lg:text-[300px] text-customColors-porcelain" />
        }
        btntxt="contact us"
        description="Start earning faster with solutions for modern telcos that are flexible, easily integrated, and fit your budget"
        height=""
      />
      {/* DID mgmt solutions content */}
      <section className="bg-white pt-10 pb-10 ">
        <div className="container">
          <Breadcrumbs crumbs={crumbs} />
          <div className="min-h-56 py-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            <BizPerksCard
              icon={
                <MdOutlineNetworkCheck className="text-customColors-porcelain text-5xl" />
              }
              bgcolor="bg-customColors-fiord"
              title="Internet Solutions"
              content="Use our cloud marketplace to expand your range of value-added services and create irresistible 'a la carte' bundles & solutions for niche enterprise markets"
              link="/solutions/internet"
            />
            <BizPerksCard
              icon={
                <RiVoiceprintLine className="text-customColors-porcelain text-5xl" />
              }
              bgcolor="bg-customColors-fiord"
              title="Voice Solutions"
              content="Use our cloud marketplace to expand your range of value-added services and create irresistible 'a la carte' bundles & solutions for niche enterprise markets"
              link="/solutions/voice"
            />
            <BizPerksCard
              icon={
                <MdDialerSip className="text-customColors-porcelain text-5xl" />
              }
              bgcolor="bg-customColors-fiord"
              title="Sip Trunking"
              content="Use our cloud marketplace to expand your range of value-added services and create irresistible 'a la carte' bundles & solutions for niche enterprise markets"
              link="/solutions/sip"
            />
            <BizPerksCard
              icon={
                <IoKeypad className="text-customColors-porcelain text-5xl" />
              }
              bgcolor="bg-customColors-fiord"
              title="DID Management"
              content="Use our cloud marketplace to expand your range of value-added services and create irresistible 'a la carte' bundles & solutions for niche enterprise markets"
              link="/solutions/did"
            />
            <BizPerksCard
              icon={
                <FiSmartphone className="text-customColors-porcelain text-5xl" />
              }
              bgcolor="bg-customColors-fiord"
              title="Softphone"
              content="Use our cloud marketplace to expand your range of value-added services and create irresistible 'a la carte' bundles & solutions for niche enterprise markets"
              link="/solutions/softphone"
            />
            <BizPerksCard
              icon={
                <TbCloudCog className="text-customColors-porcelain text-5xl" />
              }
              bgcolor="bg-customColors-fiord"
              title="Cloud PBX & Call Center"
              content="Use our cloud marketplace to expand your range of value-added services and create irresistible 'a la carte' bundles & solutions for niche enterprise markets"
              link="/solutions/cloudpbx"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
