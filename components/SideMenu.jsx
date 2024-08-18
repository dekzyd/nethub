"use client";
import { useGlobalContext } from "./Context";
import { IoClose } from "react-icons/io5";
import { Dropdown } from "flowbite-react";
import Link from "next/link";
import { abouts, products, solutions } from "@/lib/data/NavLinksData";

export default function SideMenu() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  //   show sidemenu if sidebaropen is true
  return (
    <div
      className={`relative h-screen w-screen top-0 left-0 bg-slate-200 ${
        isSidebarOpen ? "block" : "hidden"
      } p-4`}
    >
      <div className="absolute top-4 right-6 ">
        <IoClose
          className="text-3xl hover:text-red-700"
          onClick={closeSidebar}
        />
      </div>
      <div>Logo and search</div>
      {/* map links and data from navlinksData */}
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
      <Dropdown label="Products" placement="right-start">
        <Dropdown.Item>Netswitch</Dropdown.Item>
        <Dropdown.Item>Alterswitch</Dropdown.Item>
        <Dropdown.Item>NetcoHub</Dropdown.Item>
      </Dropdown>
      <Dropdown label="About" placement="right-start">
        <Dropdown.Item>Company Overview</Dropdown.Item>
        <Dropdown.Item>Leaders</Dropdown.Item>
        <Dropdown.Item>Partners</Dropdown.Item>
        <Dropdown.Item>Careers</Dropdown.Item>
      </Dropdown>
    </div>
  );
}
