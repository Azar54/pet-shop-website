import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send email
    emailjs.send('service_qd1n4iq', 'template_60k53ni', formData, '7EVel0aLpQhsDKBIi')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      }, (error) => {
        console.error('Failed to send email.', error);
      });

    // Submit to Google Sheets
  fetch("https://api.apispreadsheets.com/data/g3j6CSyf9UsdT8aJ/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
    .then(response => {
      if (response.ok) {
        alert("Form Data Submitted :)");
        // Reset form data
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error("Network response was not ok.");
      }
    })
    .catch(error => {
      alert("There was an error :(");
    });
};

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <h2>Our Location</h2>
          <p>123 Pet Lane, Animal Town, PA 12345</p>
        </div>

        <div className="contact-item">
          <i className="fas fa-phone-alt"></i>
          <h2>Call Us</h2>
          <p>(123) 456-7890</p>
        </div>

        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <h2>Email Us</h2>
          <p>info@petshop.com</p>
        </div>

        <div className="contact-item">
          <i className="fas fa-clock"></i>
          <h2>Business Hours</h2>
          <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
          <p>Saturday: 10:00 AM - 5:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>

      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form className="form-container" onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value="55a6438a-8e40-48c6-bb58-9b4f26c0fdac" />
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
