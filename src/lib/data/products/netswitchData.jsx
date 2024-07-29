import { FaRegSave } from "react-icons/fa";
import {
  DiamondIcon,
  RocketIcon,
  CrescentIcon,
  MedalIcon,
  SolutionIcon,
} from "../../../../components/icons";

export const frustrationData = [
  {
    icon: <FaRegSave />,
    text: "Frustration associated with integrating UCaaS platforms with billing",
  },
  {
    icon: <FaRegSave />,
    text: "Ambiguous licensing that has hidden costs and poses a threat to profitability",
  },
  {
    icon: <FaRegSave />,
    text: "Vulnerability due to an inability to scale with legacy, on-premise solutions",
  },
];

export const BetterWayData = [
  {
    title: "Focus on business",
    content:
      "Consolidate operational efforts onto one single platform and bring the right connections to your business",
    icon: <MedalIcon fill="#9EAEB4" />,
  },

  {
    title: "Robust and reliable",
    content:
      "Carrier-grade high-availability with all business-critical components in a cluster of physical servers",
    icon: <DiamondIcon fill="#9EAEB4" />,
  },
  {
    title: "Open and flexible",
    content:
      "Easily fits into existing networks or business processes with open architecture, API, and source code",
    icon: <CrescentIcon fill="#9EAEB4" />,
  },
  {
    title: "Fast deployment",
    content:
      "Continual platform improvement and extremely short wait time for new releases – every 7 weeks!",
    icon: <RocketIcon fill="#9EAEB4" />,
  },
  {
    title: "Best-in-industry 24/7 support",
    content:
      "Known and recognized by customers as offering unbeatable technical support.",
    icon: <SolutionIcon fill="#9EAEB4" />,
  },
];
