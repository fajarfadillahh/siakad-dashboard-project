import React from "react";
import { BiLeaf } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  // handle navigate to "/" page or "dashboard" page
  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <main className="flex h-screen w-full items-center justify-center">
      <div className="grid justify-center gap-8">
        <div className="grid justify-items-center">
          <BiLeaf className="pb-3 text-[4rem] text-blue-500" />
          <h1 className="pb-2 text-2xl font-extrabold text-gray-900">
            Create your an account
          </h1>
          <p className="inline-flex items-center gap-1 font-medium text-gray-500">
            Already have an account?
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>

        <div className="grid w-[300px] gap-4">
          <label className="grid gap-1">
            <span className="font-medium text-gray-500">Full Name</span>
            <input
              type="text"
              placeholder="Enter your name"
              className="h-[48px] rounded-md border-gray-300 bg-transparent font-semibold text-gray-900 placeholder:font-normal placeholder:text-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>

          <label className="grid gap-1">
            <span className="font-medium text-gray-500">ID Number</span>
            <input
              type="number"
              placeholder="Enter 16 numbers ID"
              className="h-[48px] rounded-md border-gray-300 bg-transparent font-semibold text-gray-900 placeholder:font-normal placeholder:text-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>

          <label className="grid gap-1">
            <span className="font-medium text-gray-500">Email Address</span>
            <input
              type="email"
              placeholder="email@example.com"
              className="h-[48px] rounded-md border-gray-300 bg-transparent font-semibold text-gray-900 placeholder:font-normal placeholder:text-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>

          <label className="grid gap-1">
            <span className="font-medium text-gray-500">Password</span>
            <input
              type="password"
              placeholder="Enter your password"
              className="h-[48px] rounded-md border-gray-300 bg-transparent font-semibold text-gray-900 placeholder:font-normal placeholder:text-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </label>

          <button
            type="submit"
            className="flex h-[48px] items-center justify-center rounded-md bg-blue-500 font-bold text-white hover:bg-blue-600"
            onClick={handleNavigate}
          >
            Create Account
          </button>
        </div>
      </div>
    </main>
  );
}
