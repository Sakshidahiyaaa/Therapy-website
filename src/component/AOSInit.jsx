"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSInit = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return null;
};

export default AOSInit;
