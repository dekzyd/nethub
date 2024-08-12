import Link from "next/link.js";
import { Button } from "@/components/ui/button.jsx";
import { FaAngleRight } from "react-icons/fa6";
import BizPerksCard from "../BizPerksCard.jsx";
import { whyNethubCloudPBX } from "@/lib/data/cloudpbxdata.jsx";

export default function WhyNethubSection() {
  return (
    <section className="py-16 bg-customColors-fiord text-white">
      <div className="container">
        <div className="">
          <h3 className="text-4xl font-semibold mb-7">Why choose NetPhone?</h3>

          <p className="text-[21px] md:text-[26px] tracking-wide">
            With Nethub’s cloud softphone solution, you’ll get unmatched
            flexibility when customizing and reduced operational efforts, making
            for unparalleled convenience and value for end-users.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 my-12">
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
            Ready to talk? Let’s arrange a demo via a personal call or online
            presentation
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
