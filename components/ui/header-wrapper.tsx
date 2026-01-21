"use client";

import { useState, useEffect } from "react";
import Header from "./header";

export default function HeaderWrapper() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`transition-transform duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <Header />
    </div>
  );
}