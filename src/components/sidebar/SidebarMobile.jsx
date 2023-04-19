import React from "react";

// import sidebar components
import SidebarContent from "./SidebarContent";

export default function SidebarMobile({ isSidebarOpen }) {
  return (
    <aside
      className={`fixed top-0 z-50 mt-20 h-full w-64 bg-white shadow-sm transition-all duration-300 ease-in-out lg:hidden ${
        isSidebarOpen ? "left-0" : "-left-full"
      }`}
    >
      <SidebarContent />
    </aside>
  );
}
