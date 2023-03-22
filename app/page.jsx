/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import HeroSection from "@/components/home/HeroSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import ProjectSection from "@/components/home/ProjectSection";
import ServiceSection from "@/components/home/ServiceSection";
import TeamSection from "@/components/home/TeamSection";
import PriceingSection from "@/components/home/PriceingSection";
import BlogSection from "@/components/home/BlogSection";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <WhatWeDoSection />
      <ProjectSection />
      <ServiceSection />
      <TeamSection />
      <PriceingSection />
      <BlogSection />
    </main>
  );
};

export default Home;
