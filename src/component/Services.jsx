"use client";
import React from "react";
import "./Service.css";

const Services = () => {
  return (
    <>
      <section className="services-wrapper">
        <div className="services-intro">
          <h2 data-aos="fade-up">
            Therapy can be a space where you invest in yourself—<br />
            one of the highest forms of self-care.
          </h2>
          <hr data-aos="fade-up" data-aos-delay="200" />
        </div>

        <div className="services-heading" data-aos="fade-up" data-aos-delay="300">
          <h3>Areas of Focus</h3>
        </div>

        <div className="services-container">
          <div className="service-card" data-aos="zoom-in" data-aos-delay="400">
            <img src="/s1.jpg" alt="Therapy for Providers" className="service-image" />
            <h4>Therapy for Healthcare Providers and Students</h4>
            <p>
              The care you provide for others may be driving you to seek therapy, whether due to burnout,
              compassion fatigue, imposter syndrome, people-pleasing tendencies, or perfectionism. Whether
              you’re in pre-professional school, undergoing training, or reflecting on a long career in healthcare,
              we can address the unique stressors you face.
            </p>
          </div>

          <div className="service-card" data-aos="zoom-in" data-aos-delay="500">
            <img src="/s2.jpg" alt="Trauma and Grief" className="service-image" />
            <h4>Therapy for Trauma and Grief</h4>
            <p>
              Life’s challenges, whether a difficult childhood, a traumatic event or the loss of someone meaningful,
              can lead to profound grief. Therapy helps you process these experiences and work toward grounding and meaning.
            </p>
          </div>

          <div className="service-card" data-aos="zoom-in" data-aos-delay="600">
            <img src="/s3.jpg" alt="Second Generation" className="service-image" />
            <h4>Therapy for Second Generation Individuals In Immigrant Families</h4>
            <p>
              Second-generation individuals often navigate the complexities of multiple cultures and expectations.
              Therapy offers space to explore and process your unique aspect of identity.
            </p>
          </div>
        </div>
      </section>

      <section className="rates-section" data-aos="fade-up" data-aos-delay="700">
        <h3>Rates and Insurance</h3>
        <p>Session Fee - $200</p>
        <p>Psychodiagnostic Evaluation - $275</p>
        <p>I accept both private pay and insurance. I am in-network with BCBS and Aetna.</p>
        <p>
          For out-of-network plans, I’ve partnered with Mentaya using{" "}
          <a href="#">this tool</a>.
        </p>
      </section>

      <div className="footer-note" data-aos="fade-up" data-aos-delay="800">
        <p>Unable to accept new clients at this time.</p>
      </div>

      <section className="quote-section" data-aos="fade-up" data-aos-delay="900">
        <div className="quote-overlay">
          <p className="quote-text">
            “I have come to believe that caring for myself is not self-indulgent. <br />
            Caring for myself is an act of survival.”
          </p>
          <p className="quote-author">— Audre Lorde</p>
        </div>
      </section>
    </>
  );
};

export default Services;
