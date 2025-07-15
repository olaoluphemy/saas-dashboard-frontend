"use client";

import React, { useState } from "react";
import H from "./Heading";
import Avatar from "./Avatar";
import MobileSideBar from "./MobileSideBar";
import { useUser } from "../_hooks/useUser";
import { useTheme } from "../_hooks/useTheme";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {
    state: { user },
  } = useUser();

  const { colorMode } = useTheme();
  return (
    <nav className="px-3 py-3 xl:py-4 lg:px-8 flex justify-between items-center border-b border-[#E9EAF0] dark:border-gray-700 transition-colors duration-[300ms] ease dark:bg-gray-900">
      <MobileSideBar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex items-center gap-4">
        <div
          className="space-y-2 lg:hidden cursor-pointer"
          onClick={() => setIsOpen((s) => !s)}
        >
          <div
            className={`w-10 h-1 ${
              colorMode === "dark" ? "bg-gray-100" : "bg-black"
            }`}
          ></div>
          <div
            className={`w-10 h-1 ${
              colorMode === "dark" ? "bg-gray-100" : "bg-black"
            }`}
          ></div>
          <div
            className={`w-10 h-1 ${
              colorMode === "dark" ? "bg-gray-100" : "bg-black"
            }`}
          ></div>
        </div>

        <H size="lg">Dashboard</H>
      </div>

      <div>
        {user?.firstName ? (
          <Avatar
            size="lg"
            src=""
            name={`${user?.firstName} ${user?.lastName}`}
            alt="avatar-img-femi"
          />
        ) : (
          <div className="bg-white-200 size-16 rounded-full animate-pulse"></div>
        )}
      </div>

      {/* <div className="gap-3 hidden md:flex"></div> */}
    </nav>
  );
}

export default Navbar;
