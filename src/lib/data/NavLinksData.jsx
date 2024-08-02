// icons
import { FaUsers, FaArrowsToCircle } from "react-icons/fa6";
import { GiStarsStack } from "react-icons/gi";
import { TbCloudNetwork } from "react-icons/tb";
import { MdCloudSync } from "react-icons/md";
import {
  MdOutlineNetworkCheck,
  MdOutlineBusinessCenter,
  MdDialerSip,
} from "react-icons/md";
import { IoKeypad } from "react-icons/io5";
import { RiVoiceprintLine } from "react-icons/ri";
import { FiSmartphone } from "react-icons/fi";
import { TbCloudCog } from "react-icons/tb";
import { BiSolidGridAlt } from "react-icons/bi";

// solution items
export const solutions = [
  {
    title: "Cloud PBX & Call Center",
    featured: true,
    button: "get more info",
    href: "/solutions/cloudpbx",
    description: "Deliver voice, video, CCaaS, CRM to SMB and enterprise",
    icon: <TbCloudCog className="" />,
  },
  {
    title: "SIP Trunking",
    featured: true,
    button: "explore more",
    href: "/solutions/sip",
    description: "Nethub's SIP solutions.",
    icon: <MdDialerSip className="" />,
  },
  {
    title: "DID Provisioning",
    href: "/solutions/did",
    featured: true,
    button: "check it out",
    description: "DID Management solutions.",
    icon: <IoKeypad className="" />,
  },
  {
    title: "Voice Service",
    href: "/solutions/voice",
    description: "Nethub's voice services.",
    icon: <RiVoiceprintLine className="" />,
  },
  {
    title: "Internet Service",
    href: "/solutions/internet",
    description: "Nethub's internet services.",
    icon: <MdOutlineNetworkCheck className="" />,
  },

  {
    title: "Softphone",
    href: "/solutions/softphone",
    description: "Nethub's Softphone solutions.",
    icon: <FiSmartphone className="" />,
  },
];

// product items

export const products = [
  {
    title: "Netswitch",
    featured: true,
    button: "take a look",
    href: "/products/netswitch",
    description: "A unified service management & delivery platform",
    icon: <FaArrowsToCircle />,
  },
  {
    title: "Alterswitch",
    featured: true,
    button: "see the possibilities",
    href: "#",
    description: "A Cloud-based unified service management & delivery platform",
    icon: <MdCloudSync />,
  },
  {
    title: "NetcoHub",
    href: "#",
    description: "Cloud-based integration platform as a service for telcos",
    icon: <TbCloudNetwork />,
  },
];

export const abouts = [
  {
    title: "Company Overview",
    href: "/about",
    description: "Nethub Organization.",
    icon: <BiSolidGridAlt />,
  },
  {
    title: "Leaders",
    href: "/about",
    description: "Meet our Leaders",
    icon: <GiStarsStack />,
  },
  {
    title: "Partners",
    href: "/about",
    description: "See our partners",
    icon: <FaUsers />,
  },
  {
    title: "Careers",
    href: "/about",
    description: "Join us.",
    icon: <MdOutlineBusinessCenter />,
  },
];
