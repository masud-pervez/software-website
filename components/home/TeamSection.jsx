/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const TeamSection = () => {
  return (
    <section className="bg-slate-50">
      <div className="container mx-auto md:px-36 px-5">
        <div
          className="text-center py-10"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <span className="bg-orange-200 px-6 py-2 rounded-3xl text-orange-500">
            Our Team
          </span>
          <h1 className="md:text-4xl text-xl mt-6 font-bold">
            Meet Our Experience Team <br /> Memeber
          </h1>
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 justify-items-center grid-cols-1 py-10 gap-5">
          <div
            className="member shadow-md rounded-xl"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-once="true"
          >
            <img src="/member/biprodas.webp" className="w-64" alt="" />
            <div className="member-info">
              <div className="member-info-content">
                <h4>Biprodas Roy</h4>
                <span>Chief Operating Officer</span>
              </div>
              <div className="social">
                <a href="">
                  <BsLinkedin />
                </a>
                <a href="">
                  <BsGithub />
                </a>
              </div>
            </div>
          </div>
          <div
            className="member shadow-md rounded-xl"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <img src="/member/milon.webp" className="w-64" alt="" />
            <div className="member-info">
              <div className="member-info-content">
                <h4>Milon Hossain</h4>
                <span>Director, Software Development</span>
              </div>
              <div className="social">
                <a href="">
                  <BsLinkedin />
                </a>
                <a href="">
                  <BsGithub />
                </a>
              </div>
            </div>
          </div>
          <div
            className="member shadow-md rounded-xl"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-once="true"
          >
            <img src="/member/ruhit.png" className="w-64" alt="" />
            <div className="member-info">
              <div className="member-info-content">
                <h4>Ruhit Hassan</h4>
                <span>Software Developer</span>
              </div>
              <div className="social">
                <a href="">
                  <BsLinkedin />
                </a>
                <a href="">
                  <BsGithub />
                </a>
              </div>
            </div>
          </div>
          <div
            className="member shadow-md rounded-xl"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-once="true"
          >
            <img src="/member/gowtam.webp" className="w-64" alt="" />
            <div className="member-info">
              <div className="member-info-content">
                <h4>Gowtam Kumar</h4>
                <span>Software Developer</span>
              </div>
              <div className="social">
                <a href="">
                  <BsLinkedin />
                </a>
                <a href="">
                  <BsGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
