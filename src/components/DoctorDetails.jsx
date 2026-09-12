import React from "react";
import { Link, useParams } from "react-router-dom";

import "./DoctorDetails.css";

import { doctors } from "../data/doctors";

const WHATSAPP_NUMBER = "9779766714481";

function DoctorDetails() {

  const { slug } = useParams();

  const doctor = doctors.find(
    (item) => item.slug === slug
  );


  /* =========================
     DOCTOR NOT FOUND
  ========================== */

  if (!doctor) {

    return (
      <main className="doctor-not-found">

        <div className="not-found-icon">
          🩺
        </div>

        <h1>
          Doctor Not Found
        </h1>

        <p>
          The doctor profile you are looking for
          could not be found.
        </p>

        <Link to="/doctors">
          ← View All Doctors
        </Link>

      </main>
    );
  }


  /* =========================
     WHATSAPP APPOINTMENT
  ========================== */

  const handleWhatsApp = () => {

    const message =
      `Hello, I would like to book an appointment with ${doctor.name}.`;

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        message
      )}`;

    window.open(url, "_blank");
  };


  return (
    <main className="doctor-details-page">

      {/* =========================
          BREADCRUMB
      ========================== */}

      <div className="doctor-breadcrumb">

        <Link to="/">
          Home
        </Link>

        <span>
          ›
        </span>

        <Link to="/doctors">
          Doctors
        </Link>

        <span>
          ›
        </span>

        <span>
          {doctor.name}
        </span>

      </div>


      {/* =========================
          DOCTOR PROFILE
      ========================== */}

      <section className="doctor-profile">


        {/* Doctor Image */}

        <div className="doctor-profile-image">

          <img
            src={doctor.image}
            alt={`${doctor.name} - ${doctor.englishSpecialization}`}
          />

        </div>


        {/* Doctor Information */}

        <div className="doctor-profile-content">


          <span className="doctor-profile-badge">

            <span>✓</span>

            Specialist Doctor

          </span>


          <h1>
            {doctor.name}
          </h1>


          <h2>
            {doctor.specialization}
          </h2>


          <p className="doctor-profile-english">
            {doctor.englishSpecialization}
          </p>


          <div className="profile-divider"></div>


          <h3 className="about-doctor-title">
            About the Doctor
          </h3>


          <p className="doctor-description">
            {doctor.description}
          </p>


          {/* Clinic Information */}

          <div className="doctor-clinic-info">


            <div className="clinic-info-item">

              <span className="clinic-info-icon">
                🏥
              </span>

              <div>

                <strong>
                  Clinic
                </strong>

                <p>
                  {doctor.clinic}
                </p>

              </div>

            </div>


            <div className="clinic-info-item">

              <span className="clinic-info-icon">
                📍
              </span>

              <div>

                <strong>
                  Location
                </strong>

                <p>
                  {doctor.location}
                </p>

              </div>

            </div>


            <div className="clinic-info-item">

              <span className="clinic-info-icon">
                📞
              </span>

              <div>

                <strong>
                  Appointment
                </strong>

                <p>
                  Contact the clinic for appointment availability.
                </p>

              </div>

            </div>

          </div>


          {/* Appointment Button */}

          <button
            type="button"
            className="profile-appointment-btn"
            onClick={handleWhatsApp}
          >

            <span>
              💬
            </span>

            Book Appointment on WhatsApp

          </button>


        </div>

      </section>


      {/* =========================
          BACK TO DOCTORS
      ========================== */}

      <div className="doctor-back">

        <Link to="/doctors" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>

          ← View All Specialist Doctors

        </Link>

      </div>

    </main>
  );
}

export default DoctorDetails;