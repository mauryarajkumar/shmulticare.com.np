import React from "react";
import { Link } from "react-router-dom";

import "./DoctorList.css";

import { doctors } from "../data/doctors";

const WHATSAPP_NUMBER = "9779766714481";

function DoctorList() {

  const handleWhatsApp = (doctorName) => {

    const message =
      `Hello, I would like to book an appointment with ${doctorName}.`;

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        message
      )}`;

    window.open(url, "_blank");
  };


  return (
    <section
      id="doctorsit"
      className="doctor-section"
    >

      {/* =========================
          SECTION HEADING
      ========================== */}

      <div className="doctor-heading">

        <span className="doctor-eyebrow">
          OUR MEDICAL TEAM
        </span>

        <h2 className="doctor-title">
          Meet Our Specialist Doctors
        </h2>

        <p className="doctor-subtitle">
          Experienced healthcare professionals committed
          to providing compassionate and quality medical care.
        </p>

      </div>


      {/* =========================
          DOCTOR GRID
      ========================== */}

      <div className="doctor-grid">

        {doctors.map((doctor) => (

          <article
            className="doctor-card"
            key={doctor.slug}
          >

            {/* =========================
                CLICKABLE PROFILE
            ========================== */}

            <Link
              to={`/doctors/${doctor.slug}`}
              className="doctor-profile-link"    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >

              {/* Doctor Image */}

              <div className="doctor-image-wrapper">

                <img
                  src={doctor.image}
                  alt={`${doctor.name} - ${doctor.englishSpecialization}`}
                  className="doctor-image"
                  loading="lazy"
                />


                <div className="doctor-specialist-badge">

                  <span>✓</span>

                  Specialist

                </div>

              </div>


              {/* Doctor Information */}

              <div className="doctor-info">

                <h3 className="doctor-name">
                  {doctor.name}
                </h3>


                <div className="doctor-specialization">

                  <span className="specialization-nepali">
                    {doctor.specialization}
                  </span>

                  <span className="specialization-english">
                    {doctor.englishSpecialization}
                  </span>

                </div>

              </div>

            </Link>


            {/* =========================
                APPOINTMENT BUTTON
            ========================== */}

            <div className="doctor-action">

              <button
                type="button"
                className="btn-appointment"
                onClick={() =>
                  handleWhatsApp(doctor.name)
                }
              >

                <span className="appointment-icon">
                  💬
                </span>

                <span className="appointment-text">
                  Book Appointment
                </span>

                <span className="appointment-arrow">
                  →
                </span>

              </button>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default DoctorList;