import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineClipboard,
  HiOutlineCollection,
  HiOutlineChartPie,
} from "react-icons/hi";

export default function SidebarContent() {
  const location = useLocation();

  return (
    <div className="py-4 text-gray-500">
      <Link to="#" className="ml-6 text-lg font-bold text-gray-900">
        Agrikultur
      </Link>

      <ul className="mt-6">
        {[
          [<HiOutlineHome />, "Dashboard", "/"],
          [<HiOutlineClipboard />, "Forms", "/forms"],
          [<HiOutlineCollection />, "Cards", "/cards"],
          [<HiOutlineChartPie />, "Charts", "/charts"],
        ].map(([icon, name, path], index) => {
          return (
            <li key={index} className="relative px-6 py-3">
              <Link
                to={path}
                className="inline-flex w-full items-center text-sm font-semibold transition-colors duration-150 hover:text-gray-900"
              >
                <span className="text-[1.5rem]">{icon}</span>
                <p className="ml-4">{name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
