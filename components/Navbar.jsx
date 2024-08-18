"use client";
import Divider from "./divider";
import Link from "next/link";
import { NavigationMenuDemo } from "./NavLinks";
import { TiThMenu } from "react-icons/ti";
import Logo from "./Logo";
import { useGlobalContext } from "./Context";

const Navbar = () => {
  const { isSidebarOpen, openSidebar } = useGlobalContext();
  return (
    <nav className="w-full sticky top-0 bg-white z-20 drop-shadow-lg">
      <div className="w-full h-16 flex">
        <div className="container flex justify-between items-center">
          {/* logo */}
          <Link href="/" className="relative top-1">
            <div id="logo">
              <Logo />
            </div>
          </Link>
          {/* links */}
          <ul className="hidden md:flex justify-end mt-2">
            <NavigationMenuDemo className="" />
          </ul>
          {/* dropdown icon */}
          <div className="md:hidden flex justify-end basis-3/4">
            <TiThMenu
              className="text-2xl text-customColors-dovegray relative top-[6px] hover:text-primary"
              onClick={openSidebar}
            />
          </div>
        </div>
      </div>
      {/* element divider */}
      <Divider fill="var(--preprimary)" />
    </nav>
  );
};

export default Navbar;
