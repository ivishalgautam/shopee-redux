import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const RootLayout = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900">
      <Navbar />
      <main className="px-4 lg:px-20 md:px-10 sm:px-2 pb-4 flex items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
