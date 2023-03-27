/* eslint-disable @next/next/no-img-element */
import React from "react";

const ServiceSection = () => {
  return (
    <section className="bg-slate-100">
      <div className="container mx-auto md:px-36 px-5">
        <div
          className="text-center py-10"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <span className="bg-orange-200 px-6 py-2 rounded-3xl text-orange-500">
            Our Services
          </span>
          <h1 className="md:text-4xl text-xl mt-6 font-bold">
            We Offer Saas For Better <br /> Business
          </h1>
        </div>
        <div className="grid md:grid-cols-2 gap-5 py-10">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            className="bg-white hover:shadow-xl transition cursor-pointer shadow-md py-10 px-5 flex flex-row"
          >
            <div>
              <img src="/hero/service.svg" className="h-auto w-40" alt="" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Digital Marketing</h1>
              <p className="my-3 text-slate-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                soluta voluptas provident!
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true"
            className="bg-white hover:shadow-xl transition cursor-pointer shadow-md  py-10 px-5 flex flex-row"
          >
            <div>
              <img src="/hero/service.svg" className="h-auto w-40" alt="" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Digital Marketing</h1>
              <p className="my-3 text-slate-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                soluta voluptas provident!
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-once="true"
            className="bg-white hover:shadow-xl transition cursor-pointer shadow-md  py-10 px-5 flex flex-row"
          >
            <div>
              <img src="/hero/service.svg" className="h-auto w-40" alt="" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Digital Marketing</h1>
              <p className="my-3 text-slate-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                soluta voluptas provident!
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-once="true"
            className="bg-white hover:shadow-xl transition cursor-pointer shadow-md  py-10 px-5 flex flex-row"
          >
            <div>
              <img src="/hero/service.svg" className="h-auto w-40" alt="" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Digital Marketing</h1>
              <p className="my-3 text-slate-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                soluta voluptas provident!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
