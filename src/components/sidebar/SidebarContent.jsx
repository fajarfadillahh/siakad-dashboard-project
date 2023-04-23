import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineCollection,
  HiOutlineClipboardList,
} from "react-icons/hi";

export default function SidebarContent() {
  const location = useLocation();

  return (
    <div className="flex h-full flex-col gap-8 px-6">
      <div className="flex h-[80px] items-center justify-center">
        <Link to="#" className="text-lg font-bold text-gray-900">
          Agrikultur
        </Link>
      </div>

      <ul className="flex flex-col gap-1">
        {[
          [<HiOutlineHome />, "Dashboard", "/"],
          [<HiOutlineCollection />, "Swiper", "/swiper"],
          [<HiOutlineClipboardList />, "Information", "/information"],
        ].map(([icon, name, path], index) => {
          return (
            <li key={index}>
              <Link
                to={path}
                className={`flex h-[48px] items-center gap-3 rounded-md px-3 ${
                  location.pathname === path
                    ? "bg-green-600 text-white"
                    : "bg-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <span className="text-[1.5rem]">{icon}</span>
                <p className="font-semibold">{name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
