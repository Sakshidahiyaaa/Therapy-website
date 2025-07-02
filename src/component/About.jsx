"use client";
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="about-heading" data-aos="fade-up" data-aos-duration="800">
        About Dr. Serena Blake
      </h2>

      <div className="about-container" data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">
      
        <div className="about-image-container" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1000">
          <img src="/dr1.webp" alt="Dr. Serena Blake" className="about-image" />
        </div>

      
        <div className="about-text-container" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
          <p className="about-text">
            Dr. Serena Blake, PsyD, is a compassionate and experienced clinical psychologist based in Los Angeles, CA.
            With over 8 years of practice and 500+ successful sessions, she is known for her empathetic approach and
            evidence-based therapy.
          </p>
          <p className="about-text">
            She combines cognitive-behavioral techniques with mindfulness to help individuals navigate anxiety, heal
            from trauma, and improve relationships. Her mission is to offer a safe, supportive space where clients feel
            truly seen and heard.
          </p>
          <p className="about-text">
            Located at 1287 Maplewood Drive in Los Angeles, her office provides a calming environment for in-person
            sessions every Tuesday and Thursday. For added convenience, Dr. Blake also offers secure virtual
            appointments via Zoom on Mondays, Wednesdays, and Fridays.
          </p>
          <p className="about-text">
            Office Address: 1287 Maplewood Drive, Los Angeles, CA 90026
          </p>
          <p className="about-text">
            <strong>Phone:</strong>{" "}
            <a href="tel:3235550192" className="contact-link">
              (323) 555-0192
            </a>
            <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:serena@blakepsychology.com" className="contact-link">
              serena@blakepsychology.com
            </a>
          </p>
          <p className="about-text">
            Ready to take the next step? Reach out today to start your path toward healing and personal growth.
          </p>
        </div>
      </div>

      <div className="about-finishing-line" data-aos="fade-up" data-aos-delay="800"></div>
    </section>
  );
};

export default About;
