"use client";

import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItems = () => {
  const pathname = usePathname();
  return (
    <ul className="md:flex-betwee flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = link.route === pathname;
        return (
          <li
            key={link.route}
            className={`${
              isActive
                ? " border-b-2 border-b-primary-500 text-primary-500"
                : ""
            } flex-center p-medium-16 hover:text-red-700 whitespace-nowrap`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
