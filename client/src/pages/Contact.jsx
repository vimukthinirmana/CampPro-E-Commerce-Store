import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { GiCampingTent } from "react-icons/gi";


function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-12">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full">
      <div className="flex items-center justify-center mb-4 h-20 select-none text-gray-500">
            <GiCampingTent className='h-full w-auto' />
            <h5 className="text-4xl font-bold ml-2">| CampPro</h5>
          </div>
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="mb-4">Have any questions? We'd love to hear from you.</p>
            <form className="space-y-4">
              <div>
                <label className="block mb-1 font-bold">Name</label>
                <input type="text" className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200" />
              </div>
              <div>
                <label className="block mb-1 font-bold">Email</label>
                <input type="email" className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200" />
              </div>
              <div>
                <label className="block mb-1 font-bold">Message</label>
                <textarea className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200" rows="4"></textarea>
              </div>
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200">Send Message</button>
            </form>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaMapMarkerAlt className="text-blue-500 mr-4" />
                <span> Matara St, Galle</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-blue-500 mr-4" />
                <span>(+94) 768679867</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-500 mr-4" />
                <span>info@campro.com</span>
              </li>
            </ul>
            <h3 className="text-2xl font-bold mt-8 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-blue-500 hover:text-blue-700"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter" className="text-blue-500 hover:text-blue-700"><FaTwitter /></a>
              <a href="#" aria-label="Instagram" className="text-blue-500 hover:text-blue-700"><FaInstagram /></a>
              <a href="#" aria-label="Instagram" className="text-blue-500 hover:text-blue-700"><FaWhatsapp /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;