import { FaStar } from "react-icons/fa6";
import Image from "next/image";
import BizPerksCard from "./BizPerksCard";

const UniqueMkt = ({
  pretitle,
  title,
  perks,
  image,
  flip,
  titlesize,
  ltrspacing,
  description,
  bgCol,
  descCol,
  textCol,
  UniqTextColor,
  UniqTitleColor,
  rating,
  IconBg,
}) => {
  return (
    <section
      className={`${bgCol ? bgCol : "bg-customColors-porcelain"} py-16 ${
        textCol ? textCol : "text-white"
      } `}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className={`p-5 max-w-[687px] ${flip && "order-last"}`}>
            <p className="uppercase font-light text-xl tracking-[5px] pb-3">
              {pretitle}
            </p>
            {/* TITLE */}
            <p
              className={`text-primary ${
                titlesize ? titlesize : "text-[32px]"
              } font-semibold ${ltrspacing ? ltrspacing : "-tracking-wider"}`}
            >
              {title}
            </p>
            {/* DESCRIPTION */}
            {description && (
              <div
                className={`my-7 font-Open_sans text-[20px] ${
                  descCol ? descCol : ""
                } `}
              >
                {description}
              </div>
            )}
          </div>
          {/* IMAGE CONTAINER */}
          <div className="hidden lg:grid place-content-center">
            {image && (
              <div className="w-full flex">
                <div className="w-72 h-72 overflow-hidden rounded-full flex">
                  <Image
                    height={500}
                    width={500}
                    src={image}
                    alt="image"
                    className="object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        {/* bIZ PERKS CARD */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 py-5">
          {perks.map(({ icon, title, content }) => {
            return (
              <BizPerksCard
                key={title}
                icon={icon}
                title={title}
                content={content}
                titlecolor={UniqTitleColor}
                contentcolor={UniqTextColor}
                bgcolor={IconBg}
              />
            );
          })}
        </div>
        {/* TRUSTED BY TELCOS*/}
        {rating && (
          <div className="lg:mt-14">
            <p className="text-center py-5 text-customColors-dovegray text-2xl">
              Netswitch is deployed by leading Telcos around the globe.
            </p>
            <div className="flex gap-5 justify-center text-primary/70 hover:text-primary">
              {Array.from({ length: 5 }).map((_, index) => {
                return <FaStar key={index} className="text-2xl" />;
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default UniqueMkt;
