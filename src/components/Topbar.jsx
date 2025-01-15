import React from 'react';
import IconImage from '../assets/smiling-indian-man.jpg';
import Mission from '../assets/mission.png';
import Vision from '../assets/vision.png';
import Values from '../assets/values.png';

const Topbar = () => {
  return (
    <section className="bg-white py-16 px-8" data-aos="fade-down">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-700">About Us</h2>
        <p className="mt-4 mb-12 text-gray-700 text-lg leading-relaxed">
          At IPDC, we are committed to providing financial solutions tailored to individuals and businesses.
        </p>

        {/* First Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 text-left">
          {/* Text Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <p className="text-gray-700 leading-relaxed text-base">
              At <span className="font-semibold text-blue-700">Infrastructure Planning and Development Credit</span>, we are committed to empowering individuals and businesses by offering tailored financial solutions. Our core mission is to provide accessible, flexible, and reliable loans to support economic growth and improve the quality of life for our customers.
              <br />
              <br />
              With a strong focus on <span className="font-semibold text-blue-700">Microfinance</span>, <span className="font-semibold text-blue-700">Business Loans</span>, and <span className="font-semibold text-blue-700">Property Loans</span>, we aim to address the diverse needs of our clients—whether they are entrepreneurs starting a new venture, homeowners looking for financial support, or small businesses striving for growth.
            </p>

            <h3 className="mt-6 text-2xl font-bold text-blue-700">
              Your Goals, Our Support: Turning Aspirations Into Reality
            </h3>

            <p className="mt-4 text-gray-700 leading-relaxed text-base">
              Whether you're looking for a loan to grow your business, secure property financing, or access microfinance to fulfill personal goals, we are here to help you succeed.
              <br />
              <br />
              Join us on this journey of growth and opportunity, and let us help you turn your aspirations into reality.
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center">
            <img src={IconImage} alt="Smiling Indian Man" className="rounded-lg shadow-lg max-w-full" />
          </div>
        </div>

        {/* Second Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 bg-gray-50 py-12 px-6 rounded-lg">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center transition-transform duration-200 ease-in-out transform hover:scale-105">
            <img src={Mission} alt="Mission Icon" className="w-20 h-20 mb-4 rounded-full shadow-lg" />
            <h3 className="text-xl font-bold text-blue-700 mb-2">Our Mission</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              To foster financial inclusion and create opportunities for individuals and businesses by providing sustainable and innovative credit solutions.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center transition-transform duration-200 ease-in-out transform hover:scale-105">
            <img src={Vision} alt="Vision Icon" className="w-20 h-20 mb-4 rounded-full shadow-lg" />
            <h3 className="text-xl font-bold text-blue-700 mb-2">Our Vision</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              To be a trusted leader in the financial services industry, recognized for our commitment to customer success, ethical practices, and social impact.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center transition-transform duration-200 ease-in-out transform hover:scale-105">
            <img src={Values} alt="Values Icon" className="w-20 h-20 mb-4 rounded-full shadow-lg" />
            <h3 className="text-xl font-bold text-blue-700 mb-2">Our Values</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              <span className="font-semibold text-blue-700">Transparency:</span> We ensure clarity and honesty in all our dealings.
              <br />
              <span className="font-semibold text-blue-700">Customer-Centric Approach:</span> Our customers are at the heart of everything we do.
              <br />
              <span className="font-semibold text-blue-700">Integrity:</span> We uphold the highest ethical standards.
              <br />
              <span className="font-semibold text-blue-700">Innovation:</span> We continuously evolve to offer modern and efficient financial solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
