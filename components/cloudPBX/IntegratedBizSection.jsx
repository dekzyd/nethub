import { FiPhoneCall } from "react-icons/fi";
import { FaAngleRight } from "react-icons/fa6";
import BizPerksCard from "../BizPerksCard.jsx";
import { bizsoldata } from "../../src/lib/data/cloudpbxdata.jsx";
import { Button } from "@/components/ui/button.jsx";
import Link from "next/link.js";

export default function IntegratedBizSection() {
  return (
    <section className="bg-white pt-10 pb-10">
      <div className="container">
        <div className="my-10 grid sm:grid-cols-1 md:grid-cols-2">
          <div className="">
            <div className="flex flex-col gap-4">
              <p className="uppercase text-2xl tracking-widest">
                Nethub Cloud PBX & Call Center
              </p>
              <p className="text-primary text-[32px] xl:text-5xl font-semibold -tracking-[0.5px] leading-[43.2px] xl:leading-[62.1px]">
                Integrated business communication solution
              </p>
              <p className="font-semibold text-[20px] leading-[30px] font-Open_sans">
                Become a next-generation provider of communication services by
                delivering an integrated business cloud telephony solution that
                your SMB and enterprise customers will be excited about.
              </p>
            </div>
          </div>
          <div className="font-bold md:flex gap-5 items-center justify-center hidden ml-14">
            <div className="bg-customColors-loblolly/85 p-12 rounded-full grid">
              <FiPhoneCall className=" md:text-[200px] text-white -scale-x-100" />
              {/* <CollectionIcons fill="#9EAEB4" /> */}
            </div>
          </div>
        </div>
        {/* voice perks */}
        <div className="my-14 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          {bizsoldata.map(({ title, icon, content }, index) => {
            return (
              <div className="p-5" key={index}>
                <BizPerksCard title={title} icon={icon} content={content} />
              </div>
            );
          })}
        </div>
        <div>
          <p className="mb-3 font-medium text-lg">
            Make NetPhone part of your Cloud PBX platform and launch at minimal
            costs to you.
          </p>

          <Link href="#contact">
            <Button className="w-auto font-semibold font-Open_sans uppercase">
              more about our cloud pbx solution
              <FaAngleRight className="ml-1 -mt-[1px] text-[12px] font-bold" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
