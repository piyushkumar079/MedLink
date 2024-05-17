import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          <div className="footer-content md:text-left">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">FAQs</p>
            <p className="mb-2">Post a query</p>
            <p className="mb-2">Give Your Feedback</p>
            <p>Phone: +91 8323676932</p>
          </div>
          <div className="footer-content md:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="list">
              <li><Link to="/" className="text-blue-300 hover:text-blue-400 transition duration-300">Home</Link></li>
              <li><Link to="/about" className="text-blue-300 hover:text-blue-400 transition duration-300">About Us</Link></li>
              <li><Link to="/" className="text-blue-300 hover:text-blue-400 transition duration-300">Services</Link></li>
              <li><Link to="/appointments" className="text-blue-300 hover:text-blue-400 transition duration-300">Consult online</Link></li>
              <li><Link to="/appointments" className="text-blue-300 hover:text-blue-400 transition duration-300">Book Appointment</Link></li>
            </ul>
          </div>
          <div className="footer-content md:text-left">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <ul className="flex justify-center md:justify-start space-x-4">
              <li><a href="https://facebook.com" target='_blank' rel='noreferrer' className="text-blue-300 hover:text-blue-400 transition duration-300"><i className="fab fa-facebook"></i></a></li>
              <li><a href="https://x.com" target='_blank' rel='noreferrer' className="text-blue-300 hover:text-blue-400 transition duration-300"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://instagram.com" target='_blank' rel='noreferrer' className="text-blue-300 hover:text-blue-400 transition duration-300"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://linkedin.com" target='_blank' rel='noreferrer' className="text-blue-300 hover:text-blue-400 transition duration-300"><i className="fab fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <p>&copy; 2023 Medlink Services. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
