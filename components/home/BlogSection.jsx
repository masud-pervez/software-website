/* eslint-disable @next/next/no-img-element */
import React from "react";

const BlogSection = () => {
  return (
    <section>
      <div className="container mx-auto md:px-36 px-5">
        <div
          className="text-center py-10"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <span className="bg-orange-200 px-6 py-2 rounded-3xl text-orange-500">
            Blog & News
          </span>
          <h1 className="md:text-4xl text-xl mt-6 font-bold">
            Latest Blog & News
          </h1>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-10 py-10">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
            className="bg-white animated-hover-icon shadow-md"
          >
            <img src="/blog/blog1.jpg" className="object-cover" alt="" />
            <div className="my-5 px-3">
              <span className="bg-orange-200 px-6 py-2 rounded-3xl text-orange-500">
                Blog & News
              </span>
              <h1 className="my-5 text-2xl font-bold text-slate-600 hover:text-orange-400">
                <a href="#">Most widely known for their popular</a>
              </h1>
              <p className="text-slate-500">
                Mauris mollis hendrerit laoreet. Pellentesque justo orci,
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true"
            className="bg-white shadow-md"
          >
            <img src="/blog/blog2.jpg" className="object-cover" alt="" />
            <div className="my-5 px-3">
              <span className="bg-orange-200 px-6 py-2 rounded-3xl text-orange-500">
                Blog & News
              </span>
              <h1 className="my-5 text-2xl font-bold text-slate-600 hover:text-orange-400">
                <a href="#">Most widely known for their popular</a>
              </h1>
              <p className="text-slate-500">
                Mauris mollis hendrerit laoreet. Pellentesque justo orci,
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-once="true"
            className="bg-white shadow-md"
          >
            <img src="/blog/blog3.jpg" className="object-cover" alt="" />
            <div className="my-5 px-3">
              <span className="bg-orange-200 px-6 py-2 rounded-3xl text-orange-500">
                Blog & News
              </span>
              <h1 className="my-5 text-2xl font-bold text-slate-600 hover:text-orange-400">
                <a href="#">Most widely known for their popular</a>
              </h1>
              <p className="text-slate-500">
                Mauris mollis hendrerit laoreet. Pellentesque justo orci,
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
