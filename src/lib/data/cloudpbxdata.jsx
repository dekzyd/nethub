import {
  Hsas,
  SolutionIcon,
  RocketIcon,
  DiamondIcon,
  DollarDropIcon,
} from "../../../components/icons";
import { FaRegFaceSmile } from "react-icons/fa6";
import { LuThumbsUp } from "react-icons/lu";
import { BiUnite } from "react-icons/bi";
import { MdOutlineSwitchAccessShortcutAdd } from "react-icons/md";
import { TbLockOpen2, TbCloudComputing } from "react-icons/tb";
import { SlCloudDownload } from "react-icons/sl";
import { CiMobile3 } from "react-icons/ci";
import { PiShieldCheckLight } from "react-icons/pi";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

export const bizsoldata = [
  {
    title: "Increase your revenue",
    icon: (
      <MdOutlineSwitchAccessShortcutAdd className="text-5xl text-customColors-hitgray" />
    ),
    content:
      "Use our cloud marketplace to expand your range of value-added services and create irresistible 'a la carte' bundles & solutions for niche enterprise markets",
    bgcolor: "",
  },
  {
    title: "Stay agile and flexible",
    icon: <LuThumbsUp className="text-5xl text-customColors-hitgray" />,
    content:
      "Customize new packages for your customers with open architecture, an integration platform, and programmable voice (CPaaS) capabilities",
    bgcolor: "",
  },
  {
    title: "Monetize any service",
    icon: <DiamondIcon fill="#9EAEB4" />,
    content:
      "Gain access to built-in real-time charging for usage, bundles, and discounts, as well as recurring billing and e-invoicing",
    bgcolor: "",
  },
  {
    title: "Reduce costs and increase your efficiency",
    icon: <FaRegFaceSmile className="text-5xl text-customColors-hitgray" />,
    content:
      "Enable self-care portals for customers and automate processes with a low-code platform",
    bgcolor: "",
  },
];

export const unbeatftdata = [
  {
    title: "Single unified platform",
    icon: <BiUnite className="text-5xl text-customColors-hitgray" />,
    content:
      "All administration (subscriptions, customer data, PBX settings, call routing, and more) is done from a single UI",
    bgcolor: "",
  },
  {
    title: "Fully open architecture",
    icon: <TbLockOpen2 className="text-5xl text-customColors-hitgray" />,
    content:
      "Gain access to APIs and source code for integration with core network, CRM, ERP, accounting, and more, via DIY or by hiring a third party",
    bgcolor: "",
  },
  {
    title: "Cloud deployment",
    icon: <SlCloudDownload className="text-5xl text-customColors-hitgray" />,
    content:
      "Focus on designing new products and getting more customers while we manage the cloud infrastructure and app maintenance",
    bgcolor: "",
  },
  {
    title: "White-labeled mobile app",
    icon: <CiMobile3 className="text-5xl text-customColors-hitgray" />,
    content:
      "Your customers see your brand and your custom components on a WebRTC-based app with enhanced sound quality and pixel-perfect UI",
    bgcolor: "",
  },
  {
    title: "App marketplace",
    icon: <TbCloudComputing className="text-5xl text-customColors-hitgray" />,
    content:
      "Pick, click, and launch a variety of services (MS Teams integration, cloud contact centers, and so much more) using our Add-on Mart",
    bgcolor: "",
  },
];

export const whyNethubCloudPBX = [
  {
    title: "Short go-to-market time",
    icon: <RocketIcon fill="var(--hitgray)" />,
    content:
      "Agile development ensures the release of new software updates every 7 weeks",
    bgcolor: "",
  },
  {
    title: "Fair pricing",
    icon: <LuThumbsUp className="text-5xl text-customColors-hitgray" />,
    content:
      "Choose from an unlimited perpetual license or simple, value-based SaaS metric: all features, maintenance & support are included",
    bgcolor: "",
  },
  {
    title: "24/7 technical support",
    icon: <SolutionIcon fill="var(--hitgray)" />,
    content:
      "Our technical support is praised as best-in-industry, with 180 engineers ready to help whenever you need it",
    bgcolor: "",
  },
  {
    title: "Confidence and security",
    icon: (
      <IoShieldCheckmarkOutline className="text-[56px] text-customColors-hitgray" />
    ),
    content:
      "Gain the security of high availability and zero downtime during updates due to clustering and geo‑redundancy",
    bgcolor: "",
  },
  {
    title: "More control in your hands",
    icon: <GiSettingsKnobs className="text-5xl text-customColors-hitgray" />,
    content:
      "Control your software, updates, pricing, and operation in a datacenter of your choice",
    bgcolor: "",
  },
];

export const stepspbx = [
  {
    title: "Configuration",
    content:
      "Set up service parameters for recurring and usage-based charging. Activate customers.",
    bgcolor: "bg-customColors-fiord",
    txtcolor: "text-white",
    fontweight: "font-semibold",
    fontsize: "text-2xl",
    icon: 1,
  },
  {
    title: "IP phone auto-provisioning",

    content:
      "Zero-effort instantaneous configuration of more than 50 preset IP phones. Add new models easily.",
    bgcolor: "bg-customColors-fiord",
    txtcolor: "text-white",
    fontweight: "font-semibold",
    fontsize: "text-2xl",
    icon: 2,
  },
  {
    title: "Self-care portal",

    content:
      "Let your customer perform most cloud PBX configuration steps and payments while enjoying great UX.",
    bgcolor: "bg-customColors-fiord",
    txtcolor: "text-white",
    fontweight: "font-semibold",
    fontsize: "text-2xl",
    icon: 3,
  },
  {
    title: "Service delivery",
    content: "Monitor, troubleshoot, send invoices, and generate revenue",
    bgcolor: "bg-customColors-fiord",
    txtcolor: "text-white",
    fontweight: "font-semibold",
    fontsize: "text-2xl",
    icon: 4,
  },
];
