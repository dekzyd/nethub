import React from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { solutions, products, abouts } from "@/lib/data/NavLinksData";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-1 p-4 md:w-[550px] md:grid-cols-2 lg:w-[650px]">
              {abouts.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  icon={component.icon}
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
            <ul className="grid w-[400px] gap-1 p-4 md:w-[550px] md:grid-cols-2 lg:w-[650px]">
              {solutions.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  icon={component.icon}
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
            <ul className="grid w-[400px] gap-2 p-4 md:w-[550px] md:grid-cols-2 lg:w-[650px]">
              {products.map((product) => (
                <ListItem
                  key={product.title}
                  title={product.title}
                  href={product.href}
                  icon={product.icon}
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
  const { className, title, children, icon, ...otherProps } = props;

  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={`${className} select-none space-y-1 rounded-md px-3 my-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground grid grid-cols-4`}
          {...otherProps}
        >
          {/* icon */}
          {icon && (
            <div className="w-12 h-12 bg-primary col-span-1 rounded-full flex justify-center items-center text-3xl text-customColors-porcelain">
              {icon}
            </div>
          )}
          {/* title and description */}
          <div className="flex flex-col gap-1 col-span-3">
            <div className="text-base font-medium leading-none -ml-3">
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground -ml-3">
              {children}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
