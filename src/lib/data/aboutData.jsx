import {
  FaBriefcase,
  FaHandshake,
  FaPeopleGroup,
  FaUserTie,
} from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import {
  DiamondIcon,
  RocketIcon,
  CrescentIcon,
  MedalIcon,
  SolutionIcon,
} from "../../../components/icons";

export const UniqueMktData = [
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

export const PartnerData = [
  {
    title: "Become a partner",
    content:
      "Becoming a PortaOne team member means joining a group that cares deeply about their work and our customers, fostering professional development, on the job learning, and out of office recreational activities, because work isn’t everything",
    icon: <FaHandshake fill="#fff" />,
  },
  {
    title: "Partners",
    content:
      "We are proud partner with like-minded, industry-leading solution providers that complement our platform and generate synergies for our mutual clients.",
    icon: <FaPeopleGroup fill="#fff" />,
  },
  {
    title: "Career opportunities",
    content:
      "Becoming a Nuthub team member means joining a group that cares deeply about their work and our customers, fostering professional development, on the job learning, and out of office recreational activities, because work isn’t everything",
    icon: <FaBriefcase fill="#fff" />,
  },
  {
    title: "Training & Job for refugees",
    content:
      "Nethub is looking to extend their team and support refugees who lost their jobs recently. Get all the training for a new, exciting career in IT.",
    icon: <GiTeacher fill="#fff" />,
  },
  {
    title: "Events",
    content: "Nethub webinars, trade shows, meet-ups and get-togethers.",
    icon: <FaRegCalendarAlt fill="#fff" />,
  },
  {
    title: "Leaders",
    content:
      "Meet our Nethub leaders and management team: a dedicated group of individuals who live the principles of fair play and high-quality service that they demand of their employees.",
    icon: <FaUserTie fill="#fff" />,
  },
];
