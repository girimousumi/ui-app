// components/Footer.js
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Kotha Residency</h2>
          <p className="mb-6">
            Experience the ultimate getaway at our luxurious resort, where every detail is designed to offer you unparalleled comfort and relaxation. Nestled in a stunning location, our resort boasts views, pristine beaches, and lush landscapes.
          </p>
          <p className="text-sm">© 2016-2024 . All Rights Reserved</p>
        </div>

        {/* Middle Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2"><a href="#" className="hover:text-white">Book Resort</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white">Contact Us</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li className="mb-2"><a href="#" className="hover:text-white">Blog & Stories</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Contact</h2>
          <ul>
            <li className="mb-2 flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              Chill mountains, Naibi street, Wayanad, Kerala, INDIA - 682028
            </li>
            <li className="mb-2 flex items-center">
              <FaPhoneAlt className="mr-2" />
              +91 940 098 9363
            </li>
            <li className="mb-2 flex items-center">
              <FaEnvelope className="mr-2" />
              office@electrapower.in
            </li>
          </ul>
        </div>

        <div>
          {/* Stay Tuned Section */}
          <div>
            <h2 className="text-xl font-bold text-white mb-4">Stay Tuned!</h2>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your mail"
                className="w-full p-2 rounded-l-md bg-gray-800 text-gray-400 focus:outline-none"
              />
              <button className="p-2 rounded-r-md bg-gray-700 text-white hover:bg-gray-600">Connect</button>
            </div>
          </div>

          {/* Customer Care Section */}
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-white mb-4">Customer Care</h2>
            <button className="p-4 bg-gray-700 text-white rounded-md hover:bg-gray-600">
              Connect to Us
            </button>
          </div>
        </div>
      </div>


      <div className="mt-8 container mx-auto px-4 flex justify-center space-x-4">
        <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
        <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={24} /></a>
        <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
      </div>
    </footer>
  );
};

export default Footer;
