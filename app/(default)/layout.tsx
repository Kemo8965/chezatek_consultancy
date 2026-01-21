"use client";

import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import HeaderWrapper from "@/components/ui/header-wrapper";
import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <HeaderWrapper />

      <main className="grow">{children}</main>

      <Footer border={true} />

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
          aria-label="Back to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
}
