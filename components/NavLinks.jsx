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
            <h1 className="pt-5 pb-2 pl-4 text-lg uppercase font-light text-customColors-fiord tracking-widest">
              The company
            </h1>
            <ul className="grid gap-1 md:grid-cols-3">
              {abouts.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  icon={component.icon}
                  className="pb-4"
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
            <h1 className="pt-5 pb-2 pl-4 text-lg uppercase font-light text-customColors-fiord tracking-widest">
              Solutions
            </h1>
            <ul className="grid gap-1 md:grid-cols-3">
              {solutions.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  icon={component.icon}
                  className="pb-4"
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
            <h1 className="pt-5 pb-2 pl-4 text-lg uppercase font-light text-customColors-fiord tracking-widest">
              Products
            </h1>
            <ul className="grid gap-2 md:grid-cols-3">
              {products.map((product) => (
                <ListItem
                  key={product.title}
                  title={product.title}
                  href={product.href}
                  icon={product.icon}
                  className="pb-3"
                >
                  {product.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* contact us */}
        <NavigationMenuItem>
          <Link href="#contact" legacyBehavior passHref>
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
          className={`${className} select-none space-y-1 rounded-md px-3 my-1 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex gap-4 items-center`}
          {...otherProps}
        >
          {icon && (
            <div className="w-16 h-16 bg-primary rounded-full flex justify-center items-center text-4xl text-customColors-porcelain p-4">
              {icon}
            </div>
          )}
          <div className="flex flex-col gap-1">
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
