import React, { useState } from "react";
import { Outlet } from "react-router-dom";

// import components
import SidebarDesktop from "../components/sidebar/SidebarDesktop";
import SidebarMobile from "../components/sidebar/SidebarMobile";
import Header from "../components/Header";

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // handle sidebar open (mobile version)
  const handleSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <SidebarDesktop />
      <SidebarMobile isSidebarOpen={isSidebarOpen} />

      <div className="flex w-full flex-1 flex-col">
        <Header handleSidebarOpen={handleSidebarOpen} />

        <main className="h-full overflow-y-auto">
          <div className="container mx-auto grid px-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
