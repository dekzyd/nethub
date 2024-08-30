import Breadcrumbs from "../../../components/Breadcrumbs.jsx";
import PageHeader from "../../../components/PageHeader.jsx";
import BizPerksCard from "../../../components/BizPerksCard.jsx";
import { products } from "@/lib/data/NavLinksData";
import { AiFillProduct } from "react-icons/ai";
import { MdOutlineNetworkCheck, MdDialerSip } from "react-icons/md";
import { IoKeypad } from "react-icons/io5";
import { RiVoiceprintLine } from "react-icons/ri";
import { FiSmartphone } from "react-icons/fi";
import { TbCloudCog } from "react-icons/tb";

{
  /* meta data and title */
}
export const metadata = {
  title: "Nethub Products",
  description:
    "Start earning faster with innovative products for modern telcos that are flexible, easily integrated, and fit your budget",
};

function Products() {
  // Did Management solutions page breadcrumbs
  const crumbs = [{ title: "home", href: "/" }, { title: "products" }];
  return (
    <div>
      <PageHeader
        image="/about.jpg"
        title="Nethub Products"
        // pre_title="company overview"
        icon={
          <AiFillProduct className="md:text-[250px] lg:text-[300px] text-customColors-porcelain" />
        }
        btntxt="contact us"
        description="Innovative products for modern telcos that are flexible, easily integrated, and fit your budget"
        height=""
      />
      <section className="bg-white pt-10 pb-10 ">
        <div className="container">
          <Breadcrumbs crumbs={crumbs} />
          {/* products */}
          <div className="min-h-56 py-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {products.map((product) => {
              const { title, href, description, icon, bgcol } = product;
              return (
                <BizPerksCard
                  key={title}
                  icon={icon}
                  bgcolor={bgcol}
                  txtcolor="text-white"
                  title={title}
                  fontsize={"text-5xl"}
                  content={description}
                  link={href}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
