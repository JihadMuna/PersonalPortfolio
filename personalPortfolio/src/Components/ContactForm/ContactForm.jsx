// ContactForm.jsx

import React from 'react';
import './ContactForm.css';

export default function ContactForm() {
  return (
    <section className="contact-form-section">
      <h2>Contact Me</h2>
      <form>
        <input type="text" id="name" name="name"  placeholder='Name' required/>

        <input type="email" id="email" name="email" placeholder='Email' required />

        <textarea id="message" name="message"  placeholder='Message' required />

        <button type="button" onClick={() => console.log('Form submitted')}>
          Submit
        </button>
      </form>
    </section>
  );
}
