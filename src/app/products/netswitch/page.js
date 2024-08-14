import ProductsHeader from "../../../../components/netswitch/ProductsHeader.jsx";
import MostTelcos from "../../../../components/netswitch/MostTelcos.jsx";
import Benefits from "../../../../components/netswitch/Benefits.jsx";
import UniqueMkt from "../../../../components/UniqueMkt.jsx";
import Divider from "../../../../components/divider.jsx";
import {
  BetterPerks,
  FavoritePerks,
} from "@/lib/data/products/netswitchData.jsx";

{
  /* meta data and title */
}
export const metadata = {
  title: "Netswitch",
  description:
    "A Unified Service Management & Delivery Platform for voice, messaging, IoT/M2M, and data traffic within a single converged network.",
};

const Netswitch = () => {
  return (
    <>
      {/* HEADER */}
      <ProductsHeader
        image="/netswitch.jpg"
        title="NetSwitch"
        btntxt="contact us"
        description={
          <p>
            <span className="font-semibold">
              A Unified Service Management & Delivery Platform
            </span>{" "}
            for voice, messaging, IoT/M2M, and data traffic within a single
            converged network.
          </p>
        }
        height=""
      />
      {/* MOST TELCOS */}
      <MostTelcos />
      {/* DISCOVER A BETTER WAY */}
      <Divider fill="#F0F2F3" />
      <UniqueMkt
        title="Discover a better way"
        perks={BetterPerks}
        image="/about3.jpg"
        descCol="text-customColors-fiord"
        flip
        titlesize="text-[40px]"
        ltrspacing="tracking-normal"
        rating
        description=<p className="font-semibold">
          Get Nethub services in one – convergent billing and online charging
          system PLUS class 4 and 5 SIP Netswitch.
        </p>
      />
      {/* WHAT MAKES NETSWITCH A FAVORITE */}
      <Divider fill="#3D5B68" flip />
      <UniqueMkt
        title="What makes NetSwitch a favorite in telecom circles?"
        bgCol="bg-customColors-fiord"
        perks={FavoritePerks}
        image="/about3.jpg"
        IconBg="bg-customColors-fiord"
        titlesize="text-[40px]"
        UniqTitleColor="text-primary"
        UniqTextColor="text-white"
        ltrspacing="tracking-normal"
        description=<p>
          Over our 20-plus years we have grown to provide services for some of
          the biggest telcos in the world, but we have always maintained our{" "}
          <b>key principles</b> of being <b>fair, honest, and invested</b> in
          our customers and their success by offering{" "}
          <b>transparent pricing and flexible services</b>.
        </p>
      />
      {/* HOW YOU BENEFIT */}
      <Benefits />
    </>
  );
};

// netswitch custom Header

export default Netswitch;
