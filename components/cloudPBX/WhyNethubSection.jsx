import Image from "next/image.js";
import BizPerksCard from "../BizPerksCard.jsx";
import { whyNethubCloudPBX } from "@/lib/data/cloudpbxdata.jsx";

export default function WhyNethubSection() {
  return (
    <section className="py-16 bg-customColors-fiord text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="">
            <h3 className="text-4xl font-semibold mb-7">Why choose Nethub?</h3>
            <p className="text-xl font-bold tracking-wide mb-10">
              We promise and deliver the best value and fair pricing.
            </p>
            <p className="text-lg tracking-wide">
              With our convergent billing and online charging system plus class
              4 and 5 SIP softswitch you can expect flexibility, transparency,
              and our full investment in your success.
            </p>
          </div>
          <div className="grid place-content-center">
            <div className="w-full flex">
              <div className="w-72 h-72 overflow-hidden rounded-full flex">
                <Image
                  height={200}
                  width={300}
                  src="/about2.jpeg"
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
      </div>
    </section>
  );
}
