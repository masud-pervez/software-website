"use client";
import Aos from "aos";
import React, { useEffect } from "react";
import PriceingSection from "@/components/home/PriceingSection";

const Page = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return <PriceingSection />;
};

export default Page;
