import { TfiSave } from "react-icons/tfi";
import { PiSpeedometerBold, PiThumbsUpBold } from "react-icons/pi";
import { TbWorldPin } from "react-icons/tb";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaFilterCircleDollar } from "react-icons/fa6";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { TbHours24 } from "react-icons/tb";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

import {
  DiamondIcon,
  RocketIcon,
  CrescentIcon,
  ScalabilityIcon,
  BricksIcon,
  SolutionIcon,
  AgileIcon,
} from "../../../../components/icons";

export const frustrationData = [
  {
    icon: <MdOutlineMiscellaneousServices className="text-5xl" />,
    text: "Frustration associated with integrating UCaaS platforms with billing",
  },
  {
    icon: <FaFilterCircleDollar />,
    text: "Ambiguous licensing that has hidden costs and poses a threat to profitability",
  },
  {
    icon: <TfiSave />,
    text: "Vulnerability due to an inability to scale with legacy, on-premise solutions",
  },
];

export const benefitData = [
  {
    icon: <PiSpeedometerBold />,
    text: "Speed up your path to profitability by launching new services more quickly (even big systems)",
  },
  {
    icon: <PiThumbsUpBold />,
    text: "Relax while we deliver a feature-rich experience directly to your customers",
  },
  {
    icon: <TbWorldPin />,
    text: "Have confidence in guaranteed excellent operational uptime across different geographical regions",
  },
  {
    icon: <RiCustomerService2Line />,
    text: "Experience peace of mind and self-sufficiency with online self-care and open architecture",
  },
];

export const BetterPerks = [
  {
    title: "Instant deployment",
    content:
      "Implement your NetSwitch installation in the cloud within a single day",
    icon: <TbHours24 className="text-[#9EAEB4] text-6xl" />,
  },
  {
    title: "Quickly launch new services",
    content:
      "Including efficient scaling of your PortaSwitch installation in the cloud without any additional expense",
    icon: <RocketIcon fill="#9EAEB4" />,
  },
  {
    title: "Deliver a feature-rich experience",
    content:
      "And deliver it directly to your customer’s browser, applications, or desk phone",
    icon: <DiamondIcon fill="#9EAEB4" />,
  },
  {
    title: "Uninterrupted service",
    content:
      "Plus get zero downtime during updates with geographic redundancy across the globe",
    icon: <HiOutlineGlobeAlt className="text-[#9EAEB4] text-6xl" />,
  },
  {
    title: "Unmatchable scalability",
    content:
      "Choose your ideal processing capacity and increase it on demand at any time",
    icon: <ScalabilityIcon fill="#9EAEB4" />,
  },
];

export const FavoritePerks = [
  {
    title: "Reliability and redundancy",
    content:
      "Clustering and geo‑redundancy provide high-availability configuration and zero downtime for updates",
    icon: <IoShieldCheckmarkOutline className="text-[#9EAEB4] text-6xl" />,
  },
  {
    title: "Open architecture",
    content:
      "Nethub provides both APIs and source code for NetSwitch to allow an easy integration",
    icon: <CrescentIcon fill="#9EAEB4" />,
  },
  {
    title: "Scalability for growth",
    content:
      "Our platforms can easily scale up by adding more servers to match your project’s success",
    icon: <BricksIcon fill="#9EAEB4" />,
  },
  {
    title: "Agile development",
    content:
      "Nethub delivers more than 20 software builds per year – new features are available every 7 weeks",
    icon: <AgileIcon fill="#9EAEB4" />,
  },
  {
    title: "24/7 technical support",
    content:
      "Our technical support is praised as best-in-industry, with 180 engineers ready to help whenever you need it",
    icon: <SolutionIcon fill="#9EAEB4" />,
  },
];
