// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 mb-4">
          Welcome to Our Company! We are dedicated to providing the best services in the industry. Our team is composed of highly skilled professionals who are passionate about what they do.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
        <p className="text-gray-600 mb-4">
          Our mission is to deliver top-notch solutions to our clients, ensuring their success and satisfaction. We strive for excellence in every project we undertake.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Values</h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Customer Satisfaction</li>
          <li>Teamwork</li>
        </ul>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Team</h2>
        <p className="text-gray-600">
          We have a diverse team of experts who are dedicated to delivering the best results for our clients. Our team's experience and knowledge ensure that we can tackle any challenge and provide exceptional service.
        </p>
      </div>
    </div>
  );
}

export default About;
