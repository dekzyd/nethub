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
            <h1 className="pt-4 pl-4 text-lg uppercase font-light text-customColors-fiord tracking-widest">
              The company
            </h1>
            <ul className="grid gap-1 md:grid-cols-3 ">
              {abouts.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  icon={component.icon}
                  className="bg-slate-200"
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="">
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid gap-1 p-4 md:grid-cols-3">
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
            <ul className="grid gap-2 p-4 md:grid-cols-3">
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
          {icon && (
            <div className="w-12 h-12 bg-primary col-span-1 rounded-full flex justify-center items-center text-3xl text-customColors-porcelain">
              {icon}
            </div>
          )}
          <div className="flex flex-col gap-1 col-span-3 ">
            <div className="text-sm text-customColors-fiord uppercase font-semibold tracking-wide leading-none ">
              {title}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
