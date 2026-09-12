

import React from "react";
import "./Footer.css";
import logo from "./images/logo-removebg-preview.png";

export default function Footer() {
  const year = new Date().getFullYear();

  const address =
    "Siddhartha Health And Multicare Pvt. Ltd., Bhairahawa, Rupandehi, Nepal";

  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=Siddhartha%20Health%20And%20Multicare%20Pvt.%20Ltd.%20Bhairahawa%20Nepal";

  return (
    <footer className="footer">

      <div className="container footer-content">

        {/* Clinic Information */}
        <div className="clinic-section">

          <div className="clinic-brand">

            <img
              src={logo}
              alt="Siddhartha Health And Multicare Pvt. Ltd. Logo"
              className="footer-logo"
            />

            <div className="clinic-details">

              <h4>
                Siddhartha Health And Multicare
              </h4>

              <p className="footer-address">
                📍 {address}
              </p>

              <p className="footer-phone">
                📞 <span>+977 9821558535</span>
              </p>

              <p className="footer-phone">
                📞 <span>+977 9766714481</span>
              </p>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="map-link"
              >
                📍 View on Google Maps
              </a>

            </div>

          </div>

        </div>

        {/* Quick Links */}
        <div className="footer-links">

          <h4>Quick Links</h4>

          <nav>
            <a href="/">Home</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-conditions">
              Terms & Conditions
            </a>
            <a href="/medical-disclaimer">
              Medical Disclaimer
            </a>
          </nav>

        </div>

        {/* Google Map */}
        <div className="footer-map">

          <h4>Find Us</h4>

          <iframe
            title="Siddhartha Health And Multicare Location"
            src="https://www.google.com/maps?q=Siddhartha%20Health%20And%20Multicare%20Pvt.%20Ltd.%20Bhairahawa%20Nepal&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>

        </div>

      </div>

      {/* Copyright */}
      {/* <div className="footer-bottom">

        <p>
          © {year} Siddhartha Health And Multicare Pvt. Ltd.
          All rights reserved.
        </p>

      </div> */}

      {/* Copyright */}
<div className="footer-bottom">

  <p>
    © {year} Siddhartha Health And Multicare Pvt. Ltd.
    All rights reserved.
  </p>

  <p className="developed-by">
    Developed by{" "}
    <a
      href="https://mauryarajkumar.com.np"
      target="_blank"
      rel="noopener noreferrer"
    >
      Mrtech Solutions
    </a>
  </p>

</div>

    </footer>
  );
}