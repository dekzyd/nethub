import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Divider from "./divider";
import { NavigationMenuDemo } from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="w-full h-20 flex justify-center">
        <div className="container p-3 flex items-center gap-x-3">
          {/* logo */}
          <div id="logo" className=" basis-1/4 text-3xl font-bold">
            Logo Nethub
          </div>
          {/* links */}
          <ul className="hidden lg:flex basis-3/4 justify-end">
            <NavigationMenuDemo />
            <li className="px-4 py-2">Search</li>
          </ul>
          {/* dropdown icon */}
          <div className="lg:hidden flex justify-end basis-3/4">dropdown</div>
        </div>
      </div>
      {/* element divider */}
      <Divider />
    </nav>
  );
};

export default Navbar;
