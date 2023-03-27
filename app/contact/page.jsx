/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BsSendFill, BsTelephone } from "react-icons/bs";
import { SlEnvolope } from "react-icons/sl";
import { GoLocation } from "react-icons/go";

const page = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden bg-orange-200">
        <div className="w-36 absolute top-5 rotate-180 right-0 animate-float-y h-36 bg-gradient-to-r from-orange-200 to-orange-300 shadow rounded-full"></div>
        <div className="w-20 h-20 absolute top-52 left-52 animate-float-x bg-gradient-to-r from-orange-200 to-orange-300 shadow rounded-full"></div>
        <div className="w-96 h-96 z-0 absolute -bottom-52 -right-10  bg-gradient-to-r from-orange-200 to-orange-300 shadow rounded-full"></div>
        <div className="container mx-auto md:px-36 px-5">
          <div className="h-96 flex flex-row items-center justify-center">
            <h1 className="text-5xl font-bold text-orange-600">Contact Us</h1>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto md:px-36 px-5">
          <div className="grid md:grid-cols-12">
            <div className="col-span-5">
              <div className="">
                <h1 className="text-4xl font-bold text-slate-700">
                  Always Ready For Your Solution
                </h1>
                <p className="my-4 text-xl text-slate-600">
                  Praesent justo nisl, commodo quis velit vitae, vulputate
                  accumsan dui.
                </p>
                <ul>
                  <li className="flex flex-row items-center animated-hover-icon my-5">
                    <div className="p-5 bg-white shadow-md rounded-full icon mr-5">
                      <BsTelephone className="text-2xl text-orange-600" />
                    </div>
                    <div className="">
                      <h1 className="text-xl font-bold text-slate-700">
                        Phone
                      </h1>
                      <p className="text-slate-600">+8801741223666</p>
                    </div>
                  </li>
                  <li className="flex flex-row items-center animated-hover-icon my-5">
                    <div className="p-5 bg-white shadow-md rounded-full icon  mr-5">
                      <SlEnvolope className="text-2xl text-orange-600" />
                    </div>
                    <div className="">
                      <h1 className="text-xl font-bold text-slate-700">
                        Email
                      </h1>
                      <p className="text-slate-600">info@semicolonit.com</p>
                    </div>
                  </li>
                  <li className="flex flex-row items-center animated-hover-icon my-5">
                    <div className="p-5 bg-white shadow-md rounded-full icon  mr-5">
                      <GoLocation className="text-2xl text-orange-600" />
                    </div>
                    <div className="">
                      <h1 className="text-xl font-bold text-slate-700">
                        Location
                      </h1>
                      <p className="text-slate-600">
                        1791 Yorkshire Circle Kitty Hawk,
                        <br /> NC 279499
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-7">
              <div className="flex flex-row justify-end items-center h-96">
                <img
                  src="/contact/contact.svg"
                  className="w-3/4 animate-float-y"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-50">
        <div className="container py-10 mx-auto z-10 md:px-36 px-5">
          <div className="bg-white h-96 shadow rounded border-t-4 border-orange-500">
            <h1 className="text-center text-4xl py-3">Tech In Touch</h1>
            <form autoComplete="off">
              <div className="container mx-auto px-36">
                <div className="grid grid-cols-12 gap-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="bg-slate-50 outline-none focus:ring-1 transition ease-in-out p-3 col-span-6"
                    name=""
                    id=""
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-slate-50 outline-none focus:ring-1 transition ease-in-out p-3 col-span-6"
                    name=""
                    id=""
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    className="bg-slate-50 outline-none focus:ring-1 transition ease-in-out p-3 col-span-12"
                    name=""
                    id=""
                  />
                  <textarea
                    type="text"
                    placeholder="Subject"
                    className="bg-slate-50 outline-none focus:ring-1 transition ease-in-out p-3 col-span-12"
                    name=""
                    id=""
                  />
                  <button className="col-span-2 p-2 text-slate-50 hover:ring-1 bg-gradient-to-tr from-orange-600 to-orange-400 rounded flex flex-row justify-center items-center  shadow">
                    <BsSendFill /> <span className="ml-3">Send Mail</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
