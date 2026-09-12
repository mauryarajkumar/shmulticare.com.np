
import React from 'react'
import "./Contact.css"

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <div>
          <h2>Contact &amp; Location</h2>
          <p>
            We&apos;re here to help you with appointments, general inquiries, and
            follow-up care.
          </p>

          <div className="contact-details">
            <p>
              <strong>Address:</strong>
              <br />
              Siddharthnagar-7, New Road, Bhairahawa
            </p>
            <p>
              <strong>Phone:</strong>
              <br />
              <a href="tel:+9779821558535">+977 9821558535</a>
                <br />
              <a href="tel:+9779766714481">+977 9766714481</a>
            </p>
            <p>
              <strong>Hours:</strong>
              <br />
              Sunday – Friday: 7:00 AM – 8:00 PM
              <br />
              Saturday: 8:00 AM – 8:00 PM
            </p>
          </div>
        </div>

        {/* Form Submit */}
        <form
          className="contact-form"
          action="https://formsubmit.co/siddharthahealthandmulticare@gmail.com"
          method="POST"
        >
          {/* FormSubmit Settings */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />
          <input
            type="hidden"
            name="_subject"
            value="New Message From Clinic Website"
          />
          <input
            type="hidden"
            name="_next"
            value="https://your-site.com/thank-you"
          />

          {/* Honeypot — spam protection */}
          <input type="text" name="_honey" style={{ display: "none" }} />

          <h3>Send Us a Message</h3>

          <label>
            Full Name
            <input
              name="name"
              type="text"
              required
              placeholder="Your name"
            />
          </label>

          <label>
            Phone / Email
            <input
              name="contact"
              type="text"
              required
              placeholder="Your contact details"
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows="4"
              required
              placeholder="How can we help you?"
            ></textarea>
          </label>

          <button type="submit" className="btn-primary full-width">
            Submit
          </button>
        </form>
        {/*  FORM END */}
      </div>
    </section>
  )
}
