/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 180) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  const pathname = usePathname();

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <nav
      className={`${
        pathname === "/" && "fixed"
      } transition ease-in-out top-0 w-full z-30  ${
        colorChange ? "bg-slate-100 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto md:px-36 px-5">
        <div className="flex flex-row justify-between items-center py-4">
          <a className="navbar-brand" href="/">
            <div className="lg:bg-[url('/logo-full.png')] bg-[url('/logo.png')]  w-48 h-10 bg-no-repeat bg-contain"></div>
          </a>
          <div className="md:block hidden">
            <ul>
              <li className="inline-block ml-5">
                <a
                  className={`text-lg ${
                    pathname === "/" ? "text-orange-700" : "text-slate-700"
                  }`}
                  href="/home"
                >
                  Home
                </a>
              </li>
              {/* <li className="inline-block ml-5">
                  <a
                    className={`text-lg ${
                      pathname === "/about"
                        ? "text-orange-700"
                        : "text-slate-700"
                    }`}
                    href="/about"
                  >
                    About
                  </a>
                </li> */}
              <li className="inline-block ml-5">
                <a
                  className={`text-lg ${
                    pathname === "/feature"
                      ? "text-orange-700"
                      : "text-slate-700"
                  }`}
                  href="/feature"
                >
                  Feature
                </a>
              </li>
              <li className="inline-block ml-5">
                <a
                  className={`text-lg ${
                    pathname === "/pricing"
                      ? "text-orange-700"
                      : "text-slate-700"
                  }`}
                  href="/pricing"
                >
                  Price
                </a>
              </li>
              <li className="inline-block ml-5">
                <a
                  className={`text-lg ${
                    pathname === "/contact"
                      ? "text-orange-700"
                      : "text-slate-700"
                  }`}
                  href="/contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
