"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/Login" },
  { name: "Forget-Password", href: "/forget-password" },
];

const layout = ({ children }) => {
  let pathname = usePathname();
  console.log(pathname);
  return (
    <div className="">
      <div className="flex w-screen justify-between p-10 ">
        {navLinks.map((link, idx) => {
          //   const isActive = pathname === link.href; ese bhi kar sakte hey or
          return (
            <Link
              href={link.href}
              className={` ${
                // isActive ? "text-2xl text-amber-400 " : "text-white text-xl"}`} ese bhi kar sakte or
                pathname === link.href
                  ? "text-xl scale-110  text-amber-400 "
                  : "text-white text-xl"
              } ease-in-out `}
              key={link.name}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      {children}
    </div>
  );
};

export default layout;
