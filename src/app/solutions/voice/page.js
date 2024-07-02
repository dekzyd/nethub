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
      <section className="bg-white pt-10 pb-10 ">
        <div className="container">
          <Breadcrumbs crumbs={voicecrumbs} />
          <div className="min-h-56 mt-10 grid sm:grid-cols-1 md:grid-cols-2">
            <div className="">
              <div className="flex flex-col gap-4">
                <p className="uppercase font-medium text-2xl tracking-widest">
                  Nethub's voice solutions
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
        </div>
      </section>
    </div>
  );
};

export default VoiceSolutions;
