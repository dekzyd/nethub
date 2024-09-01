import Image from "next/image.js";
import BizPerksCard from "../BizPerksCard.jsx";
import { whyNethubCloudPBX } from "@/lib/data/cloudpbxdata.jsx";
import { Button } from "@/components/ui/button.jsx";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link.js";

export default function WhyNethubSection() {
  return (
    <section className="py-16 bg-customColors-fiord text-white">
      <div className="container">
        <div className="grid  px-5 grid-cols-1 md:grid-cols-2 gap-7">
          <div className="">
            <h3 className="md:text-4xl text-2xl font-semibold mb-7">
              Why choose Nethub?
            </h3>
            <p className="text-xl font-bold tracking-wide mb-10">
              We promise and deliver the{" "}
              <span className="text-primary">best value</span> and fair pricing.
            </p>
            <p className="text-lg tracking-wide">
              With our convergent billing and online charging system plus class
              4 and 5 SIP softswitch you can expect flexibility, transparency,
              and our full investment in your success.
            </p>
          </div>
          <div className="grid place-content-center">
            <div className="w-full flex">
              <div className="w-52 h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 overflow-hidden rounded-full flex">
                <Image
                  height={500}
                  width={500}
                  src="/whynethub.webp"
                  alt="image"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 my-14">
          {whyNethubCloudPBX.map(
            ({ icon, title, content, titlecolor, contentcolor }) => {
              return (
                <BizPerksCard
                  key={title}
                  title={title}
                  content={content}
                  icon={icon}
                  bgcolor="bg-customColors-fiord"
                  contentcolor="text-white"
                  titlecolor="text-primary"
                />
              );
            }
          )}
        </div>
        <div>
          <p className="mb-3 font-medium text-lg">
            Ready to try? Let’s arrange a demo via a personal call or online
            presentation.
          </p>
          <Link href="#contact">
            <Button className="w-auto font-semibold font-Open_sans uppercase">
              contact us
              <FaAngleRight className="ml-1 -mt-[1px] text-[12px] font-bold" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
