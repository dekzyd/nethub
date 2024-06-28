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

const components = [
  {
    title: "Alert Dialog",
    href: "/solutions",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/solutions",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/solutions",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/solutions",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/solutions",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/solutions",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/about" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/about" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/about" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
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
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/resources" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/resources" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem href="/resources" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
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
        <a
          ref={ref}
          className={`${className} block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`}
          {...otherProps}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";
