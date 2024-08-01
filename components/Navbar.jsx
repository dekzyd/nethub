import Divider from "./divider";
import Link from "next/link";
import { NavigationMenuDemo } from "./NavLinks";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 bg-white z-20 drop-shadow-lg">
      <div className="w-full h-20 flex">
        <div className="container flex justify-between items-center gap-x-3">
          {/* logo */}
          <Link href="/" className="relative top-1">
            <div id="logo">
              <Logo />
            </div>
          </Link>
          {/* links */}
          <ul className="hidden lg:flex justify-end ">
            <NavigationMenuDemo className="" />
          </ul>
          {/* dropdown icon */}
          <div className="lg:hidden flex justify-end basis-3/4">dropdown</div>
        </div>
      </div>
      {/* element divider */}
      <Divider fill="var(--preprimary)" />
    </nav>
  );
};

export default Navbar;
