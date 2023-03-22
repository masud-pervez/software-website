"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import ServiceSection from "@/components/home/ServiceSection";

const Feature = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="">
      <div className="h-screen container mx-auto pt-16">
        <ServiceSection />
      </div>
    </div>
  );
};

export default Feature;
