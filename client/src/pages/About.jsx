import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaStar } from 'react-icons/fa';


function About() {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const testimonials = [
    {
      name: 'Indunil Wijekoon',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx0izB9MYXh-VKaqenX_ZGJlXLbh1atOs27g&s',
      rating: 5,
      comment: 'CampPro provided me with the best camping experience. Their gear is top-notch and the customer service is excellent!'
    },
    {
      name: 'Travel With Wife',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSY1M197sTfI9Ns9m_yMnb8B42cf14_GVh-Q&s',
      rating: 4,
      comment: 'I love the quality of the products from CampPro. They made my camping trip unforgettable and absolutely amazing with their gear!'
    },
    {
      name: 'Solo Hiker',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuneh4re5YAHjoBAxeKAFIQs_msQ3CeYrYmw&s',
      rating: 5,
      comment: 'Great products, fast shipping, and excellent customer service. CampPro is my go-to for camping gear.'
    }
  ];





  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1631635589499-afd87d52bf64?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
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
        <p className="text-center max-w-4xl mx-auto mb-8 font-serif text-2xl font-medium">
          CampPro is dedicated to providing top-quality camping gear and accessories for all your outdoor adventures.
          From tents and sleeping bags to cooking equipment and hiking gear, we have everything you need to enjoy the great outdoors.
        </p>
        <div className="flex flex-wrap -mx-4 text-center" data-aos="fade-up">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p>To equip outdoor enthusiasts with the best camping gear available and foster a love for nature and adventure.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0" data-aos="fade-up">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p>To be the leading provider of camping gear and accessories, inspiring people to explore and appreciate the natural world.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0" data-aos="fade-up">
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
          <h2 className="text-4xl font-bold text-center mb-8" data-aos="fade-up">Meet the Team</h2>
          <div className="flex flex-wrap -mx-4">

            <div className="w-full md:w-1/3 px-4 mb-8" data-aos="zoom-in-right">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <img src="https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team member" className="w-32 h-32 mx-auto rounded-full mb-4" />
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
            <div className="w-full md:w-1/3 px-4 mb-8" data-aos="zoom-out">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <img src="https://img.freepik.com/free-photo/brunette-businesswoman-posing_23-2148142767.jpg?t=st=1718564705~exp=1718568305~hmac=4e1bb8cbbab7e4d9069ab4446128e73e252ece180392a4c44a0bf9b21ddc1d5d&w=740" alt="Team member" className="w-32 h-32 mx-auto rounded-full mb-4" />
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
            <div className="w-full md:w-1/3 px-4 mb-8" data-aos="zoom-in-left">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <img src="https://img.freepik.com/free-photo/brunette-businesswoman-showing-her-tablet_23-2148142790.jpg?t=st=1718564404~exp=1718568004~hmac=b8ea1310b00daddae7b28f6ba12c60ca50abb073bd6ba6d8432c04e3e62b3713&w=740" alt="Team member" className="w-32 h-32 mx-auto rounded-full mb-4" />
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
        <h2 className="text-4xl font-bold text-center mb-8" data-aos="fade-up">What Our Customers Say</h2>
        {/* <div className="flex flex-wrap -mx-4">
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
        </div> */}
        <div className="flex flex-wrap -mx-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8" data-aos="fade-up">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:outline-gray-400">
                <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 mx-auto rounded-full mb-4" />
                <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-gray-300" />
                  ))}
                </div>
                <p className="mb-4">{testimonial.comment}</p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
}

export default About;