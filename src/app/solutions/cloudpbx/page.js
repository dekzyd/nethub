import CloudPageHeader from "../../../../components/cloudPBX/CloudPageHeader.jsx";
import Breadcrumbs from "../../../../components/Breadcrumbs.jsx";
import { TbCloudCog } from "react-icons/tb";
import BizPerksCard from "../../../../components/BizPerksCard.jsx";
import IntegratedBizSection from "../../../../components/cloudPBX/IntegratedBizSection.jsx";
import TodaysPbxSection from "../../../../components/cloudPBX/TodaysPbxSection.jsx";
import { unbeatftdata, stepspbx } from "../../../lib/data/cloudpbxdata.jsx";
import WhyNethubSection from "../../../../components/cloudPBX/WhyNethubSection.jsx";

// CloudPBX solutions page breadcrumbs
const crumbs = [
  { title: "home", href: "/" },
  { title: "solutions", href: "/solutions" },
  { title: "Cloud PBX & Call Center", href: "#" },
];

{
  /* meta data and title */
}
export const metadata = {
  title: "Cloud PBX / Hosted PBX platform and Cloud Call Center with Nethub.",
  description:
    "Deliver a business communication environment to your SMB and enterprise customers with NetSwitch – voice, video, CCaaS, CRM integrations, and more.",
};

const CloudPbxandCallCenter = () => {
  return (
    <>
      <CloudPageHeader
        image="/call-center2.jpg"
        icon={<TbCloudCog />}
        title="Cloud PBX / Hosted PBX platform and Cloud Call Center with Netswitch"
        btntxt="contact us"
        description="Deliver a business communication environment to your SMB and enterprise customers with NetSwitch voice, video, CCaaS, CRM integrations, and more."
        height="h-[600px]"
      />
      {/* in todays pbx mkt */}
      <section className="bg-customColors-porcelain pt-10 pb-10 min-h-96">
        <div className="container">
          <Breadcrumbs crumbs={crumbs} />
          {/* in todays pbx mkt*/}
          <TodaysPbxSection />
        </div>
      </section>
      {/* cloud pbx and call center */}
      <IntegratedBizSection />
      {/* unbeatable features */}
      <section className="bg-customColors-porcelain py-20 min-h-96">
        <div className="container">
          <h3 className="text-customColors-fiord text-5xl font-semibold">
            Unbeatable features
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
      <WhyNethubSection />
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
    </>
  );
};

export default CloudPbxandCallCenter;
