"use client";
import { useContext, createContext, useState } from "react";

// initiate context
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // open sidebar
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  // close sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{ isSidebarOpen, setIsSidebarOpen, openSidebar, closeSidebar }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom global hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
