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
            {/* <li className="px-4 py-2">About</li>
            <li className="px-4 py-2">Solutions</li>
            <li className="px-4 py-2">Resources</li>
             */}

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>About</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <li className="px-4 py-2">Contact Us</li>
            <li className="px-4 py-2">Search</li>
          </ul>
          {/* dropdown icon */}
          <div className="lg:hidden flex justify-end basis-3/4">dropdown</div>
        </div>
      </div>
      {/* element divider */}
      <div className="rotate-180">
        <svg
          className="w-full h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path fill="#EE4E4E" d="M0,6V0h1000v100L0,6z"></path>
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
