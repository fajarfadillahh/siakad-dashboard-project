import React from "react";

export default function PageTitle({ children }) {
  return (
    <h1 className="my-6 text-2xl font-semibold text-gray-900">
      {children}
    </h1>
  );
}
