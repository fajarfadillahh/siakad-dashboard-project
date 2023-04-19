import React from "react";

// import sidebar components
import SidebarContent from "./SidebarContent";

export default function SidebarDesktop() {
  return (
    <aside className="z-30 hidden w-64 flex-shrink-0 overflow-y-auto bg-white lg:block">
      <SidebarContent />
    </aside>
  );
}
