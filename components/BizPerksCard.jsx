"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
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
    <motion.div
      // initial={{ opacity: 0, y: 200 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{ duration: 1, delay: delay / 10 }}
      // viewport={{ once: true }}
      className="md:p-3 lg:p-5 my-3"
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
    </motion.div>
  );
};

export default BizPerksCard;
