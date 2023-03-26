/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect } from "react";
import AOS from "aos";

const Feature = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section>
      <div className="bg-[url('/blog/blog3.jpg')] bg-contain bg-fixed z-0">
        <div className="bg-slate-900 opacity-80">
          <div className="container mx-auto md:px-36 px-5">
            <div className="flex flex-col justify-center h-96">
              <h1 className="text-5xl font-bold text-slate-50">
                Inventroy Management System
              </h1>
              <p className="text-slate-100 py-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
                Sapiente et rerum iure suscipit, quae illum.
              </p>
              <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Live Demo
                </button>
                <button className="bg-blue-500 mx-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto md:px-36 px-5 snap-y snap-mandatoryf">
        <div className="grid md:grid-cols-2 gap-5 py-10 justify-items-center snap-center">
          <div>
            <h1 className="text-2xl font-bold py-3 text-slate-700">
              Inventory Management
            </h1>
            <p className="text-xl text-slate-600">
              The software should allow users to manage inventory levels by
              tracking product quantities, reordering items when necessary, and
              providing real-time updates on inventory levels.
            </p>
            <p className="text-xl text-slate-600 pt-3">
              The software should allow users to manage purchase orders by
              creating new orders, tracking their status, and managing vendor
              relationships.
            </p>
          </div>
          <div>
            <img src="/hero/Part.svg" className="animate-float-y" alt="" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5 py-10 justify-items-center snap-center">
          <div>
            <img src="/hero/Part.svg" className="animate-float-y" alt="" />
          </div>
          <div>
            <h1 className="text-2xl font-bold py-3 text-slate-700">
              Barcode Scanning:
            </h1>
            <p className="text-xl text-slate-600">
              The software should support barcode scanning to quickly and
              accurately update inventory levels and track items in real-time.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5 py-10 justify-items-center snap-center">
          <div>
            <h1 className="text-2xl font-bold py-3 text-slate-700">
              Sales and Order Management:
            </h1>
            <p className="text-xl text-slate-600">
              The software should allow users to manage sales orders, fulfill
              customer orders, and track shipping and delivery status.
            </p>
          </div>
          <div>
            <img src="/hero/Part.svg" className="animate-float-y" alt="" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5 py-10 justify-items-center snap-center">
          <div>
            <img src="/hero/Part.svg" className="animate-float-x" alt="" />
          </div>
          <div>
            <h1 className="text-2xl font-bold py-3 text-slate-700">
              Inventory Management
            </h1>
            <p className="text-xl text-slate-600">
              The software should allow users to manage inventory levels by
              tracking product quantities, reordering items when necessary, and
              providing real-time updates on inventory levels.
            </p>
            <p className="text-xl text-slate-600 pt-3">
              The software should allow users to manage purchase orders by
              creating new orders, tracking their status, and managing vendor
              relationships.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5 py-10 justify-items-center snap-center">
          <div>
            <h1 className="text-2xl font-bold py-3 text-slate-700">
              Inventory Management
            </h1>
            <p className="text-xl text-slate-600">
              The software should allow users to manage inventory levels by
              tracking product quantities, reordering items when necessary, and
              providing real-time updates on inventory levels.
            </p>
            <p className="text-xl text-slate-600 pt-3">
              The software should allow users to manage purchase orders by
              creating new orders, tracking their status, and managing vendor
              relationships.
            </p>
          </div>
          <div>
            <img src="/hero/Part.svg" className="animate-float-y" alt="" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5 py-10 justify-items-center snap-center">
          <div>
            <img src="/hero/Part.svg" className="animate-float-y" alt="" />
          </div>
          <div>
            <h1 className="text-2xl font-bold py-3 text-slate-700">
              Inventory Management
            </h1>
            <p className="text-xl text-slate-600">
              The software should allow users to manage inventory levels by
              tracking product quantities, reordering items when necessary, and
              providing real-time updates on inventory levels.
            </p>
            <p className="text-xl text-slate-600 pt-3">
              The software should allow users to manage purchase orders by
              creating new orders, tracking their status, and managing vendor
              relationships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
