/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 120) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <nav
      class={`fixed top-0 w-full z-30 ${
        colorChange && "bg-slate-100 shadow-md transition-all"
      }`}
    >
      <div class="container mx-auto">
        <div className="flex flex-row justify-center py-4">
          <div className="w-3/4 flex flex-row justify-between items-center">
            <a class="navbar-brand" href="/">
              <img src="/logo-full.png" className="img-fluid w-48" alt="" />
            </a>
            <div className="md:block hidden">
              <ul>
                <li class="inline-block ml-5">
                  <a class="text-lg text-slate-700" href="#">
                    Home
                  </a>
                </li>
                <li class="inline-block ml-5">
                  <a class="text-lg text-slate-700" href="#">
                    Feature
                  </a>
                </li>
                <li class="inline-block ml-5">
                  <a class="text-lg text-slate-700" href="#">
                    About
                  </a>
                </li>
                <li class="inline-block ml-5">
                  <a class="text-lg text-slate-700" href="#">
                    Team
                  </a>
                </li>
                <li class="inline-block ml-5">
                  <a class="text-lg text-slate-700" href="#">
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
