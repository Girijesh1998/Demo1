import React from 'react';
import './Footer.css';
import logo_footer from './Footer_img/footer_logo.png'

const Footer = () => {
  return (
    <div id='footer'>
      <img src={logo_footer} className='footer_logo' alt="" srcset="" />
      <div className="footer_adress">
        <p className='text-white'>Mon – Sat 8.00- 18.00</p>
        <p className='text-white'>457 BIg Blue Street Sahjanwa, Gorakhpur 273209</p>
        <p className='text-white'>+91 7081650914</p>
      </div>
      <nav class="nav justify-content-center">
        <a class="nav-link text-white" to="">Contact</a>
        <a class="nav-link text-white" to="">About</a>
        <a class="nav-link text-white" to="">Event</a>
        <a class="nav-link text-white" to="">Course</a>
      </nav>
      <div className="copy_right d-md-flex">
      <p className=''>© 2024 Interactive, All Rights Reserved</p>
      <p className='ms-auto'>call +91 7081650914</p>
      </div>
    </div>

  )
}

export default Footer;