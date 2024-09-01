import Link from "next/link";
import React from "react";
const BizPerksCard = ({
  title,
  content,
  icon,
  bgcolor,
  fontsize,
  fontweight,
  titlecolor,
  contentcolor,
  contentsize,
  titlesize,
  link,
  hoverbgcolor,
  txtcolor,
  delay,
}) => {
  return (
    <div
      className="md:p-3 lg:p-5 my-3"
      data-aos="slide-up"
      data-aos-once={true}
      data-aos-delay={`${delay}00`}
    >
      <div
        className={`${bgcolor ? bgcolor : "bg-white"} ${
          hoverbgcolor ? hoverbgcolor : ""
        } h-20 w-20 ${txtcolor && txtcolor} rounded-full ${
          fontsize && fontsize
        } ${fontweight && fontweight} flex justify-center items-center mb-3`}
      >
        {icon}
      </div>
      <div>
        <h4
          className={` ${
            titlecolor ? titlecolor : "text-customColors-fiord"
          } mb-3  ${titlesize ? titlesize : "text-2xl"} font-semibold pr-2`}
        >
          {title}
        </h4>
        <p
          className={`${
            contentcolor ? contentcolor : "text-customColors-dovegray"
          } ${
            contentsize ? contentsize : "text-base lg:text-lg"
          } max-w-[300px]`}
        >
          {content}
        </p>
        {link && (
          <Link href={link}>
            <p className="text-primary text-sm hover:text-customColors-hitgray font-semibold uppercase py-3">
              Read more...
            </p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default BizPerksCard;
