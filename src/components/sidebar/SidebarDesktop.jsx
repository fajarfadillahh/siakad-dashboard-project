import React from "react";

// import sidebar components
import SidebarContent from "./SidebarContent";

export default function SidebarDesktop() {
  return (
    <aside className="z-50 hidden w-64 overflow-y-auto bg-white shadow-[-2px_0_6px_rgba(0,0,0,0.1)] lg:block">
      <SidebarContent />
    </aside>
  );
}
