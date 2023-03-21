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
              data-aos-once="true"
            >
              <h1 className="md:text-7xl text-4xl text-center font-bold text-white">
                In The World Of SaaS <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                  Business
                </span>
              </h1>
              <button className="shake bg-rose-500 hover:bg-rose-600 opacity-75 hover:opacity-80 text-white font-bold py-2 px-4 rounded my-3">
                Read More
              </button>
            </div>
            <div
              className="order-1 flex justify-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
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

          <div className="flex justify-center">
            <div className="w-4/5 grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              <div
                className="mt-6"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-once="true"
              >
                <div className="h-60 shadow-md hover:shadow-xl transition ease-out bg-white p-6 rounded">
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
              <div
                className="mt-6"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-once="true"
              >
                <div className="h-60 shadow-md hover:shadow-xl transition ease-out bg-white p-6 rounded ">
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
              <div
                className="mt-6"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-once="true"
              >
                <div className="h-60 shadow-md hover:shadow-xl transition ease-out bg-white p-6 rounded ">
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
              <div
                className="mt-6"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-once="true"
              >
                <div className="h-60 shadow-md hover:shadow-xl transition ease-out bg-white p-6 rounded ">
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
          </div>

          <div className="flex justify-center">
            <div className="w-3/4 grid md:grid-cols-2 py-24">
              <div className="col-span-1 py-3">
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
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5">
                    Read More
                  </button>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex justify-center">
                  <img src="/hero/Part.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-gradient-to-l from-indigo-500 to-blue-500 md:py-0 py-10">
        <div className="absolute shadow-md bottom-0 w-44 h-44 rounded-full bg-slate-50  opacity-5 border-4"></div>
        <div className="absolute shadow-md top-0 right-0 w-44 h-44 rounded-full bg-slate-50  opacity-5 border-4"></div>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-4 content-center justify-items-center md:h-96">
            <div className="w-full h-24 text-center my-2">
              <div className="py-5">
                <span className="p-5 bg-slate-50 rounded-full">I</span>
              </div>
              <h1 className="text-slate-50 text-2xl font-bold">95451</h1>
              <p className="text-slate-50">Project complate</p>
            </div>

            <div className="w-full h-24 text-center my-2">
              <div className="py-5">
                <span className="p-5 bg-slate-50 rounded-full">I</span>
              </div>
              <h1 className="text-slate-50 text-2xl font-bold">95451</h1>
              <p className="text-slate-50">Happy Customar</p>
            </div>

            <div className="w-full h-24 text-center my-2">
              <div className="py-5">
                <span className="p-5 bg-slate-50 rounded-full">I</span>
              </div>
              <h1 className="text-slate-50 text-2xl font-bold">95451</h1>
              <p className="text-slate-50">National Award</p>
            </div>

            <div className="w-full h-24 text-center my-2">
              <div className="py-5">
                <span className="p-5 bg-slate-50 rounded-full">I</span>
              </div>
              <h1 className="text-slate-50 text-2xl font-bold">95451</h1>
              <p className="text-slate-50 shake">Team Memeber</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-100">
        <div className="container mx-auto">
          <div className="text-center py-10">
            <span className="bg-indigo-100 px-6 py-2 rounded-3xl text-purple-500">
              Our Services
            </span>
            <h1 className="md:text-4xl text-xl mt-6 font-bold">
              We Offer Saas For Better <br /> Business
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="md:w-3/4 grid md:grid-cols-2 gap-6 mb-10 md:p-0 p-5">
              <div className="bg-white hover:shadow-xl transition cursor-pointer shadow-md  py-10 px-5 flex flex-row">
                <div>
                  <img src="/hero/service.svg" className="h-auto w-40" alt="" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">Digital Marketing</h1>
                  <p className="my-3 text-slate-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque soluta voluptas provident!
                  </p>
                </div>
              </div>
              <div className="bg-white hover:shadow-xl transition cursor-pointer shadow-md  py-10 px-5 flex flex-row">
                <div>
                  <img src="/hero/service.svg" className="h-auto w-40" alt="" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">Digital Marketing</h1>
                  <p className="my-3 text-slate-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque soluta voluptas provident!
                  </p>
                </div>
              </div>
              <div className="bg-white hover:shadow-xl transition cursor-pointer shadow-md  py-10 px-5 flex flex-row">
                <div>
                  <img src="/hero/service.svg" className="h-auto w-40" alt="" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">Digital Marketing</h1>
                  <p className="my-3 text-slate-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque soluta voluptas provident!
                  </p>
                </div>
              </div>
              <div className="bg-white hover:shadow-xl transition cursor-pointer shadow-md  py-10 px-5 flex flex-row">
                <div>
                  <img src="/hero/service.svg" className="h-auto w-40" alt="" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">Digital Marketing</h1>
                  <p className="my-3 text-slate-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque soluta voluptas provident!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center py-10">
            <span className="bg-indigo-100 px-6 py-2 rounded-3xl text-purple-500">
              Our Team
            </span>
            <h1 className="md:text-4xl text-xl mt-6 font-bold">
              Meet Our Experience Team <br /> Memeber
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="w-3\4 grid md:grid-cols-4  py-5 gap-5">
              <div class="card">
                <img src="/member/biprodas.webp" alt="" />
                <div class="info">
                  <div></div>
                  <h1>Mountain</h1>
                  <p>
                    Lorem Ipsum is simply dummy text from the printing and
                    typeseting industry
                  </p>
                  <button>Read More</button>
                </div>
              </div>
              <div class="card">
                <img src="/member/ruhit.png" alt="" />
                <div class="info">
                  <h1>Mountain</h1>
                  <p>
                    Lorem Ipsum is simply dummy text from the printing and
                    typeseting industry
                  </p>
                  <button>Read More</button>
                </div>
              </div>
              <div class="card">
                <img src="/member/gowtam.webp" alt="" />
                <div class="info">
                  <h1>Mountain</h1>
                  <p>
                    Lorem Ipsum is simply dummy text from the printing and
                    typeseting industry
                  </p>
                  <button>Read More</button>
                </div>
              </div>

              <div class="card">
                <img src="/member/masud.jpeg" alt="" />
                <div class="info">
                  <h1>Mountain</h1>
                  <p>
                    Lorem Ipsum is simply dummy text from the printing and
                    typeseting industry
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
