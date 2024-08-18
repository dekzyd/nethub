"use client";
import { useGlobalContext } from "./Context";
import { IoClose } from "react-icons/io5";

export default function SideMenu() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  //   show sidemenu if sidebaropen is true
  return (
    <div
      className={` relative h-screen w-screen top-0 left-0 bg-slate-200 ${
        isSidebarOpen ? "block" : "hidden"
      } p-4`}
    >
      <div className="relative top-0 right-0 ">
        <IoClose
          className="text-3xl hover:text-red-700"
          onClick={closeSidebar}
        />
      </div>
      Sidemenu
    </div>
  );
}
