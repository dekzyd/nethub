import Image from "next/image";
import { benefitData } from "@/lib/data/products/netswitchData";

const Benefits = () => {
  return (
    <section className="py-20">
      <div className=" container grid grid-cols-1 lg:grid-cols-2">
        <div className="p-5 grid gap-5">
          {/* IMAGE */}
          <div className="rounded-full h-52 w-52 lg:w-60 lg:h-60 flex overflow-hidden">
            <Image
              src="/about2.jpg"
              alt="benefit image"
              height={300}
              width={300}
              layout="responsive"
              className="object-cover"
            />
          </div>
          {/* TITLE */}
          <p className="text-primary font-semibold text-4xl lg:text-[40px]">
            How you benefit
          </p>
          {/* TEXT */}
          <p className="font-normal text-lg lg:text-[20px] font-Open_sans -mt-2">
            Experience a solution that will make your business run smoother,
            quicker, and even happier.
          </p>
        </div>
        <div className="p-5 flex flex-col justify-around">
          {benefitData.map(({ icon, text }, index) => {
            return (
              <div key={index} className="flex gap-5 pb-[10px] mt-[10px]">
                <div className="h-14 w-14 xl:h-16 xl:w-16 p-5 hover:text-primary text-[40px] xl:text-[50px] grid place-content-center rounded-full text-customColors-loblolly">
                  {icon}
                </div>
                <p className="pl-[5px] font-medium leading-[27px] text-lg lg:text-[20px] font-Open_sans text-customColors-fiord">
                  {text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
