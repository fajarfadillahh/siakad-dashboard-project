import React from "react";
import { Outlet } from "react-router-dom";

// import components
import Header from "../components/Header";
import SidebarDesktop from "../components/sidebar/SidebarDesktop";

export default function Layout() {
  return (
    <div className="flex h-screen bg-gray-50">
      <SidebarDesktop />

      <div className="flex w-full flex-1 flex-col">
        <Header />

        <main className="h-full overflow-y-auto">
          <div className="container mx-auto grid px-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
