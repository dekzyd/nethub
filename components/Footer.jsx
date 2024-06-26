"use client";

import { ContactForm } from "./Contactform";
import { CommunityIcons, NewsletterIcons } from "../assets/icons";
import ImageBox from "./imageBox";
import profilePic from "../assets/canada.webp";
import Logo from "./Logo";
import {
  FaAngleRight,
  FaCookieBite,
  FaLock,
  FaRegHandPointRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer">
      <div
        id="contact"
        className="h-[674px] bg-customColors-fiord flex justify-center pt-[70px]"
      >
        {/* footer container 1 */}
        <div className="container h-full mx-4 flex flex-wrap flex-initial">
          <div className="basis-full md:basis-2/4 flex flex-col flex-initial p-5">
            <h3 className="mb-5 text-4xl tracking-widest uppercase text-customColors-hitgray">
              Talk with us
            </h3>
            <ContactForm />
          </div>
          <div className="basis-full md:basis-2/4 flex flex-col flex-initial py-20 pl-10 pr-5 text-xl text-white">
            {/* toll free */}
            <div className="pb-5">
              <p className="font-medium">Toll-free calls (phone & Skype)</p>
              <p className="font-semibold text-primary">+1 866 747 8647</p>
            </div>
            {/* abroad */}
            <div className="pb-5">
              <p className="font-medium">Calls & faxes from abroad:</p>
              <p className="font-semibold text-primary">+1 866 747 8647</p>
            </div>
            {/* email */}
            <div className="pb-8">
              <p className="font-medium">Email:</p>
              <p className="font-semibold text-primary">contact@nethub.com</p>
            </div>
            {/* newsletter */}
            <p className="uppercase tracking-widest mb-2 text-customColors-hitgray">
              sign up for newsletter
            </p>
            <div className="pb-5">
              <NewsletterIcons />
            </div>
            {/* community */}
            <p className="uppercase tracking-widest mb-2 text-customColors-hitgray">
              join the community
            </p>
            <div>
              <CommunityIcons />
            </div>
          </div>
        </div>
      </div>

      {/* footer container 2 */}
      <div className="min-h-[674px] bg-customColors-fiord flex justify-center pt-10 pb-20">
        <div className="container h-full p-5">
          <h1 className="text-customColors-hitgray text-2xl tracking-wider uppercase pb-3">
            Meeting in Person
          </h1>
          <p className="text-white text-md leading-relaxed">
            You can find our friendly and helpful PortaOne staff and sales
            representative across the globe.
          </p>
          <p className="text-white pb-5 text-md leading-relaxed">
            Looking to meet face-to-face? Set up a meeting by{" "}
            <span className="text-primary">sending us a message.</span>
          </p>
          {/* events, corporate offices, tech offices, representatives */}
          <div className="flex flex-wrap">
            <div className="ftflex">
              <h3 className="text-primary font-semibold text-2xl mb-5">
                Events
              </h3>
              <div className="flex flex-col gap-9 pb-5">
                <ImageBox
                  headerText={"Canada"}
                  contents={"Melbourne"}
                  profilePic={profilePic}
                />
                <ImageBox
                  headerText={"Canada"}
                  contents={"Melbourne"}
                  profilePic={profilePic}
                />
                <ImageBox
                  headerText={"Canada"}
                  contents={"Melbourne"}
                  profilePic={profilePic}
                />
              </div>
            </div>
            <div className="ftflex">
              <h3 className="text-primary font-semibold text-2xl mb-5">
                Corporate Offices
              </h3>
              <div className="flex flex-col gap-9 pb-5">
                <ImageBox
                  headerText={"Canada"}
                  contents={"Melbourne"}
                  profilePic={profilePic}
                />
                <h3 className="text-primary font-semibold text-2xl">
                  Technology offices
                </h3>
                <ImageBox
                  headerText={"Canada"}
                  contents={"Melbourne"}
                  profilePic={profilePic}
                />
                <ImageBox
                  headerText={"Canada"}
                  contents={"Melbourne"}
                  profilePic={profilePic}
                />
              </div>
            </div>
            <div className="ftflex">
              <h3 className="text-primary font-semibold text-2xl mb-5">
                Representatives
              </h3>
              <div className="flex flex-col gap-9 pb-5">
                <ImageBox
                  headerText={"Canada"}
                  contents={"Melbourne"}
                  profilePic={profilePic}
                />
                <ImageBox
                  headerText={"Canada"}
                  contents={"Melbourne"}
                  profilePic={profilePic}
                />
                <ImageBox
                  headerText={"Canada"}
                  contents={"Melbourne"}
                  profilePic={profilePic}
                />
                <ImageBox
                  headerText={"Canada"}
                  contents={"Melbourne"}
                  profilePic={profilePic}
                />
              </div>
            </div>
          </div>
          <h3 className="text-primary text-2xl font-semibold">
            <span className="text-primary">{FaAngleRight}</span>All Events
          </h3>
        </div>
      </div>
      {/* about, solutions, products, resources links */}
      <div className="bg-customColors-dune flex justify-center">
        <div className="container">
          <div id="links" className="h-[552px] pt-16 px-3">
            <div
              id="links-container"
              className="container h-full flex flex-wrap"
            >
              <div className="linkCont">
                <h3 className="text-customColors-fiord font-semibold mb-5">
                  About
                </h3>
                <div className="flex flex-col gap-[10px] text-base">
                  <p className="text-white">Lorem consectetur adipis</p>
                  <p className="text-white">Adipis</p>
                  <p className="text-white">Lorem consectetur</p>
                  <p className="text-white">Lorem consectetur adipis</p>
                  <p className="text-white">Adipis</p>
                  <p className="text-white">Lorem consectetur</p>
                  <p className="text-white">Lorem consectetur adipis</p>
                  <p className="text-white">Adipis</p>
                  <p className="text-white">Lorem consectetur</p>
                  <p className="text-white">Lorem consectetur adipis</p>
                  <p className="text-white">Adipis</p>
                  <p className="text-white">Lorem consectetur</p>
                  <p className="text-white">Lorem consectetur</p>
                </div>
              </div>
              <div className="linkCont">
                <h3 className="text-customColors-fiord font-semibold mb-5">
                  Solutions
                </h3>
                <div className="flex flex-col gap-[10px] text-base">
                  <p className="text-white">Lorem consectetur adipis</p>
                  <p className="text-white">Adipis</p>
                  <p className="text-white">Lorem consectetur</p>
                  <p className="text-white">Lorem consectetur adipis</p>
                  <p className="text-white">Adipis</p>
                  <p className="text-white">Lorem consectetur</p>
                </div>
              </div>
              <div className="linkCont">
                <h3 className="text-customColors-fiord font-semibold mb-5">
                  Products
                </h3>
                <div className="flex flex-col gap-[10px] text-base">
                  <p className="text-white">Lorem consectetur adipis</p>
                  <p className="text-white">Adipis</p>
                  <p className="text-white">Lorem consectetur</p>
                  <p className="text-white">Lorem consectetur adipis</p>
                  <p className="text-white">Adipis</p>
                  <p className="text-white">Lorem consectetur</p>
                  <p className="text-white">Lorem consectetur</p>
                </div>
              </div>
              <div className="linkCont">
                <h3 className="text-customColors-fiord font-semibold mb-5">
                  Resources
                </h3>
                <div className="flex flex-col gap-[10px] text-base">
                  <p className="text-white">Lorem consectetur adipis</p>
                  <p className="text-white">Adipis</p>
                  <p className="text-white">Lorem consectetur</p>
                  <p className="text-white">Lorem consectetur</p>
                  <p className="text-white">Lorem consectetur adipis</p>
                  <p className="text-white">Adipis</p>
                  <p className="text-white">Lorem consectetur</p>
                  <p className="text-white">Lorem consectetur</p>
                  <p className="text-white">Lorem consectetur adipis</p>
                  <p className="text-white">Adipis</p>
                  <p className="text-white">Lorem consectetur</p>
                  <p className="text-white">Lorem consectetur</p>
                </div>
              </div>
            </div>
          </div>

          <div id="privacy-policy" className="h-[275.20px] pt-16">
            <div className="h-full container flex flex-col items-center">
              <h2 className="p-2.5 mb-9 text-2xl text-primary">
                Helping telcos connect people since 2013
              </h2>
              <p className="mb-8 text-sm text-customColors-loblolly/85">
                © 2001 – 2024 PortaOne Inc. All rights reserved.
              </p>
              <div className="flex justify-center gap-5 pb-5 text-customColors-loblolly">
                <p className="flex gap-2 capitalize text-sm items-center">
                  <span className="text-xl text-customColors-fiord">
                    <FaCookieBite />
                  </span>{" "}
                  cookie policy
                </p>
                <p className="flex gap-2 capitalize text-sm items-center">
                  <span className="text-xl text-customColors-fiord">
                    <FaRegHandPointRight />
                  </span>{" "}
                  terms of use
                </p>
                <p className="flex gap-2 capitalize text-sm items-center">
                  <span className="text-xl text-customColors-fiord">
                    <FaLock />
                  </span>{" "}
                  privacy policy
                </p>
              </div>
            </div>
          </div>

          <div id="bottom footer" className="h-[291px] pt-5 pb-20">
            <div className="h-full container flex flex-wrap justify-center items-center">
              {/* logo */}
              <Logo section="footer" />
              {/* address */}
              <div className="bottomftr text-customColors-loblolly/85">
                <p className="font-semibold">Nethub Tech</p>
                <p>A113 - 2009 lougheed hwy</p>
                <p>port coloquaim, BV VBC Abuja, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
