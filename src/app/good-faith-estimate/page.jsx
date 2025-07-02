"use client";

import React from "react";

const GoodFaithEstimate = () => {
  return (
    <div className="gfe-wrapper">
     
      <div className="gfe-header">
        <img src="/l3.png" alt="Logo" className="gfe-logo" />
      </div>

     
      <div className="gfe-content">
        <h1>Good Faith Estimate</h1>
        <p>
          Effective January 1, 2022, a ruling went into effect called the
          <strong> “No Surprises Act,”</strong> which requires mental health
          practitioners to provide a “Good Faith Estimate” (GFE) about
          out-of-network care to any patient who is uninsured or who is insured
          but does not plan to use their insurance benefits to pay for health
          care items and/or services.
        </p>

        <p>
          The Good Faith Estimate works to show the cost of items and services
          that are reasonably expected for your mental health care needs for an
          item or service. The estimate is based on information known at the
          time the estimate was created. The Good Faith Estimate does not
          include any unknown or unexpected costs that may arise during
          treatment.
        </p>

        <p>
          You are entitled to receive this “Good Faith Estimate” of what the
          charges could be for psychotherapy services provided to you. While it
          is not possible for a psychotherapist to know, in advance, how many
          psychotherapy sessions may be necessary or appropriate for a given
          person upon the initiation of psychotherapy, an estimate of the cost
          of services will be provided.
        </p>

        <p>
          Your total cost of services will depend upon the number of
          psychotherapy sessions you attend, your individual circumstances, and
          the type and amount of services that are provided to you. This
          estimate is not a contract and does not obligate you to obtain any
          services.
        </p>

        <p id="footer">
          <strong>Jennifer Hahm, Ph.D., Licensed Psychologist</strong>
          <br />
          <a href="mailto:jennifer@drjenniferhahm.com">
            jennifer@drjenniferhahm.com
          </a>
          <br />
          Phone: <a href="tel:2489398150">(248) 939-8150</a> Fax: (248) 939-8190
          <br />
          28175 Haggerty Rd, Novi, MI 48377
        </p>
      </div>

      <style>{`
        .gfe-wrapper {
          padding: 2rem;
          font-family: serif;
          background-color: #f8f5ed;
          color: #333;
          min-height: 100vh;
        }

        .gfe-header {
          text-align: left;
          margin-bottom: 2rem;
        }

        .gfe-logo {
          height: 70px;
          width: auto;
        }

        .gfe-content {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
        }

        .gfe-content h1 {
          font-size: 3rem;
          margin-top:4rem;
          margin-bottom: 1rem;
          text-transform: uppercase;
        }

        .gfe-content p {
          margin-bottom: 1.2rem;
          line-height: 1.6;
          gap:2rem;
        }
        #footer{


          margin-top:5rem;


          }

        .gfe-content a {
          text-decoration: underline;
          color: #000;
        }
      `}</style>
    </div>
  );
};

export default GoodFaithEstimate;

