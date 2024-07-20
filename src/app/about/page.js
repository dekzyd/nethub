import PageHeader from "../../../components/PageHeader";
import { SearchlightIcon } from "../../../components/icons";
import Divider from "../../../components/divider";
import Breadcrumbs from "../../../components/Breadcrumbs";
import UniqueMkt from "../../../components/UniqueMkt";
import PartnerOpt from "../../../components/PartnerOpt";
import HotTopics from "../../../components/HotTopics";
import Misc from "../../../components/Misc";
import FeedbackSlider from "../../../components/FeedbackSlider";

const About = () => {
  // about page breadcrumbs links
  const aboutcrumbs = [
    { title: "home", href: "/" },
    { title: "about", href: "/about" },
  ];

  return (
    <div>
      <PageHeader
        image="/about3.jpg"
        title="Nethub at a glance"
        pre_title="company overview"
        height="h-[550px]"
        icon={<SearchlightIcon />}
      />
      <Divider fill="#fff" />
      {/* About page contents */}
      <section className="container pt-16 pb-10 grid sm:grid-cols-1 md:grid-cols-2">
        {/* write up */}
        <div className="flex flex-col gap-7 p-5">
          <Breadcrumbs crumbs={aboutcrumbs} />
          <h3 className="text-primary text-3xl font-semibold max-w-[530px]">
            Nethub is a global telecommunication software platform developer
          </h3>
          <div className="flex flex-col gap-5 text-customColors-dovegray max-w-[530px]">
            <strong className="tracking-wide text-lg">
              Since 2001 we’ve helped over 500 telcos from 100+ countries become
              market leaders while keeping their costs under control.
            </strong>
            <p className="text-lg font-normal">
              We allow operators, telecommunication service providers, and
              carriers to launch and monetize a diverse range of retail,
              enterprise, SME, and wholesale services on a single platform.
            </p>
          </div>
          {/* founded table */}
          <div className="flex flex-col text-customColors-dovegray mt-5 pr-10">
            <div className="flex justify-between font-bold text-lg pb-3">
              <p>Founded</p>
              <p className="font-light text-customColors-dovegray/40">
                -----------------------------
              </p>
              <p>2001</p>
            </div>
            <div className="flex justify-between font-bold text-lg pb-3">
              <p>Headquaters</p>
              <p className="font-light text-customColors-dovegray/40">
                -----------------------
              </p>
              <p>Abuja, Nigeria</p>
            </div>
            <div className="flex justify-between font-bold text-lg pb-3">
              <p>Employees</p>
              <p className="font-light text-customColors-dovegray/40">
                -----------------------------
              </p>
              <p>250+</p>
            </div>
          </div>
        </div>
        {/* media */}
        <div className="bg-slate-200 flex justify-center items-center p-5">
          Media
        </div>
      </section>
      <Divider fill="#F0F2F3" />
      <UniqueMkt />
      {/* partner */}
      <Divider fill="#F0F2F3" flip />
      <PartnerOpt />
      {/* testimonials */}
      <FeedbackSlider flip />
      {/* <Divider fill="#3d5b68" /> */}
      {/* Hot topics
      <HotTopics />
      <Misc /> */}
    </div>
  );
};

export default About;
