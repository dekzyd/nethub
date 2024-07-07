// icons
import { FaGears } from "react-icons/fa6";
import { MdOutlineNetworkCheck, MdDialerSip } from "react-icons/md";
import { IoKeypad } from "react-icons/io5";
import { RiVoiceprintLine } from "react-icons/ri";
import { FiSmartphone } from "react-icons/fi";
import { TbCloudCog } from "react-icons/tb";

// solution items
export const solutions = [
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
    title: "SIP Trunking",
    href: "/solutions/sip",
    description: "Nethub's SIP solutions.",
    icon: <MdDialerSip className="" />,
  },
  {
    title: "Cloud PBX & Call Center",
    href: "/solutions/cloudpbx",
    description: "Nethub's Cloud PBX & call center solutions.",
    icon: <TbCloudCog className="" />,
  },
  {
    title: "Softphone",
    href: "/solutions/softphone",
    description: "Nethub's Softphone solutions.",
    icon: <FiSmartphone className="" />,
  },
  {
    title: "DID Provisioning",
    href: "/solutions/did",
    description: "DID Management solutions.",
    icon: <IoKeypad className="" />,
  },
];

// product items

export const products = [
  {
    title: "Netswitch",
    href: "/products/netswitch",
    description: "Nethub's Netswitch Product.",
  },
  {
    title: "Alterswitch",
    href: "#",
    description: "Nethub's Alterswitch Product.",
  },
];

export const abouts = [
  {
    title: "The Company",
    href: "/about",
    description: "Nethub Organization.",
  },
  {
    title: "Careers",
    href: "/about",
    description: "Join us.",
  },
];
