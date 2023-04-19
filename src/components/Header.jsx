import React, { useState } from "react";
import {
  HiOutlineMenu,
  HiOutlineSearch,
  HiOutlineMoon,
  HiOutlineBell,
  HiOutlineUser,
  HiOutlineCog,
  HiOutlineLogout,
} from "react-icons/hi";

// import sidebar content
import SidebarContent from "./sidebar/SidebarContent";

export default function Header() {
  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  // handle notification click
  function handleNotificationsClick() {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen);
  }

  // handle profile click
  function handleProfileClick() {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  }

  return (
    <>
      <header className="z-40 max-h-20 bg-white py-4 shadow-sm">
        <div className="container mx-auto flex h-full items-center justify-between px-6 text-purple-600">
          <button
            className="-ml-1 mr-5 cursor-pointer rounded-md p-0.5 lg:hidden"
            onClick={() => setIsOpenSidebar(!isOpenSidebar)}
          >
            <HiOutlineMenu className="text-[1.5rem]" />
          </button>

          <div className="flex flex-1 justify-center lg:mr-32">
            <form className="mr-6 flex w-full max-w-xl items-center gap-2 rounded-md border border-gray-200 px-2 lg:px-4">
              <HiOutlineSearch className="text-[1.5rem]" />

              <input
                className="h-12 w-full text-gray-700 outline-none"
                placeholder="Search for projects"
              />
            </form>
          </div>

          <ul className="flex items-center gap-3 lg:gap-5">
            <li className="inline-flex">
              <button className="cursor-pointer rounded-md p-0.5">
                <HiOutlineMoon className="text-[1.5rem]" />
              </button>
            </li>
            <li className="inline-flex">
              <button className="cursor-pointer rounded-md p-0.5">
                <HiOutlineBell className="text-[1.5rem]" />
              </button>
            </li>
            <li className="relative">
              <button className="h-10 w-10 overflow-hidden rounded-full">
                <img
                  className="h-full w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                  alt="profile img"
                />
              </button>
            </li>
          </ul>
        </div>
      </header>

      {/* sidebar for mobile version */}
      <aside
        className={`fixed top-0 z-50 mt-20 h-full w-64 bg-white shadow-sm transition-all duration-300 ease-in-out lg:hidden ${
          isOpenSidebar ? "left-0" : "-left-full"
        }`}
      >
        <SidebarContent />
      </aside>
    </>
  );
}
