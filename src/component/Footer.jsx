"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

 
  const scrollToHero = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/"); 
    }
  };

  return (
    <footer className="bg-[#f8f5ed] text-center py-10 text-sm text-black">
     
      <div className="mb-4">
        <p className="font-serif text-lg mb-2">
          Dr. Serena Blake, Ph.D., Licensed Psychologist
        </p>
        <p>
          <a href="mailto:serena@blakepsychology.com" className="underline">
           serena@blakepsychology.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href="tel:323555-0192" className="underline">
            (323) 555-0192
          </a>{" "}
          Fax: (248) 939-8190
        </p>
        <p> 1287 Maplewood Drive, Los Angeles, CA 90026</p>
      </div>

     
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

      
      <div>
        <a
          href="https://drserenablake.sessionshealth.com/"
          className="underline block mb-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Client Portal
        </a>
      </div>

    
      <p className="text-xs text-gray-600">
        © 2025. Dr. Serena Blake Ph.D. Psychological Services, PLLC. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
