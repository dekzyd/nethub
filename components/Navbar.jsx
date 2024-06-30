import Divider from "./divider";
import Link from "next/link";
import { NavigationMenuDemo } from "./NavLinks";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="w-full h-20 flex justify-center">
        <div className="container p-3 flex items-center gap-x-3">
          {/* logo */}
          <Link href="/">
            <div id="logo" className=" basis-1/4 text-3xl font-bold">
              <Logo />
            </div>
          </Link>
          {/* links */}
          <ul className="hidden lg:flex basis-3/4 justify-end">
            <NavigationMenuDemo />
          </ul>
          {/* dropdown icon */}
          <div className="lg:hidden flex justify-end basis-3/4">dropdown</div>
        </div>
      </div>
      {/* element divider */}
      <Divider fill="#EE4E4E" />
    </nav>
  );
};

export default Navbar;
