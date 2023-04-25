import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  HiMenu,
  HiOutlineSearch,
  HiBell,
  HiOutlineUser,
  HiOutlineCog,
  HiOutlineLogout,
} from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Header({ handleSidebarOpen }) {
  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false);

  // handle notification click
  function handleNotificationsClick() {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen);
  }

  return (
    <header className="z-40 flex items-center bg-white shadow-[0_2px_6px_rgba(0,0,0,0.05)]">
      <div className="container flex h-[80px] max-w-full items-center justify-between gap-6 px-6">
        <div className="inline-flex items-center gap-4">
          <button
            className="inline-flex rounded-md p-0.5 text-[1.5rem] text-blue-500 hover:bg-blue-50 focus:ring-[3px] focus:ring-blue-300 lg:hidden"
            onClick={handleSidebarOpen}
          >
            <HiMenu />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <button className="inline-flex rounded-md p-0.5 text-[1.5rem] text-blue-500 hover:bg-blue-50 focus:ring-[3px] focus:ring-blue-300">
              <HiBell />
            </button>

            {/* dot notification */}
            <div className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
          </div>

          <Menu as="div" className="relative">
            <Menu.Button className="h-10 w-10 overflow-hidden rounded-full">
              <img
                className="h-full w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                alt="profile img"
              />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                as="ul"
                className="absolute right-0 z-30 mt-2 flex w-[230px] flex-col gap-1 rounded-md border border-gray-100 bg-white p-3 shadow-lg"
              >
                {[
                  [<HiOutlineUser />, "Profile", "/profile"],
                  [<HiOutlineCog />, "Settings", "/settings"],
                  [<HiOutlineLogout />, "Log out", "/login"],
                ].map(([icon, name, path], index) => {
                  return (
                    <Menu.Item key={index}>
                      <Link
                        to={path}
                        className="inline-flex items-center gap-3 rounded-md p-2 text-gray-500 hover:bg-gray-100"
                      >
                        <div className="text-[1.5rem]">{icon}</div>
                        <p className="font-semibold">{name}</p>
                      </Link>
                    </Menu.Item>
                  );
                })}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </header>
  );
}
