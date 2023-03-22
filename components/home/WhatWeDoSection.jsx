/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TbPresentationAnalytics } from "react-icons/tb";

const WhatWeDoSection = () => {
  return (
    <section className="bg-slate-50">
      <div className="container mx-auto">
        <div
          className="text-center pb-4 pt-10 -mt-5"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <span className="bg-orange-200 px-6 py-2 rounded-3xl text-orange-500">
            What We Do
          </span>
          <h1 className="md:text-4xl text-xl mt-6 font-bold">
            The Complete Software <br /> Solution
          </h1>
        </div>

        <div className="flex justify-center">
          <div className="w-4/5 grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            <div
              className="mt-6 animated-hover-icon"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="h-60 shadow-md hover:shadow-xl transition ease-out bg-white p-6 rounded">
                <div className="bg-orange-200 inline-block rounded-full text-orange-500 p-4 icon">
                  <TbPresentationAnalytics className="text-4xl" />
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
            <div
              className="mt-6 animated-hover-icon"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="h-60 shadow-md hover:shadow-xl transition ease-out bg-white p-6 rounded ">
                <div className="bg-orange-200 inline-block rounded-full text-orange-500 p-4 icon">
                  <TbPresentationAnalytics className="text-4xl" />
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
            <div
              className="mt-6 animated-hover-icon"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <div className="h-60 shadow-md hover:shadow-xl transition ease-out bg-white p-6 rounded ">
                <div className="bg-orange-200 inline-block rounded-full text-orange-500 p-4 icon">
                  <TbPresentationAnalytics className="text-4xl" />
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
            <div
              className="mt-6 animated-hover-icon"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <div className="h-60 shadow-md hover:shadow-xl transition ease-out bg-white p-6 rounded ">
                <div className="bg-orange-200 inline-block rounded-full text-orange-500 p-4 icon">
                  <TbPresentationAnalytics className="text-4xl" />
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
        </div>

        <div className="flex justify-center">
          <div className="w-3/4 grid md:grid-cols-2 py-24">
            <div className="col-span-1 py-3">
              <div data-aos="fade-right" data-aos-once="true">
                <span className="bg-orange-200 px-6 py-2 rounded-3xl text-orange-500">
                  Data Analysis
                </span>
                <h1 className="md:text-4xl text-2xl font-bold py-4">
                  Advanced Protection <br /> Made Easy
                </h1>
                <p className="text-xl text-slate-600">
                  Pellentesque efficitur nibh a consectetur sodales. Curabitur
                  quis tempor neque, non tempor nibh. Nunc sapien neque,
                </p>
                <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded my-5">
                  Read More
                </button>
              </div>
            </div>
            <div className="col-span-1">
              <div
                className="flex justify-center"
                data-aos="fade-left"
                data-aos-once="true"
              >
                <div className="animate-float-y">
                  <img src="/hero/Part.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
