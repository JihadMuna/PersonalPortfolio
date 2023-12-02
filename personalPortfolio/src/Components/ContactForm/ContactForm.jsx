import React, { useRef } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = () => {
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    // Store data in local storage
    localStorage.setItem('contactFormData', JSON.stringify(data));

    console.log('Form submitted:', data);
  };

  return (
    <section id="contact" className="contact-form-section">
      <h2>Contact Me</h2>
      <form>
        <input type="text" ref={nameRef} placeholder='Name' required />
        <input type="email" ref={emailRef} placeholder='Email' required />
        <textarea ref={messageRef} placeholder='Message' required />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
