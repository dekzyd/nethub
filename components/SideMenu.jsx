"use client";
import { useGlobalContext } from "./Context";
import { IoClose } from "react-icons/io5";
import { Dropdown } from "flowbite-react";
import Link from "next/link";
import { abouts, products, solutions } from "@/lib/data/NavLinksData";
import Logo from "./Logo";

export default function SideMenu() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  //   show sidemenu if sidebaropen is true
  return (
    <div
      className={`flex flex-col gap-y-4 h-screen w-screen fixed top-0 left-0 z-50 bg-slate-200 ${
        isSidebarOpen ? "block" : "hidden"
      } p-4`}
    >
      {/* close sidebar button */}
      <div className="absolute top-4 right-6 ">
        <IoClose
          className="text-3xl hover:text-red-700"
          onClick={closeSidebar}
        />
      </div>
      {/* map links and data from navlinksData */}
      <div className="">
        <Logo />
      </div>
      {/* solutions */}
      <Dropdown label="Solutions" placement="right-start">
        {solutions.map((item) => {
          const { title, href, icon } = item;
          return (
            <Dropdown.Item key={title}>
              <Link href={href}>{title}</Link>
            </Dropdown.Item>
          );
        })}
      </Dropdown>
      {/* products */}
      <Dropdown label="Products" placement="right-start">
        {products.map((item) => {
          const { title, href, icon } = item;
          return (
            <Dropdown.Item key={title}>
              <Link href={href}>{title}</Link>
            </Dropdown.Item>
          );
        })}
      </Dropdown>
      {/* About */}
      <Dropdown label="About" placement="right-start">
        {abouts.map((item) => {
          const { title, href, icon } = item;
          return (
            <Dropdown.Item key={title}>
              <Link href={href}>{title}</Link>
            </Dropdown.Item>
          );
        })}
      </Dropdown>
    </div>
  );
}
