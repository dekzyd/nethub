import React from "react";
import Link from "next/link";
import { Search } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// solution items
const solutions = [
  {
    title: "Voice",
    href: "/solutions/voice",
    description: "Nethub's voice solutions.",
  },
  {
    title: "Internet",
    href: "/solutions/internet",
    description: "Nethub's internet solutions.",
  },
  {
    title: "SIP",
    href: "/solutions/sip",
    description: "Nethub's SIP solutions.",
  },
  {
    title: "Cloud PBX & Call Center",
    href: "/solutions/cloudpbx",
    description: "Nethub's Cloud PBX & call center solutions.",
  },
  {
    title: "Softphone",
    href: "/solutions/softphone",
    description: "Nethub's Softphone solutions.",
  },
  {
    title: "DID Solutions",
    href: "/solutions/did",
    description: "DID Management solutions.",
  },
];

// product items

const products = [
  {
    title: "Netswitch",
    href: "/products/netswitch",
    description: "Nethub's Netswitch Product.",
  },
  {
    title: "Alterswitch",
    href: "#",
    description: "Nethub's Alterswitch Product.",
  },
];

const abouts = [
  {
    title: "The Company",
    href: "/about",
    description: "Nethub Organization.",
  },
  {
    title: "Careers",
    href: "/about",
    description: "Join us.",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px]">
              {abouts.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {solutions.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {products.map((product) => (
                <ListItem
                  key={product.title}
                  title={product.title}
                  href={product.href}
                >
                  {product.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* contact us */}
        <NavigationMenuItem>
          <Link href="#footer" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* search */}
        <NavigationMenuItem>
          <Link href="#" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <span className="mr-1">Search</span>
              <Search size={15} strokeWidth={2} />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef((props, ref) => {
  const { className, title, children, ...otherProps } = props;

  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={`${className} block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`}
          {...otherProps}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
