import Breadcrumbs from "../../../components/Breadcrumbs.jsx";
import PageHeader from "../../../components/PageHeader.jsx";
import BizPerksCard from "../../../components/BizPerksCard.jsx";
import { solutions } from "@/lib/data/NavLinksData";
import { FaGears } from "react-icons/fa6";

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
            {solutions.map((solution) => {
              const { title, href, description, icon } = solution;
              return (
                <BizPerksCard
                  key={title}
                  icon={icon}
                  title={title}
                  bgcolor={"bg-customColors-hitgray"}
                  txtcolor={"text-white"}
                  fontsize={"text-5xl"}
                  content={description}
                  link={href}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
