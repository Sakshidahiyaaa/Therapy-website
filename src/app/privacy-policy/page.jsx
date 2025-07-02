"use client";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="policy-wrapper">
      <div className="main-content">
        
        <div className="left">
          <h1>Privacy Policy</h1>
          <p>
            Your privacy is important to us. This policy outlines how your personal
            information is collected, used, and protected.
          </p>

          <h2>Information We Collect</h2>
          <ul>
            <li>Personal details (such as name, email, phone number)</li>
            <li>Medical history and health-related information</li>
            <li>Session notes and communications</li>
          </ul>

          <h2>How We Use Information</h2>
          <p>
            The information we collect is used to provide and improve therapeutic
            services, maintain records, and ensure safety.
          </p>

          <h2>Your Rights</h2>
          <p>
            You have the right to access, amend, or request deletion of your
            information. Please contact us directly for any such requests.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, feel free to reach
            out at:{" "}
            <a href="mailto: serena@blakepsychology.com">
              "serena@blakepsychology.com
              
            </a>
          </p>
        </div>

        
        <div className="right">
          <h2>For Website Visitors</h2>
          <p>
            This website is hosted by Squarespace. Squarespace collects personal
            data when you visit this website, including:
          </p>
          <ul>
            <li>Information about your browser, network and device</li>
            <li>Web pages you visited prior to coming to this website</li>
            <li>Your IP address</li>
          </ul>
          <p>
            Squarespace needs the data to run this website, and to protect and
            improve its platform and services. Squarespace analyzes the data in a
            de-personalized form.
          </p>

          <h3>Cookies</h3>
          <p>
            This website uses cookies and similar technologies, which are small
            files or pieces of text that download to a device when a visitor
            accesses a website or app. For information about viewing the cookies
            dropped on your device, visit The cookies Squarespace uses.
          </p>
          <p>
            These functional and required cookies are always used, which allow
            Squarespace, our hosting platform, to securely serve this website to
            you.
          </p>
          <p>
            These analytics and performance cookies are used on this site, as
            described below, only when you acknowledge our cookie banner. We use
            analytics cookies to view site traffic, activity, and other data.
          </p>

          <h3>Fonts</h3>
          <p>
            This website uses font files from Google Fonts and Adobe Fonts. To
            properly display this site to you, servers where the font files are
            stored may receive personal information about you, including:
          </p>
          <ul>
            <li>Information about your browser, network, or device</li>
            <li>Your IP address</li>
          </ul>
        </div>
      </div>

     
      <style>{`
        .policy-wrapper {
          background-color:rgb(207, 202, 161);
          padding: 2rem;
        }

        .main-content {
          display: flex;
          gap: 2rem;
          max-width: 1200px;
          margin: auto;
          font-family: Georgia, serif;
        }

        .left, .right {
          flex: 1;
          background-color: transparent;
          padding: 2rem;
          border-radius: 12px;
          
        }

        h1 {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 1.5rem;
        }

        h2 {
          font-size: 1.4rem;
          margin-top: 2rem;
          color: #444;
        }

        h3 {
          font-size: 1.2rem;
          margin-top: 1.5rem;
          color: #555;
        }

        p {
          margin-top: 1rem;
          line-height: 1.7;
          font-size: 1.05rem;
          color:#333;
        }

        ul {
          margin-left: 1.5rem;
          padding-left: 1rem;
          list-style-type: disc;
        }

        a {
          color:rgb(8, 43, 82);
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .main-content {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;
