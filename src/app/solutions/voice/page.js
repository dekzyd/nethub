import Breadcrumbs from "../../../../components/Breadcrumbs.jsx";
import PageHeader from "../../../../components/PageHeader.jsx";
import { SearchlightIcon } from "../../../../components/icons";

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
        image="/about.jpg"
        title="Voice solutions"
        // pre_title="company overview"
        icon={<SearchlightIcon />}
        height=""
      />
      {/* Voice solutions content */}
      <section className="bg-customColors-porcelain pt-16 pb-10 ">
        <div className="container">
          <Breadcrumbs crumbs={voicecrumbs} />
          <div className="bg-red-200 min-h-56 grid sm:grid-cols-1 md:grid-cols-2 gap-2"></div>
        </div>
      </section>
    </div>
  );
};

export default VoiceSolutions;
