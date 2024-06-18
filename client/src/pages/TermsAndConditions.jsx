import React, {useEffect} from 'react';
import {  FaRegEnvelope, FaPhoneAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

function TermsAndConditions() {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold text-gray-500">Terms & Conditions</h1>
        <p className="text-gray-500 mt-2">Updated on January 1, 2024</p>
      </div>
      <div className="space-y-12">
        <section data-aos="fade-up">
          <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to CampPro. These terms and conditions outline the rules and regulations for the use of CampPro's Website.
          </p>
        </section>
        <section data-aos="fade-up">
          <h2 className="text-3xl font-semibold mb-4">Acceptance of Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use CampPro's website if you do not accept all of the terms and conditions stated on this page.
          </p>
        </section>
        <section data-aos="fade-up">
          <h2 className="text-3xl font-semibold mb-4">License</h2>
          <p className="text-gray-700 leading-relaxed">
            Unless otherwise stated, CampPro and/or its licensors own the intellectual property rights for all material on CampPro. All intellectual property rights are reserved. You may view and/or print pages from https://www.camp-pro.com for your own personal use subject to restrictions set in these terms and conditions.
          </p>
        </section>
        <section data-aos="fade-up">
          <h2 className="text-3xl font-semibold mb-4">User Comments</h2>
          <p className="text-gray-700 leading-relaxed">
            Certain parts of this website offer the opportunity for users to post and exchange opinions, information, material, and data ('Comments'). CampPro does not screen, edit, publish, or review Comments prior to their appearance on the website, and Comments do not reflect the views or opinions of CampPro, its agents, or affiliates.
          </p>
        </section>
        <section data-aos="fade-up">
          <h2 className="text-3xl font-semibold mb-4">Hyperlinking to our Content</h2>
          <p className="text-gray-700 leading-relaxed">
            The following organizations may link to our Web site without prior written approval:
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>Government agencies;</li>
            <li>Search engines;</li>
            <li>News organizations;</li>
            <li>Online directory distributors;</li>
          </ul>
        </section>
        <section data-aos="fade-up">
          <h2 className="text-3xl font-semibold mb-4">Content Liability</h2>
          <p className="text-gray-700 leading-relaxed">
            We shall have no responsibility or liability for any content appearing on your Web site. You agree to indemnify and defend us against all claims arising out of or based upon your Website.
          </p>
        </section>
        <section data-aos="fade-up">
          <h2 className="text-3xl font-semibold mb-4">Reservation of Rights</h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right at any time and in its sole discretion to request that you remove all links or any particular link to our Web site. You agree to immediately remove all links to our Web site upon such request.
          </p>
        </section>
        <section data-aos="fade-up">
          <h2 className="text-3xl font-semibold mb-4">Removal of links from our website</h2>
          <p className="text-gray-700 leading-relaxed">
            If you find any link on our Web site or any linked web site objectionable for any reason, you may contact us about this. We will consider requests to remove links but will have no obligation to do so or to respond directly to you.
          </p>
        </section>
        <section data-aos="fade-up">
          <h2 className="text-3xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have any questions about these Terms, please contact us:
          </p>
          <div className="flex items-center space-x-4 text-gray-700">
            <FaRegEnvelope className="w-6 h-6" />
            <span>support@camppro.com</span>
          </div>
          <div className="flex items-center space-x-4 text-gray-700 mt-2">
            <FaPhoneAlt className="w-6 h-6" />
            <span> (+94) 768679867</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TermsAndConditions;