/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import AOS from "aos";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="relative bg-fixed bg-gradient-to-tr from-indigo-400 to-blue-500 z-10 overflow-hidden">
        <div className=" bg-[url('/hero/download.svg')] z-0">
          <div className="w-52 h-20 bg-gradient-to-tr from-indigo-300 animate-pulse blur-xl rounded-full  absolute bottom-52 right-20 stroke-inherit"></div>
          <div className="w-96 h-96 bg-gradient-to-tr from-indigo-300 animate-pulse blur-xl rounded-full  absolute -bottom-52 -left-20 stroke-inherit"></div>
          <div className="w-96 h-96 bg-gradient-to-tr from-indigo-300 animate-pulse blur-xl rounded-full  absolute -top-62 -left-20 rotate-90 stroke-inherit"></div>
          <div className="w-96 h-96 bg-gradient-to-tr from-indigo-300 animate-pulse blur-xl rounded-full  absolute top-6 -right-20 rotate-180 stroke-inherit"></div>
          <div className="w-96 h-96 bg-gradient-to-tr from-indigo-300 animate-pulse blur-xl rounded-full  absolute bottom-0 right-96 stroke-inherit"></div>
          <img
            src="/hero/wave.svg"
            className="absolute bottom-0 z-0 object-cover"
            alt=""
          />
          <div className="grid grid-rows-2 mt-24 mb-12">
            <div
              className="text-center order-1 flex flex-col items-center justify-center"
              data-aos="fade-up"
            >
              <h1 className="md:text-7xl text-4xl text-center font-bold text-white">
                In The World Of SaaS <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                  Business
                </span>
              </h1>
              <button className="bg-rose-500 hover:bg-rose-600 opacity-75 hover:opacity-80 text-white font-bold py-2 px-4 rounded my-3">
                Read More
              </button>
            </div>
            <div
              className="order-1 flex justify-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img
                src="/hero/hero.svg"
                className="h-48 object-contain md:h-full   z-10"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center pb-4 pt-5">
            <span className="bg-indigo-100 px-6 py-2 rounded-3xl text-purple-500">
              What We Do
            </span>
            <h1 className="md:text-4xl text-xl mt-6 font-bold">
              The Complete Software <br /> Solution
            </h1>
          </div>

          <div className="grid md:grid-cols-4">
            <div className="col-md-3 px-6 mt-6">
              <div className="h-72 shadow-md hover:shadow-xl transition ease-out bg-white p-6 rounded">
                <div className="my-3">
                  <span className="bg-indigo-500 px-4 py-3 text-slate-50 rounded-full">
                    i
                  </span>
                </div>
                <h1 className="text-2xl font-bold text-slate-600 pt-3">
                  Fast Development
                </h1>
                <p className="text-slate-500 py-4">
                  Aenean vel gravida erat. Donec interdum congue neque, at
                  aliquam urna finibus
                </p>
              </div>
            </div>
            <div className="col-md-3 px-6 mt-6">
              <div className="h-72 shadow-md hover:shadow-xl transition ease-out bg-white p-6 rounded ">
                <div className="my-3">
                  <span className="bg-indigo-500 px-4 py-3 text-slate-50 rounded-full">
                    i
                  </span>
                </div>
                <h1 className="text-2xl font-bold text-slate-600 pt-3">
                  Website Optimization
                </h1>
                <p className="text-slate-500 py-4">
                  Aenean vel gravida erat. Donec interdum congue neque, at
                  aliquam urna finibus
                </p>
              </div>
            </div>
            <div className="col-md-3 px-6 mt-6">
              <div className="h-72 shadow-md hover:shadow-xl transition ease-out bg-white p-6 rounded ">
                <div className="my-3">
                  <span className="bg-indigo-500 px-4 py-3 text-slate-50 rounded-full">
                    i
                  </span>
                </div>
                <h1 className="text-2xl font-bold text-slate-600 pt-3">
                  Responsive design
                </h1>
                <p className="text-slate-500 py-4">
                  Aenean vel gravida erat. Donec interdum congue neque, at
                  aliquam urna finibus
                </p>
              </div>
            </div>
            <div className="col-md-3 px-6 mt-6">
              <div className="h-72 shadow-md hover:shadow-xl transition ease-out bg-white p-6 rounded ">
                <div className="my-3">
                  <span className="bg-indigo-500 px-4 py-3 text-slate-50 rounded-full">
                    i
                  </span>
                </div>
                <h1 className="text-2xl font-bold text-slate-600 pt-3">
                  Website Optimization
                </h1>
                <p className="text-slate-500 py-4">
                  Aenean vel gravida erat. Donec interdum congue neque, at
                  aliquam urna finibus
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 mt-10 px-5">
            <div className="col-span-1 py-3">
              <div className="text-start md:pr-32">
                <span className="bg-indigo-100 px-6 py-2 rounded-3xl text-purple-500">
                  Data Analysis
                </span>
                <h1 className="md:text-4xl text-2xl font-bold py-4">
                  Advanced Protection <br /> Made Easy
                </h1>
                <p className="text-xl text-slate-600">
                  Pellentesque efficitur nibh a consectetur sodales. Curabitur
                  quis tempor neque, non tempor nibh. Nunc sapien neque,
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5">
                  Read More
                </button>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex justify-center">
                <img src="/hero/Part.svg" alt="" />
              </div>
              {/* <div className="relative">
                <img
                  src="/hero/blob.svg"
                  className="absolute max-w-full h-auto right-52"
                  alt=""
                />
                <img
                  src="/hero/phone.svg"
                  className="absolute max-w-full h-auto right-0"
                  alt=""
                />
                <img
                  src="/hero/img-1.jpg"
                  className="absolute max-w-full left-0 h-auto"
                  alt=""
                />
              </div> */}
            </div>
          </div>

          {/* <div className="grid md:grid-cols-5 mt-36 px-5">
            <div className="col-span-3 bg-slate-400 py-5 relative h-96 ">
              <dispatchEvent>
                <img
                  src="/hero/blob.svg"
                  className="w-96 absolute left-8 -top-24"
                  alt=""
                />
                <img
                  src="/hero/phone.svg"
                  className="w-40 absolute -left-4 top-12"
                  alt=""
                />
                <img
                  src="/hero/img-1.jpg"
                  className="w-80 absolute left-36 bottom-20 shadow-md"
                  alt=""
                />
              </dispatchEvent>
            </div>
            <div className="col-span-2 py-3">
              <div className="text-start">
                <span className="bg-indigo-100 px-6 py-2 rounded-3xl text-purple-500">
                  Data Analysis
                </span>
                <h1 className="md:text-4xl text-2xl font-bold py-4">
                  Advanced Protection <br /> Made Easy
                </h1>
                <p className="text-xl text-slate-600">
                  Pellentesque efficitur nibh a consectetur sodales. Curabitur
                  quis tempor neque, non tempor nibh. Nunc sapien neque,
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3">
                  Read More
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Home;
