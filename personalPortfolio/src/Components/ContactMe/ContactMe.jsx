import React from 'react';
import './ContactMe.css';
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';

        export default function ContactMe() {

          return (      
            <div id='#contact-me' className='contact-me'>  
          <div className='social-icons'>
            <div className='social-icon'>
              <a href='https://www.facebook.com/jojo.muna.92/'>
                <FaFacebook />
              </a>
              <p>Contact me on Facebook</p>
            </div>
            <div className='social-icon'>
              <a href='https://github.com/JihadMuna'>
                <FaGithub />
              </a>
              <p>Contact me on Github</p>
            </div>
            <div className='social-icon'>
              <a href='https://www.instagram.com/jojo_muna'>
                <FaInstagram />
              </a>
              <p>Contact me on Instagram</p>
            </div>
          </div>
          </div>
  );
}
