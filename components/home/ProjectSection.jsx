import React from "react";
import { GiDeadWood } from "react-icons/gi";

const ProjectSection = () => {
  return (
    <section className="relative bg-orange-300 md:py-0 py-10">
      <div className="absolute shadow-md bottom-0 w-44 h-44 rounded-full bg-slate-100  opacity-10 border-4"></div>
      <div className="absolute shadow-md top-0 right-0 w-44 h-44 rounded-full bg-slate-100  opacity-10 border-4"></div>
      <div className="bg-[url('/hero/download.svg')] z-0">
        <div className="container mx-auto md:px-36 px-5">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-4 justify-items-center content-center md:h-96">
            <div
              className="text-center animated-hover-icon"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-once="true"
            >
              <div className="flex flex-row justify-center">
                <span className="bg-slate-50 icon text-orange-500 text-5xl rounded-full p-3">
                  <GiDeadWood />
                </span>
              </div>
              <h1 className="mt-3 text-3xl font-bold text-slate-100">415+</h1>
              <h1 className="text-slate-200">Project complate</h1>
            </div>

            <div
              className="text-center animated-hover-icon"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="flex flex-row justify-center">
                <span className="bg-slate-50 icon text-orange-500 text-5xl rounded-full p-3">
                  <GiDeadWood />
                </span>
              </div>
              <h1 className="mt-3 text-3xl font-bold text-slate-100">635+</h1>
              <h1 className="text-slate-200">Happy Customar</h1>
            </div>

            <div
              className="text-center animated-hover-icon"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <div className="flex flex-row justify-center">
                <span className="bg-slate-50 icon text-orange-500 text-5xl rounded-full p-3">
                  <GiDeadWood />
                </span>
              </div>
              <h1 className="mt-3 text-3xl font-bold text-slate-100">3556+</h1>
              <h1 className="text-slate-200">National Award</h1>
            </div>

            <div
              className="text-center animated-hover-icon"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <div className="flex flex-row justify-center">
                <span className="bg-slate-50 icon text-orange-500 text-5xl rounded-full p-3">
                  <GiDeadWood />
                </span>
              </div>
              <h1 className="mt-3 text-3xl font-bold text-slate-100">356+</h1>
              <h1 className="text-slate-200">Team Memeber</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
