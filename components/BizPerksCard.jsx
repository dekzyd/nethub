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
  link,
  txtcolor,
}) => {
  return (
    <div>
      <div
        className={`${bgcolor ? bgcolor : "bg-white"} p-2 pt-3 h-16 w-16 ${
          txtcolor && txtcolor
        } rounded-full ${fontsize && fontsize} ${
          fontweight && fontweight
        } flex justify-center items-center mb-2`}
      >
        {icon}
      </div>
      <div>
        <h4
          className={` ${
            titlecolor ? titlecolor : "text-customColors-fiord"
          } text-2xl font-semibold mb-2 pr-2`}
        >
          {title}
        </h4>
        <p
          className={`${
            contentcolor ? contentcolor : "text-customColors-dovegray"
          } text-lg max-w-[300px] pr-2`}
        >
          {content}
        </p>
        {link && (
          <Link href={link}>
            <p className="text-primary text-sm font-semibold uppercase py-3">
              Read more...
            </p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default BizPerksCard;
