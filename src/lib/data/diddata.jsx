import { RocketIcon, DiamondIcon, BricksIcon } from "../../../components/icons";
import { FaRegFaceAngry } from "react-icons/fa6";
import {
  TbDeviceDesktopCog,
  TbAdjustmentsDollar,
  TbHexagonNumber1,
} from "react-icons/tb";
import { FiThumbsUp, FiRepeat } from "react-icons/fi";
import { LuPuzzle } from "react-icons/lu";
import { IoBulbOutline } from "react-icons/io5";
import { MdOutlineSwitchAccessShortcutAdd } from "react-icons/md";
import { BiExpand } from "react-icons/bi";

export const havingtroubles = [
  {
    title: "Lost profits",
    icon: (
      <FaRegFaceAngry className="text-[#a0b0b5] text-[78px] hover:text-white" />
    ),
    content:
      "Are you losing money from unused DID numbers that are just sitting there collecting dust?",
    bgcolor: "",
  },
  {
    title: "Demand for capacity",
    icon: (
      <FaRegFaceAngry className="text-[#a0b0b5] text-[78px] hover:text-white" />
    ),
    content:
      "Do your customers need numbers from multiple countries and you have no administrative capacity to procure those?",
    bgcolor: "",
  },
  {
    title: "Lack of automation",
    icon: (
      <FaRegFaceAngry className="text-[#a0b0b5] text-[78px] hover:text-white" />
    ),
    content:
      "Are you employees working in multiple systems and wasting time on mundane tasks that could be easily automated or done by the end user themselves?",
    bgcolor: "",
  },
];

export const disBstWay = [
  {
    title: "Instantly obtain DID numbers",
    icon: <FiThumbsUp className="text-customColors-hitgray text-5xl" />,
    content:
      "through “on-demand” acquisition and reduce costs to zero for unused DIDs “idling” in the inventory – each DID immediately starts generating revenue.",
    bgcolor: "bg-customColors-loblolly/25",
  },
  {
    title: "Integrate with wholesale DID",
    icon: <LuPuzzle className="text-customColors-hitgray text-5xl" />,
    content:
      "Integrations with major wholesale DID providers (DIDww, DIDx, etc.) are provided out-of-the-box - and new integrations can be added in 1-2 weeks!",
    bgcolor: "bg-customColors-loblolly/25",
  },
  {
    title: "Create “mark-up pricing”",
    icon: (
      <TbAdjustmentsDollar className="text-customColors-hitgray text-5xl" />
    ),
    content:
      "so you can offer DIDs from virtually any place in the world - and the selling price will be automatically calculated based on the actual cost.",
    bgcolor: "bg-customColors-loblolly/25",
  },
  {
    title: "Real-time number activation",
    icon: <TbDeviceDesktopCog className="text-customColors-hitgray text-5xl" />,
    content:
      "Increase efficiency and reduce revenue leakage with a real-time number activation or release of numbers after customer deactivation.",
    bgcolor: "bg-customColors-loblolly/25",
  },
];

export const whatsinit = [
  {
    title: "Increase profitability",
    icon: (
      <MdOutlineSwitchAccessShortcutAdd className="text-customColors-hitgray text-5xl" />
    ),
    content:
      "With flexible pricing options, profit guarantee charging, kickback rates for premium DIDs and more, you'll see your profits tick up and up.",
    bgcolor: "",
  },
  {
    title: "Gain more customers by standing out",
    icon: <IoBulbOutline className="text-customColors-hitgray text-5xl" />,
    content:
      "Differentiate yourself from the competition and attract more customers by delivering DIDs from virtually any country and toll-free and premium DIDs, as well as attractive add-ons",
    bgcolor: "",
  },
  {
    title: "Upsell high-margin services",
    icon: <DiamondIcon fill="var(--hitgray)" />,
    content:
      "DID numbers are commodity - with PortaSwitch you have an option to offer hosted PBX / SIP trunking services to your customers, increasing ARPU and customer’s lifetime value.",
    bgcolor: "",
  },
  {
    title: "Scale quickly and with ease",
    icon: <BricksIcon fill="var(--hitgray)" />,
    content:
      "Our unlimited and perpetual license grants you the power to scale undeterred and our platform is quickly and easily expandable.",
    bgcolor: "",
  },
  {
    title: "Enjoy the freedom to customize and integrate",
    icon: <FiThumbsUp className="text-customColors-hitgray text-5xl" />,
    content:
      "Open architecture means PortaOne always supplies you the APIs and source code to quickly and easily build integrations and use across multiple regions and countries",
    bgcolor: "",
  },
  {
    title: "Expand your revenue streams",
    icon: <BiExpand className="text-customColors-hitgray text-5xl" />,
    content:
      "Promotion, discounts, resellers, white-label operators, multiple sources of DIDs. Increase how you sell and increase your chances to earn",
    bgcolor: "",
  },
];

export const whynethubdata = [
  {
    title: "Fair pricing",
    icon: <FiThumbsUp className="text-customColors-hitgray text-6xl" />,
    content:
      "With PortaOne, you always get an unlimited & perpetual license. Add customers, products, and numbers to the inventory at no additional costs. All maintenance and future updates included.",
    bgcolor: "",
  },
  {
    title: "Built to be scalable",
    icon: <TbHexagonNumber1 className="text-customColors-hitgray text-6xl" />,
    content:
      "resell DIDs - or use the same PortaOne’s platform to sell hosted PBX or SIP trunking services, no extra fees! Convergent billing and online charging system is a part of the solution.",
    bgcolor: "",
  },
  {
    title: "Unlimited & perpetual license",
    icon: <FiRepeat className="text-customColors-hitgray text-6xl" />,
    content:
      "Our platforms can easily scale up by adding more servers to match your project success.",
    bgcolor: "",
  },
  {
    title: "Short go-to-market time",
    icon: <RocketIcon fill="#9EAEB4" />,
    content:
      "Want to be ahead of competition? We release new software updates every 7 weeks, meaning your newly-requested functionality can be delivered to customers in just a few months.",
    bgcolor: "",
  },
];
