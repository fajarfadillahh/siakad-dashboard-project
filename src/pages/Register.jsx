import React from "react";
import { BiLeaf } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="grid justify-center gap-8">
        <div className="grid justify-items-center">
          <BiLeaf className="pb-3 text-[4rem] text-green-500" />
          <h1 className="pb-2 text-2xl font-extrabold text-gray-900">
            Create your an account
          </h1>
          <p className="inline-flex items-center gap-1 font-medium text-gray-500">
            Already have an account?
            <Link to="/login" className="text-green-500 hover:underline">
              Login
            </Link>
          </p>
        </div>

        <div className="grid gap-4">
          <label className="grid gap-1">
            <span className="text-[14px] font-medium text-gray-500">
              Full Name
            </span>
            <input
              type="text"
              placeholder="Your Full Name"
              className="h-[48px] w-full rounded-md border-gray-300 bg-transparent font-semibold text-gray-900 placeholder:text-[14px] placeholder:font-normal placeholder:text-gray-500 focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
            />
          </label>

          <label className="grid gap-1">
            <span className="text-[14px] font-medium text-gray-500">
              Email Address
            </span>
            <input
              type="email"
              placeholder="email@example.com"
              className="h-[48px] w-full rounded-md border-gray-300 bg-transparent font-semibold text-gray-900 placeholder:text-[14px] placeholder:font-normal placeholder:text-gray-500 focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
            />
          </label>

          <label className="grid gap-1">
            <span className="text-[14px] font-medium text-gray-500">
              Password
            </span>
            <input
              type="password"
              placeholder="Your Password"
              className="h-[48px] w-full rounded-md border-gray-300 bg-transparent font-semibold text-gray-900 placeholder:text-[14px] placeholder:font-normal placeholder:text-gray-500 focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
            />
          </label>

          <button
            type="submit"
            className="flex h-[48px] items-center justify-center rounded-md bg-green-500 font-bold text-white hover:bg-green-600"
            onClick={(e) => e.preventDefault()}
          >
            Create Account
          </button>
        </div>
      </div>
    </main>
  );
}
