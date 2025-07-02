"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <>
      {/* Separate Logo Header */}
      <header className="header">
        <img src="/l3.png" alt="Logo" className="logo"  data-aos="fade-down" data-aos-delay="100"  data-aos-duration="800"      />
      </header>

      {/* Hero Video Section */}
      <section className="hero-section" id="hero">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video-bg"
          src="/v5.mp4"
        />

        <div className="hero-content" data-aos="fade-up">
          <h1>Empowering Mental Wellness, One Session at a Time</h1>
          <p>
            Personalized therapy that meets you where you are — supporting your
            journey toward insight, healing, and lasting growth.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeVPdE8FDjGrnmAJ8kAXzXUTrOz780udwG6noNWHbShZuuIgw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="consult-button"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            Book a Free Consult
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
