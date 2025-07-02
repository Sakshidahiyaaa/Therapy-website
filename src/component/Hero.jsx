"use client";
import React, { useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const hiddenElements = document.querySelectorAll(".fade-in");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Logo */}
      <header className="header">
        <img src="/l1.png" alt="Logo" className="logo" />
      </header>

      {/* Hero section */}
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
          <h1 className="fade-in delay-1">
            Empowering Mental Wellness, One Session at a Time
          </h1>
          <p className="fade-in delay-2 " data-aos="fade-up">
            Personalized therapy that meets you where you are — supporting your
            journey toward insight, healing, and lasting growth.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeVPdE8FDjGrnmAJ8kAXzXUTrOz780udwG6noNWHbShZuuIgw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="consult-button fade-in delay-3"
          >
            Book a Free Consult
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
