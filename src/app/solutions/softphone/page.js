import React from "react";
import Breadcrumbs from "../../../../components/Breadcrumbs.jsx";
import PageHeader from "../../../../components/PageHeader.jsx";
import { FiSmartphone } from "react-icons/fi";
import BizPerksCard from "../../../../components/BizPerksCard.jsx";
import { Hsas, Hc, Sds, Rnr } from "../../../../components/icons";
import { FiPhoneCall } from "react-icons/fi";
import { FaLaptop } from "react-icons/fa";

const Softphone = () => {
  // softphone solutions page breadcrumbs
  const crumbs = [
    { title: "home", href: "/" },
    { title: "solutions", href: "/solutions" },
    { title: "Softphone", href: "#" },
  ];
  return (
    <div>
      <PageHeader
        image="/softphone2.jpg"
        title="Cloud Softphone Solution with NetPhone Web & Mobile Apps"
        // pre_title="company overview"
        // icon={
        //   <FiSmartphone className="md:text-[150px] lg:text-[230px] text-customColors-porcelain" />
        // }
        btntxt="contact us"
        description="Offer new-generation UCaaS using a white-label softphone app for any device via WebRTC"
        height=""
      />
      {/* Voice solutions content */}
      <section className="bg-customColors-porcelain pt-10 pb-10 min-h-96">
        <div className="container">
          <Breadcrumbs crumbs={crumbs} />
          <div className="my-10 grid sm:grid-cols-1 md:grid-cols-2 gap-5">
            <div className="grid gap-7">
              <p className="text-4xl text-primary font-semibold">
                In today’s softphone market...
              </p>
              <p className="text-lg font-medium">
                Many CSPs and MSPs are having trouble competing and monetizing
                OTT solutions and are in danger of getting left behind.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center">
                  <div className="h-[80px] w-[80px] bg-white rounded-full flex justify-center items-center">
                    <FaLaptop className="text-5xl text-customColors-dovegray" />
                  </div>
                </div>
                <p className="text-customColors-dovegray col-span-4  text-lg">
                  The biggest vendors and providers of softphones are closing
                  down, slowing development, or becoming direct competitors of
                  smaller CSPs
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center">
                  <div className="h-[80px] w-[80px] bg-white rounded-full flex justify-center items-center">
                    <FaLaptop className="text-5xl text-customColors-dovegray" />
                  </div>
                </div>
                <p className="text-customColors-dovegray col-span-4  text-lg">
                  End-users are choosing new-age OTT and UCaaS services, with
                  features absent from traditional telecom solutions
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center">
                  <div className="h-[80px] w-[80px] bg-white rounded-full flex justify-center items-center">
                    <FaLaptop className="text-5xl text-customColors-dovegray" />
                  </div>
                </div>
                <p className="text-customColors-dovegray col-span-4  text-lg">
                  And they’re losing revenue due to a lack of differentiation in
                  their offers and therefore a lack of monetization
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-[50px] p-10 bg-white">
              <div>
                <p className="text-customColors-fiord text-2xl font-semibold">
                  Simeon Aduragba
                </p>
                <p className="text-primary text-lg font-medium mt-1">
                  Marketing Manager at Nethub
                </p>
              </div>
              <p className="italic text-2xl text-customColors-dovegray font-medium">
                Over The Top (OTT) communication has rapidly become one of the
                most popular ways for end users to send and receive audio,
                voice, share files, and collaborate – all while using the
                Internet.
              </p>
              <p className="italic text-2xl text-customColors-dovegray font-medium">
                The explosive demand for OTT services and software can mean big
                opportunities for UCaaS providers.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Softphone;
