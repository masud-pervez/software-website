/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FcHome, FcInvite, FcSmartphoneTablet } from "react-icons/fc";

const Footer = () => {
  return (
    <section className="bg-orange-50 bg-[url('/hero/download.svg')]">
      <div className="container mx-auto">
        <div className="flex flex-row md:justify-center md:px-0 px-4">
          <div className="w-3/4 grid md:grid-cols-5 gap-10 md:h-96 py-10">
            <div className="col-span-2">
              <img src="/logo-full.png" className="w-2/4" alt="" />
              <p className="my-3 text-justify text-slate-700 md:w-3/4">
                A rising software development company, Semicolon IT Solutions is
                a one-stop IT solutions company. It has been awarded ISO
                9001:2015 certification for proving itself in the fields of
                IT-enabled services.
              </p>
              <div className="flex flex-row justify-start py-3">
                <span className="p-4 bg-white hover:bg-orange-500 text-slate-800 transition-all ease-in-out hover:text-white cursor-pointer  shadow-md  mr-2 rounded-full ">
                  <BsFacebook />
                </span>
                <span className="p-4 bg-white hover:bg-orange-500 text-slate-800 transition-all ease-in-out hover:text-white cursor-pointer  shadow-md  mr-2 rounded-full ">
                  <BsInstagram />
                </span>
                <span className="p-4 bg-white hover:bg-orange-500 text-slate-800 transition-all ease-in-out hover:text-white cursor-pointer  shadow-md  mr-2 rounded-full ">
                  <BsLinkedin />
                </span>
                <span className="p-4 bg-white hover:bg-orange-500 text-slate-800 transition-all ease-in-out hover:text-white cursor-pointer  shadow-md  mr-2 rounded-full ">
                  <BsTwitter />
                </span>
              </div>
            </div>
            <div className="col-span-1">
              <h1 className="font-bold text-lg">Product</h1>
              <ul>
                <li className="hover:text-orange-500 transition ease-in-out text-slate-700 my-3">
                  <a href="#">Landing Page</a>
                </li>
                <li className="hover:text-orange-500 transition ease-in-out text-slate-700 my-3">
                  <a href="#">Features</a>
                </li>
                <li className="hover:text-orange-500 transition ease-in-out text-slate-700 my-3">
                  <a href="#">Documentation</a>
                </li>
                <li className="hover:text-orange-500 transition ease-in-out text-slate-700 my-3">
                  <a href="#">Referral Program</a>
                </li>
                <li className="hover:text-orange-500 transition ease-in-out text-slate-700 my-3">
                  <a href="#">Pricing</a>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h1 className="font-bold text-lg">Services</h1>
              <ul>
                <li className="hover:text-orange-500 transition ease-in-out text-slate-700 my-3">
                  <a href="#">Documentation</a>
                </li>
                <li className="hover:text-orange-500 transition ease-in-out text-slate-700 my-3">
                  <a href="#">License</a>
                </li>
                <li className="hover:text-orange-500 transition ease-in-out text-slate-700 my-3">
                  <a href="#">Changelog</a>
                </li>
                <li className="hover:text-orange-500 transition ease-in-out text-slate-700 my-3">
                  <a href="#">Developers</a>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h1 className="font-bold text-lg">Informaion</h1>
              <ul>
                <li className="my-3 flex flex-row items-center">
                  <FcSmartphoneTablet className="mr-3 text-2xl" />
                  <span>+8801741223666</span>
                </li>
                <li className="my-3 flex flex-row items-center">
                  <FcInvite className="mr-3 text-2xl" />
                  <span>info@semicolonit.com</span>
                </li>
                <li className="my-3 flex flex-row items-start">
                  <FcHome className="mr-3 text-5xl" />
                  <span>HightTech Park Jesshore, Bangladesh</span>
                </li>
              </ul>
            </div>
            <div className="col-span-full">
              <hr className="mb-3" />
              <div className="flex flex-row justify-between">
                Copyright 2023 by
                <a
                  className="text-orange-400 hover:text-orange-600"
                  href="https://semicolonit.com/"
                  target="_blank"
                >
                  Semicolon IT Solutions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
