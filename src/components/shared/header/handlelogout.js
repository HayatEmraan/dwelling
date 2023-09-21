"use client";
import { handleLogout } from "@/libs/security/AuthStore";
import { removecookie } from "@/utils/async/conditions/removeCookie";
import React from "react";

const HandleLogout = () => {
  const handleCookie = async () => {
    await handleLogout();
    await removecookie();
  };
  return (
    <div
      onClick={handleCookie}
      className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
      href="#"
    >
      Logout
    </div>
  );
};

export default HandleLogout;
