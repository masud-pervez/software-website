/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="home"
      data-aos-once="true"
      data-aos="fade-down"
      data-aos-delay="100"
      className="relative bg-fixed bg-orange-200 z-10 overflow-hidden h-auto"
    >
      <div className="bg-[url('/hero/download.svg')] z-0">
        <div className="w-52 h-20 bg-gradient-to-tr from-orange-200 animate-pulse blur-xl rounded-full  absolute bottom-52 right-20 stroke-inherit"></div>
        <div className="w-96 h-96 bg-gradient-to-tr from-orange-200 animate-pulse blur-xl rounded-full  absolute -bottom-52 -left-20 stroke-inherit"></div>
        <div className="w-96 h-96 bg-gradient-to-tr from-orange-200 animate-pulse blur-xl rounded-full  absolute -top-62 -left-20 rotate-90 stroke-inherit"></div>
        <div className="w-96 h-96 bg-gradient-to-tr from-orange-200 animate-pulse blur-xl rounded-full  absolute top-6 -right-20 rotate-180 stroke-inherit"></div>
        <div className="w-96 h-96 bg-gradient-to-tr from-orange-200 animate-pulse blur-xl rounded-full  absolute bottom-0 right-96 stroke-inherit"></div>
        <img
          src="/hero/wave.svg"
          className="absolute bottom-0 left-0  z-0 object-cover"
          alt=""
        />
        <div className="grid grid-rows-2 mt-24 mb-12 content-center">
          <div
            className="text-center order-1 flex flex-col items-center justify-center"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="200"
          >
            <h1 className="md:text-7xl text-4xl text-center font-bold text-slate-700">
              In The World Of SaaS <br />
              Business
            </h1>
            <Link href="/feature">
              <button className="shake bg-rose-500 hover:bg-rose-600 opacity-75 hover:opacity-80 text-white font-bold py-2 px-4 rounded my-3">
                Read More
              </button>
            </Link>
          </div>
          <div
            className="order-1 flex justify-center"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-once="true"
          >
            <img
              src="/hero/hero.svg"
              className="h-48 object-contain md:h-full animate-float-y z-10"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
