"use client";
import React, { useEffect } from "react";
import AOS from "aos";

const Feature = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="bg-orange-100">
        <div className="h-96 container mx-auto pt-16">
          <div className="flex flex-row justify-center">
            <div className="w-3/4 grid md:grid-cols-2">
              <div>eee</div>
              <div>eee</div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="h-96 container mx-auto pt-16">
          <div className="flex flex-row justify-center">
            <div className="w-3/4 grid md:grid-cols-2">
              <div>eee</div>
              <div>eee</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
