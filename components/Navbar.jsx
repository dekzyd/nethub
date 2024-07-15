import Divider from "./divider";
import Link from "next/link";
import { NavigationMenuDemo } from "./NavLinks";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 z-10 bg-white drop-shadow-lg">
      <div className="w-full h-20 flex">
        <div className="container flex justify-between gap-x-3">
          {/* logo */}
          <Link href="/">
            <div id="logo" className="text-3xl font-bold">
              <Logo />
            </div>
          </Link>
          {/* links */}
          <ul className="hidden lg:flex justify-end">
            <NavigationMenuDemo />
          </ul>
          {/* dropdown icon */}
          <div className="lg:hidden flex justify-end basis-3/4">dropdown</div>
        </div>
      </div>
      {/* element divider */}
      <Divider fill="#e8476f" />
    </nav>
  );
};

export default Navbar;
