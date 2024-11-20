'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {  faMailBulk } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <footer id='footer' className="bg-gray-800 text-gray-300 py-8 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col align-middle md:flex-row md:justify-between md:space-x-6">
          {/* Brand Info */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-white">What I Do?</h2>
            <p className="text-gray-400 mt-2">
              Creating innovative solutions to make life easier.
            </p>
          </div>

          {/* Email Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-medium text-white">
              Email Me <FontAwesomeIcon icon={faMailBulk} size="lg" />
            </h3>
            <p className="text-gray-400 mt-2">abhinavsinghmehra@gmail.com</p>
          </div>

          {/* Contact Section */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-medium text-white">
              Call & WhatsApp <FontAwesomeIcon icon={faWhatsapp} size="lg" />
            </h3>
            <p className="text-gray-400 mt-2">Phone: (+91) 8171141494</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 mt-8">
          &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
