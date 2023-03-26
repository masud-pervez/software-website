import React from "react";
import { BsCheck2, BsFingerprint } from "react-icons/bs";
import { FaCrown } from "react-icons/fa";
import { RxCross2, RxRocket } from "react-icons/rx";

const PriceingSection = () => {
  return (
    <section>
      <div className="container mx-auto md:px-36 px-5">
        <div
          className="text-center py-10"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <span className="bg-orange-200 px-6 py-2 rounded-3xl text-orange-500">
            Pricing Table
          </span>
          <h1 className="md:text-4xl text-xl mt-6 font-bold">
            Provide Awesome Pricing <br /> Plan
          </h1>
        </div>
        <div className="grid md:grid-cols-3 gap-5 py-10">
          {/* basic */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            className="bg-white border-y-4 border-orange-400 animated-hover-icon hover:shadow-xl transition p-10 shadow-md"
          >
            <div className="flex flex-row">
              <span className="bg-orange-200 icon p-5 mr-5 rounded-full text-3xl text-orange-500">
                <RxRocket />
              </span>
              <div>
                <span className="text-xl">Basic Plan</span>
                <p className="font-bold">
                  <span className="text-3xl">$29</span> /Mo
                </p>
              </div>
            </div>
            <hr className="my-10" />
            <ul>
              <li className="my-4 flex flex-row">
                <span className="mr-3 bg-orange-200 p-1 rounded-full text-orange-500">
                  <BsCheck2 />
                </span>
                <span className="text-slate-600">Limited Acess Library</span>
              </li>
              <li className="my-4 flex flex-row">
                <span className="mr-3 bg-orange-200 p-1 rounded-full text-orange-500">
                  <BsCheck2 />
                </span>
                <span className="text-slate-600">Limited Acess Library</span>
              </li>
              <li className="my-4 flex flex-row">
                <span className="mr-3 bg-rose-200 p-1 rounded-full text-rose-500">
                  <RxCross2 />
                </span>
                <span className="text-slate-600">Private cloud hosting</span>
              </li>
              <li className="my-4 flex flex-row">
                <span className="mr-3 bg-rose-200 p-1 rounded-full text-rose-500">
                  <RxCross2 />
                </span>
                <span className="text-slate-600">Full security</span>
              </li>
              <li className="my-4 flex flex-row">
                <span className="mr-3 bg-rose-200 p-1 rounded-full text-rose-500">
                  <RxCross2 />
                </span>
                <span className="text-slate-600">Hotline Support 24/7</span>
              </li>
            </ul>
            <button className="mt-5 w-full py-3 rounded-2xl hover:bg-orange-500 hover:text-slate-50 transition ease-in text-clip  text-orange-500 ring-1 ring-orange-500">
              BUY NOW
            </button>
          </div>
          {/* Standard Plan */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true"
            className="bg-white border-y-4 border-orange-400 animated-hover-icon hover:shadow-xl transition p-10 shadow-md"
          >
            <div className="flex flex-row">
              <span className="bg-orange-200 icon p-5 mr-5 rounded-full text-3xl text-orange-500">
                <BsFingerprint />
              </span>
              <div>
                <span className="text-xl">Standard Plan</span>
                <p className="font-bold">
                  <span className="text-3xl">$69</span> /Mo
                </p>
              </div>
            </div>
            <hr className="my-10" />
            <ul>
              <li className="my-4 flex flex-row">
                <span className="mr-3 bg-orange-200 p-1 rounded-full text-orange-500">
                  <BsCheck2 />
                </span>
                <span className="text-slate-600">Limited Acess Library</span>
              </li>
              <li className="my-4 flex flex-row">
                <span className="mr-3 bg-orange-200 p-1 rounded-full text-orange-500">
                  <BsCheck2 />
                </span>
                <span className="text-slate-600">Limited Acess Library</span>
              </li>
              <li className="my-4 flex flex-row">
                <span className="mr-3 bg-rose-200 p-1 rounded-full text-rose-500">
                  <RxCross2 />
                </span>
                <span className="text-slate-600">Private cloud hosting</span>
              </li>
              <li className="my-4 flex flex-row">
                <span className="mr-3 bg-rose-200 p-1 rounded-full text-rose-500">
                  <RxCross2 />
                </span>
                <span className="text-slate-600">Full security</span>
              </li>
              <li className="my-4 flex flex-row">
                <span className="mr-3 bg-rose-200 p-1 rounded-full text-rose-500">
                  <RxCross2 />
                </span>
                <span className="text-slate-600">Hotline Support 24/7</span>
              </li>
            </ul>
            <button className="mt-5 w-full py-3 rounded-2xl hover:bg-orange-500 hover:text-slate-50 transition ease-in text-clip  text-orange-500 ring-1 ring-orange-500">
              BUY NOW
            </button>
          </div>
          {/* Premium Plan */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-once="true"
            className="bg-white border-y-4 border-orange-400 animated-hover-icon hover:shadow-xl transition p-10 shadow-md"
          >
            <div className="flex flex-row">
              <span className="bg-orange-200 icon p-5 mr-5 rounded-full text-3xl text-orange-500">
                <FaCrown />
              </span>
              <div>
                <span className="text-xl">Premium Plan</span>
                <p className="font-bold">
                  <span className="text-3xl">$129</span> /Mo
                </p>
              </div>
            </div>
            <hr className="my-10" />
            <ul>
              <li className="my-4 flex flex-row">
                <span className="mr-3 bg-orange-200 p-1 rounded-full text-orange-500">
                  <BsCheck2 />
                </span>
                <span className="text-slate-600">Limited Acess Library</span>
              </li>
              <li className="my-4 flex flex-row">
                <span className="mr-3 bg-orange-200 p-1 rounded-full text-orange-500">
                  <BsCheck2 />
                </span>
                <span className="text-slate-600">Limited Acess Library</span>
              </li>
              <li className="my-4 flex flex-row">
                <span className="mr-3 bg-rose-200 p-1 rounded-full text-rose-500">
                  <RxCross2 />
                </span>
                <span className="text-slate-600">Private cloud hosting</span>
              </li>
              <li className="my-4 flex flex-row">
                <span className="mr-3 bg-rose-200 p-1 rounded-full text-rose-500">
                  <RxCross2 />
                </span>
                <span className="text-slate-600">Full security</span>
              </li>
              <li className="my-4 flex flex-row">
                <span className="mr-3 bg-rose-200 p-1 rounded-full text-rose-500">
                  <RxCross2 />
                </span>
                <span className="text-slate-600">Hotline Support 24/7</span>
              </li>
            </ul>
            <button className="mt-5 w-full py-3 rounded-2xl hover:bg-orange-500 hover:text-slate-50 transition ease-in text-clip  text-orange-500 ring-1 ring-orange-500">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceingSection;
