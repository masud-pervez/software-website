"use client";
import TeamSection from "@/components/home/TeamSection";
import Aos from "aos";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return <TeamSection />;
};

export default Page;
