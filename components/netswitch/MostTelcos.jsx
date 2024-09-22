"use client";
import { motion, useScroll } from "framer-motion";
import Breadcrumbs from "../Breadcrumbs";
import { frustrationData } from "../../src/lib/data/products/netswitchData";
import Image from "next/image";

export default function MostTelcos() {
  const { scrollYProgress } = useScroll();
  // Netswitch page breadcrumbs links
  const netswitchcrumbs = [
    { title: "home", href: "/" },
    { title: "products", href: "/products" },
    { title: "netswitch" },
  ];
  return (
    <section className="min-h-56">
      <section className="container pt-8 2xl:pt-16 pb-10 grid grid-cols-1 lg:grid-cols-2">
        {/* write up */}
        <div className="flex flex-col gap-7 p-[30px]">
          <Breadcrumbs crumbs={netswitchcrumbs} />
          <h3 className="text-primary text-2xl lg:text-3xl font-semibold max-w-[530px]">
            Most telcos are now relying on their software vendors for
            integration and maintenance.
          </h3>
          <div className="flex flex-col gap-5 text-customColors-dovegray max-w-[530px]">
            <strong className="tracking-wide text-base lg:text-lg">
              If this sounds like your company, you may be experiencing…
            </strong>
          </div>
          <div>
            {frustrationData.map(({ icon, text }, index) => {
              return (
                <div key={index} className="flex gap-5 pb-[10px] mt-[10px] ">
                  <div className="h-14 w-14 xl:h-16 xl:w-16 p-5 bg-customColors-loblolly hover:bg-customColors-fiord text-[30px] xl:text-[36px] grid place-content-center rounded-full text-white">
                    {icon}
                  </div>
                  <p className="pl-[5px] font-normal leading-[27px] text-[18px] font-Open_sans text-customColors-fiord">
                    {text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* media */}
        <div className="w-full flex justify-center items-center">
          <motion.div
            style={{
              scale: scrollYProgress,
            }}
            className="w-96 h-96 overflow-hidden rounded-full hidden lg:flex"
          >
            <Image
              height={300}
              width={300}
              src="/products/netswitch/unhappy.jpg"
              alt="unhappy"
              layout="responsive"
              className="object-cover shadow-xl"
            />
          </motion.div>
        </div>
      </section>
    </section>
  );
}
