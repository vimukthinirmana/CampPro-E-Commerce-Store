import React, {useEffect} from 'react';
import { FaRegEnvelope, FaPhoneAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

function PrivacyPolicy() {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <div className="text-center mb-12">
        <h1 className="text-7xl font-bold text-gray-500 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mt-2">Updated on January 1, 2024</p>
      </div>
      <div className="space-y-12">
        <section  data-aos="fade-up">
          <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to CampPro. We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.
          </p>
        </section>
        <section data-aos="fade-up">
          <h2 className="text-3xl font-semibold mb-4">privacy policy</h2>
          <p className="text-gray-700 leading-relaxed">
          At CampPro, your privacy is our top priority. We are dedicated to safeguarding your personal information as you explore the great outdoors through our premium camping gear. 
          When you shop with us, rest assured that your data is securely handled with the same care and attention we put into crafting our high-quality products. 
          We collect only the necessary information to process your orders, enhance your shopping experience, and keep you informed about our latest adventures and offers. 
          We never share your details with third parties without your explicit consent. Trust CampPro to keep your personal information as protected as you are under one of our sturdy, weather-proof tents. Happy camping!
          </p>
        </section>
        <section data-aos="fade-up">
          <h2 className="text-3xl font-semibold mb-4">Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed">
            We collect information you provide directly to us, such as when you create an account, place an order, or contact us for support. This may include your name, email address, phone number, and payment information.
          </p>
        </section>
        <section data-aos="fade-up">
          <h2 className="text-3xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 leading-relaxed">
            We use your information to process your orders, provide customer support, and improve our services. We may also use your information to send you promotional communications, which you can opt out of at any time.
          </p>
        </section>
        <section data-aos="fade-up">
          <h2 className="text-3xl font-semibold mb-4">Sharing Your Information</h2>
          <p className="text-gray-700 leading-relaxed">
            We do not share your personal information with third parties except as necessary to provide our services or comply with the law. We may share information with our trusted partners who assist us in operating our website and conducting our business.
          </p>
        </section>
        <section data-aos="fade-up">
          <h2 className="text-3xl font-semibold mb-4">Data Security</h2>
          <p className="text-gray-700 leading-relaxed">
            We implement a variety of security measures to protect your personal information. Despite our efforts, no security measures are completely secure, and we cannot guarantee the security of your information.
          </p>
        </section>
        <section data-aos="fade-up">
          <h2 className="text-3xl font-semibold mb-4">Your Choices</h2>
          <p className="text-gray-700 leading-relaxed">
            You have the right to access, update, or delete your personal information. You can do this by logging into your account or contacting us directly. You can also opt out of receiving promotional communications from us.
          </p>
        </section>
        <section data-aos="fade-up">
          <h2 className="text-3xl font-semibold mb-4">Changes to This Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>
        <section data-aos="fade-up">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have any questions about this Privacy Policy, please contact us:
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

export default PrivacyPolicy;