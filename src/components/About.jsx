// 


import React from "react";
import "./About.css";

export default function About() {
  const specialties = [
    {
      icon: "👶",
      title: "Pediatrics",
      text: "Professional healthcare and consultation for infants, children, and adolescents.",
    },
    {
      icon: "👩‍⚕️",
      title: "Gynecology",
      text: "Comprehensive women's healthcare, gynecological consultation, and reproductive health services.",
    },
    {
      icon: "🦴",
      title: "Orthopedics",
      text: "Medical consultation for bones, joints, muscles, mobility, and orthopedic concerns.",
    },
    {
      icon: "👂",
      title: "ENT",
      text: "Specialized consultation for common ear, nose, throat, and related conditions.",
    },
    {
      icon: "🧴",
      title: "Dermatology",
      text: "Professional care and consultation for skin, hair, and nail-related concerns.",
    },
   {
  icon: "🩺",
  title: "General Physician",
  text: "Comprehensive consultation and treatment for common illnesses, infections, and general health concerns.",
},
  ];

  const features = [
    {
      icon: "✓",
      title: "Experienced Doctors",
      text: "Qualified and experienced medical professionals focused on patient care.",
    },
    {
      icon: "✓",
      title: "Patient-Centered Care",
      text: "We listen to our patients and provide personalized healthcare guidance.",
    },
    {
      icon: "✓",
      title: "Modern Healthcare",
      text: "A comfortable and modern environment designed around patient needs.",
    },
    {
      icon: "✓",
      title: "Compassionate Service",
      text: "We believe healthcare should be respectful, supportive, and compassionate.",
    },
  ];

  return (
    <section id="about" className="section about">
      <div className="container">

        {/* Section Header */}
        <div className="about-header">
          <span className="section-tag">ABOUT SIDDHARTHA HEALTH</span>

          <h2>
            Trusted Healthcare Center in{" "}
            <span>Bhairahawa, Nepal</span>
          </h2>

          <p className="about-intro">
            Siddhartha Health And Multicare Pvt. Ltd. is a modern and
            patient-focused healthcare center in Bhairahawa, Rupandehi,
            Nepal, dedicated to providing reliable, compassionate, and
            quality medical care for individuals, children, women, and
            families.
          </p>
        </div>

        {/* Main About Content */}
        <div className="about-main">

          <div className="about-content">
            <span className="small-title">Who We Are</span>

            <h3>
              Comprehensive Medical Care Under One Roof
            </h3>

            <p>
              Siddhartha Health And Multicare Pvt. Ltd. is committed to
              delivering accessible and dependable healthcare services to
              the community of Bhairahawa, Siddharthanagar, Rupandehi, and
              surrounding areas.
            </p>

            <p>
              Our team of experienced doctors and healthcare professionals
              provides consultation across multiple medical specialties,
              including Pediatrics, Gynecology, Orthopedics, ENT, and
              Dermatology. We focus on understanding every patient's needs
              and providing appropriate medical guidance in a safe,
              comfortable, and welcoming environment.
            </p>

            <p>
              From children's healthcare and women's health to bone and joint
              care, ear-nose-throat conditions, and skin-related concerns,
              our goal is to provide professional medical support with
              compassion, respect, and attention to every patient.
            </p>

            <div className="about-highlight">
              <div className="highlight-icon">❤</div>

              <div>
                <h4>Healthcare With Compassion</h4>
                <p>
                  Your health, comfort, and trust are at the heart of
                  everything we do.
                </p>
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="about-cards">

            <div className="info-card mission-card">
              <div className="card-icon">🎯</div>

              <div>
                <h3>Our Mission</h3>

                <p>
                  To provide accessible, safe, reliable, and compassionate
                  healthcare while maintaining high standards of
                  professionalism and patient satisfaction.
                </p>
              </div>
            </div>

            <div className="info-card values-card">
              <div className="card-icon">💙</div>

              <div>
                <h3>Our Values</h3>

                <p>
                  Empathy, integrity, professionalism, trust, respect,
                  patient safety, and continuous improvement guide our
                  approach to healthcare.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Why Choose Us */}
        <div className="why-us">
          <div className="why-header">
            <span className="small-title">WHY CHOOSE US</span>

            <h3>
              Quality Care Focused on You
            </h3>

            <p>
              We aim to make every healthcare experience comfortable,
              respectful, and focused on the individual needs of our patients.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">
                  {feature.icon}
                </div>

                <div>
                  <h4>{feature.title}</h4>
                  <p>{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Medical Specialties */}
        <div className="specialties">

          <div className="specialties-header">
            <span className="small-title">OUR SPECIALTIES</span>

            <h3>
              Medical Services for Your Family
            </h3>

            <p>
              Our healthcare services cover a range of medical specialties
              to support the health and well-being of children, women,
              adults, and families.
            </p>
          </div>

          <div className="specialties-grid">
            {specialties.map((specialty, index) => (
              <div className="specialty-card" key={index}>
                <div className="specialty-icon">
                  {specialty.icon}
                </div>

                <h4>{specialty.title}</h4>

                <p>{specialty.text}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Local SEO Content */}
        <div className="local-seo">
          <h3>
            Your Trusted Healthcare Partner in Bhairahawa
          </h3>

          <p>
            Located in Bhairahawa, Rupandehi, Siddhartha Health And
            Multicare Pvt. Ltd. serves patients looking for dependable
            healthcare and specialist medical consultation in the
            Bhairahawa and Siddharthanagar area. Our doctors and medical
            professionals are committed to providing quality healthcare
            services in a professional and patient-friendly environment.
          </p>

          <p>
            Whether you are looking for a pediatrician for your child, a
            gynecologist for women's healthcare, an orthopedic specialist
            for bone and joint concerns, an ENT specialist for ear, nose,
            and throat problems, or a dermatologist for skin and hair
            concerns, Siddhartha Health And Multicare is dedicated to
            supporting your healthcare needs.
          </p>
        </div>

      </div>
    </section>
  );
}