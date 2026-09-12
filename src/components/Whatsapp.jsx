import React from "react";
import "./Whatsapp.css";

export default function Whatsapp() {
  const phone = "9779766714481";
  const message = "Hello, I would like to book an appointment.";

  // Put your Facebook Page username here
  const messengerUsername = "siddharthamulticare";

  return (
    <div className="whatsapp-wrapper">

      {/* Help Text */}
      <div className="whatsapp-text">
        How may I help you?
      </div>

      {/* Call */}
      <a
        href={`tel:+${phone}`}
        className="contact-button call-button"
        aria-label="Call us"
      >
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M22 16.92v3a2 2 0 0 1-2.18 2
            19.79 19.79 0 0 1-8.63-3.07
            19.5 19.5 0 0 1-6-6
            19.79 19.79 0 0 1-3.07-8.67
            A2 2 0 0 1 4.11 2h3
            a2 2 0 0 1 2 1.72
            12.84 12.84 0 0 0 .7 2.81
            2 2 0 0 1-.45 2.11L8.09 9.91
            a16 16 0 0 0 6 6l1.27-1.27
            a2 2 0 0 1 2.11-.45
            12.84 12.84 0 0 0 2.81.7
            A2 2 0 0 1 22 16.92z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>

      {/* Messenger */}
      <a
        href={`https://m.me/${messengerUsername}`}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-button messenger-button"
        aria-label="Message us on Messenger"
      >
        <svg viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3C6.48 3 2 6.98 2 12
            c0 2.84 1.48 5.34 3.73 6.82
            V22l3.17-1.74
            c.98.28 2.02.43 3.1.43
            5.52 0 10-3.98 10-8.69
            S17.52 3 12 3z"
            fill="currentColor"
          />

          <path
            d="M7 14.5l3.2-3.4 2.3 1.8
            3.5-3.4-3.2 4.8-2.3-1.8L7 14.5z"
            fill="white"
          />
        </svg>
      </a>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        aria-label="Chat with us on WhatsApp"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </a>

    </div>
  );
}