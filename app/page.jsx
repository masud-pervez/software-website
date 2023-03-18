/* eslint-disable @next/next/no-img-element */
{
  /* <img src="/hero/hero.svg" alt="" /> */
}
import React from "react";

const Home = () => {
  return (
    <section className="relative bg-gradient-to-tr from-indigo-500 to-blue-500 z-10 overflow-hidden">
      <div className=" bg-[url('/hero/download.svg')] z-0 h-screen">
        <div className="w-52 h-20 bg-gradient-to-tr from-indigo-300 animate-pulse blur-xl rounded-full  absolute bottom-52 right-20 stroke-inherit"></div>
        <div className="w-96 h-96 bg-gradient-to-tr from-indigo-300 animate-pulse blur-xl rounded-full  absolute -bottom-52 -left-20 stroke-inherit"></div>
        <div className="w-96 h-96 bg-gradient-to-tr from-indigo-300 animate-pulse blur-xl rounded-full  absolute -top-52 -left-20 stroke-inherit"></div>
        <div className="w-96 h-96 bg-gradient-to-tr from-indigo-300 animate-pulse blur-xl rounded-full  absolute top-6 -right-20 stroke-inherit"></div>
        <div className="row justify-center items-center h-screen">
          <div className="col-md-7">
            <div className="text-center order-2">
              <h1 className="md:text-7xl text-2xl text-center font-bold text-white">
                In The World Of SaaS <br /> Business
              </h1>
              <button className="bg-gradient-to-tr from-indigo-50  p-3 m-4 rounded-2xl shadow-md text-white ring-2 hover:ring-indigo-600">
                Read More
              </button>
            </div>
            <div className="flex justify-center order-1">
              <img src="/hero/hero.svg" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
