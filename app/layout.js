"use client";
import "./globals.css";
import "aos/dist/aos.css";
import { Suspense, useEffect } from "react";
import Aos from "aos";
import Navabr from "@/components/Navabr";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import BackToTop from "@/components/BackToTop";

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <html lang="en">
      <body className="scroll-smooth">
        <Suspense fallback={<Loading />}>
          <Navabr />
          {children}
          <BackToTop />
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}

// export const metadata = {
//   title: "IMS",
//   description: "Generated by Inventory Management System",
//   type: "website",
//   authors: [
//     { name: "Masud" },
//     { name: "masud", url: "https://github.com/masud-pervez" },
//   ],
//   icons: {
//     icon: "/favicon.png",
//     shortcut: "/favicon.png",
//   },
// };
