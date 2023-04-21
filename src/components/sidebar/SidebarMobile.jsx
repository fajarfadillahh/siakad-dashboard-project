import React from "react";

// import sidebar components
import SidebarContent from "./SidebarContent";

export default function SidebarMobile({ isSidebarOpen }) {
  return (
    <aside
      className={`fixed top-0 z-40 mt-20 h-full w-64 bg-white shadow-[-2px_0_12px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out lg:hidden ${
        isSidebarOpen ? "left-0" : "-left-full"
      }`}
    >
      <SidebarContent />
    </aside>
  );
}
