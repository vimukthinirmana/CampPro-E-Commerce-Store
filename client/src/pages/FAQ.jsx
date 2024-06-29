import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function FAQ() {

    const [faqs, setFaqs] = useState([
        {
          question: 'What payment methods do you accept?',
          answer:
            'We accept all major credit cards (Visa, Mastercard, American Express) and PayPal.',
          isOpen: false,
        },
        {
          question: 'Do you offer international shipping?',
          answer:
            'Yes, we offer international shipping to most countries. Shipping rates may apply.',
          isOpen: false,
        },
        {
          question: 'How can I track my order?',
          answer:
            'Once your order ships, you will receive a tracking number via email. You can track your order on our website.',
          isOpen: false,
        },
        {
          question: 'What is your return policy?',
          answer:
            'We offer a 30-day return policy for unused items. Please contact customer support for return instructions.',
          isOpen: false,
        },
        {
            question: 'Do you provide warranties for your products?',
            answer:
              'Yes, we offer warranties on select products. Warranty details can be found on the product page or by contacting customer support.',
            isOpen: false,
          },
          {
            question: 'Can I cancel or modify my order?',
            answer:
              'Orders can usually be modified or canceled within 24 hours of purchase. Please contact us immediately for assistance.',
            isOpen: false,
          },
          {
            question: 'How can I contact customer support?',
            answer:
              'You can reach our customer support team via email at support@camppro.com or by phone at  (+94) 768679867 during business hours.',
            isOpen: false,
          },
          {
            question: 'Are your products eco-friendly?',
            answer:
              'We strive to carry eco-friendly products and brands that prioritize sustainability. Look for eco-friendly labels on our product pages.',
            isOpen: false,
          },
          {
            question: 'Do you offer discounts or promotions?',
            answer:
              'Yes, we frequently offer discounts and promotions. Stay updated by subscribing to our newsletter or following us on social media.',
            isOpen: false,
          },
          {
            question: 'How secure is shopping on your website?',
            answer:
              'We use industry-standard encryption and security measures to protect your personal information and ensure secure transactions.',
            isOpen: false,
          }
      ]);
    
      const toggleFAQ = (index) => {
        setFaqs(
          faqs.map((faq, i) => {
            if (i === index) {
              faq.isOpen = !faq.isOpen;
            } else {
              faq.isOpen = false;
            }
            return faq;
          })
        );
      };
    


  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-6xl font-bold text-center mb-10 select-none text-gray-500">F.A.Q</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              {faq.isOpen ? (
                <FaChevronUp className="text-gray-600 w-6 h-6" />
              ) : (
                <FaChevronDown className="text-gray-600 w-6 h-6" />
              )}
            </div>
            {faq.isOpen && (
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;