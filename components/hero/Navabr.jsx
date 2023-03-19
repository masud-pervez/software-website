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
        colorChange && "bg-slate-100 shadow-md text-slate-100 transition-all"
      }`}
    >
      <div class="container mx-auto p-4">
        <a class="navbar-brand" href="#">
          <img src="/logo-full.png" className="img-fluid w-48" alt="" />
        </a>
        {/* <ul class="navbar-nav lg:block ms-auto my-2 my-lg-0">
          <li class="nav-item">
            <a class="nav-link text-xl font-bold" aria-current="page" href="#">
              Home
            </a>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
