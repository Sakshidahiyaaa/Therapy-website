"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  // Home section scroll handler
  const scrollToHero = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/"); // fallback if not on homepage
    }
  };

  return (
    <footer className="bg-[#f8f5ed] text-center py-10 text-sm text-black">
      {/* Contact Info */}
      <div className="mb-4">
        <p className="font-serif text-lg mb-2">
          Jennifer Hahm, Ph.D., Licensed Psychologist
        </p>
        <p>
          <a href="mailto:jennifer@drjenniferhahm.com" className="underline">
            jennifer@drjenniferhahm.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href="tel:2489398150" className="underline">
            (248) 939-8150
          </a>{" "}
          Fax: (248) 939-8190
        </p>
        <p>28175 Haggerty Rd, Novi, MI 48377</p>
      </div>

      {/* Links Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
        <button onClick={scrollToHero} className="underline">
          Home
        </button>
        <a href="/privacy-policy" className="underline">
          Privacy Policy
        </a>
        <a href="/good-faith-estimate" className="underline">
          Good Faith Estimate
        </a>
      </div>

      {/* Client Portal */}
      <div>
        <a
          href="https://drjenniferhahm.sessionshealth.com/"
          className="underline block mb-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Client Portal
        </a>
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-600">
        © 2025. Jennifer Hahm Ph.D. Psychological Services, PLLC. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
