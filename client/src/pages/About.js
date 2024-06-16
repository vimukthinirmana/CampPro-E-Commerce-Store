import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


function About() {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://source.unsplash.com/featured/?camping')" }}>
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">About CampPro</h1>
            <p className="text-xl">Your one-stop shop for all camping gear and accessories.</p>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Who We Are</h2>
        <p className="text-center max-w-2xl mx-auto mb-8">
          CampPro is dedicated to providing top-quality camping gear and accessories for all your outdoor adventures.
          From tents and sleeping bags to cooking equipment and hiking gear, we have everything you need to enjoy the great outdoors.
        </p>
        <div className="flex flex-wrap -mx-4 text-center">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p>To equip outdoor enthusiasts with the best camping gear available and foster a love for nature and adventure.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p>To be the leading provider of camping gear and accessories, inspiring people to explore and appreciate the natural world.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p>Quality, innovation, and sustainability in all our products, with a commitment to customer satisfaction.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Meet the Team</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <img src="https://source.unsplash.com/random/150x150?person" alt="Team member" className="w-32 h-32 mx-auto rounded-full mb-4" />
                <h3 className="text-xl font-bold mb-2">John Doe</h3>
                <p className="mb-4">CEO & Founder</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-blue-500 hover:text-blue-700"><FaFacebookF /></a>
                  <a href="#" className="text-blue-500 hover:text-blue-700"><FaTwitter /></a>
                  <a href="#" className="text-blue-500 hover:text-blue-700"><FaInstagram /></a>
                  <a href="#" className="text-blue-500 hover:text-blue-700"><FaLinkedin /></a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <img src="https://source.unsplash.com/random/150x150?person" alt="Team member" className="w-32 h-32 mx-auto rounded-full mb-4" />
                <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
                <p className="mb-4">Chief Marketing Officer</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-blue-500 hover:text-blue-700"><FaFacebookF /></a>
                  <a href="#" className="text-blue-500 hover:text-blue-700"><FaTwitter /></a>
                  <a href="#" className="text-blue-500 hover:text-blue-700"><FaInstagram /></a>
                  <a href="#" className="text-blue-500 hover:text-blue-700"><FaLinkedin /></a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <img src="https://source.unsplash.com/random/150x150?person" alt="Team member" className="w-32 h-32 mx-auto rounded-full mb-4" />
                <h3 className="text-xl font-bold mb-2">Emily Johnson</h3>
                <p className="mb-4">Product Manager</p>
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-blue-500 hover:text-blue-700"><FaFacebookF /></a>
                  <a href="#" className="text-blue-500 hover:text-blue-700"><FaTwitter /></a>
                  <a href="#" className="text-blue-500 hover:text-blue-700"><FaInstagram /></a>
                  <a href="#" className="text-blue-500 hover:text-blue-700"><FaLinkedin /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="mb-4">"CampPro provided me with the best camping experience. Their gear is top-notch and the customer service is excellent!"</p>
              <h3 className="text-xl font-bold">- Alex Brown</h3>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="mb-4">"I love the quality of the products from CampPro. They made my camping trip unforgettable!"</p>
              <h3 className="text-xl font-bold">- Sarah Davis</h3>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="mb-4">"Great products, fast shipping, and excellent customer service. CampPro is my go-to for camping gear."</p>
              <h3 className="text-xl font-bold">- Michael Lee</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;