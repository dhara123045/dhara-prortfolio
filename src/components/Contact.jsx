import React, { useState } from 'react';
import '../App.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    projectDetails: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Here you would implement the logic to send the form data
    // to your backend server.
    try {
      const response = await fetch('/your-api-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        // Reset the form after successful submission
        setFormData({
          fullName: '',
          email: '',
          mobile: '',
          projectDetails: '',
        });
      } else {
        console.error('Error submitting form:', response.status);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="contact-form">
    <h1>Let's Do Something Awesome</h1>
    <p>Hey, how about we catch up over coffee and have a chat?</p><br/><br/>
    
    <div className="contact-info">
      <h2>Address</h2>
      <p>Katargam, Surat</p>
      
      <h2>Phone & Email</h2>
      <p>+91 9313604013</p>
      <p>dharajada96@gmail.com</p>
    </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name*</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="mobile">Mobile*</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="projectDetails">Write Project Details*</label>
          <textarea
            id="projectDetails"
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
     
    </div>
  );
}

export default ContactForm;