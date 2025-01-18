import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link } from "react-router-dom"; // Import Link
import BannerCarousel from '../components/BannerCarousel';
import PropertyloanImage from '../assets/propertyLoan.jpg';
import MicroFinanceImage from '../assets/microFinance.jpg';
import BusinessLoanImage from '../assets/businessLoan.jpg';
import IconImage from '../assets/smiling-indian-man.jpg';
import Mission from '../assets/mission.png';
import Vision from '../assets/vision.png';
import Values from '../assets/values.png';

const HomePage = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (ms)
      once: true, // Only animate on first scroll
    });
  }, []);

  return (
    <>
      <BannerCarousel />
      <div className="bg-gray-50 text-gray-800 overflow-x-hidden">
        {/* Hero Section */}
        <section className="bg-blue-950 text-white py-16" data-aos="fade-up">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Empowering Your Financial Future</h1>
            <p className="mt-4 text-lg">Providing Microfinance, Business Loans, and Property Loans to meet your needs.</p>
            {/* <div className="mt-8 flex justify-center space-x-4">
            <a href="/apply" className="bg-white text-blue-500 py-2 px-6 rounded-md font-semibold hover:bg-gray-100">
              Apply Now
            </a>
            <a href="/services" className="bg-blue-500 py-2 px-6 rounded-md font-semibold hover:bg-blue-400">
              Learn More
            </a>
          </div> */}
          </div>
        </section>

        {/* About Section */}
        <section className="bg-white py-16 px-8" data-aos="fade-up">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-gray-800 border-b-4 border-orange-600 inline-block pb-2">About Us</h2>
            <p className="mt-4 mb-12 text-gray-700 text-lg leading-relaxed">
              At IPDC, we are committed to providing financial solutions tailored to individuals and businesses.
            </p>

            {/* First Section */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 text-left">
              {/* Text Section */}
              <div className="lg:w-1/2 mb-8 lg:mb-0" data-aos="fade-right">
                <p className="text-gray-700 leading-relaxed text-base">
                  At <span className="font-semibold ">Infrastructure Planning and Development Credit</span>, we are committed to empowering individuals and businesses by offering tailored financial solutions. Our core mission is to provide accessible, flexible, and reliable loans to support economic growth and improve the quality of life for our customers.
                  <br />
                  <br />
                  With a strong focus on <span className="font-semibold ">Microfinance</span>, <span className="font-semibold ">Business Loans</span>, and <span className="font-semibold ">Property Loans</span>, we aim to address the diverse needs of our clients—whether they are entrepreneurs starting a new venture, homeowners looking for financial support, or small businesses striving for growth.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
  We believe in creating opportunities that drive <span className=" font-semibold">economic progress</span> and <span className=" font-semibold">financial independence</span>. By building strong relationships with our clients, we ensure their unique needs are met with <span className="text-green-600 font-semibold">care</span> and <span className="font-semibold">expertise</span>. Our commitment to <span className="font-semibold">innovation</span> and <span className="font-semibold">customer-centric solutions</span> sets us apart in the financial services industry. Together, we pave the way for a brighter and more <span className="font-semibold">prosperous future</span>.
</p>

                {/* call in action */}
                
              </div>

              {/* Image Section */}
              <div className="lg:w-1/2 flex justify-center" data-aos="fade-left">
                <img src={IconImage} alt="Smiling Indian Man" className="rounded-lg shadow-lg max-w-full" />
              </div>
            </div>

            {/* Second Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 bg-gray-50 py-12 px-6 rounded-lg">
              {/* Card 1 */}
              <div className="flex flex-col items-center text-center transition-transform duration-200 ease-in-out transform hover:scale-105" data-aos="fade-right">
                <img src={Mission} alt="Mission Icon" className="w-20 h-20 mb-4 rounded-full shadow-lg" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  To foster financial inclusion and create opportunities for individuals and businesses by providing sustainable and innovative credit solutions.
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center text-center transition-transform duration-200 ease-in-out transform hover:scale-105" data-aos="fade-down">
                <img src={Vision} alt="Vision Icon" className="w-20 h-20 mb-4 rounded-full shadow-lg" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Our Vision</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  To be a trusted leader in the financial services industry, recognized for our commitment to customer success, ethical practices, and social impact.
                </p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center text-center transition-transform duration-200 ease-in-out transform hover:scale-105" data-aos="fade-left">
                <img src={Values} alt="Values Icon" className="w-20 h-20 mb-4 rounded-full shadow-lg" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Our Values</h3>
                <p className="text-gray-600 text-base text-left leading-relaxed">
                  <span className="font-semibold ">Transparency:</span> We ensure clarity and honesty in all our dealings.
                  <br />
                  <span className="font-semibold ">Customer-Centric Approach:</span> Our customers are at the heart of everything we do.
                  <br />
                  <span className="font-semibold ">Integrity:</span> We uphold the highest ethical standards.
                  <br />
                  <span className="font-semibold ">Innovation:</span> We continuously evolve to offer modern and efficient financial solutions.
                </p>
              </div>
            </div>
          </div>

          
        </section>

        {/* call in action */}
        <div className='bg-gray-50 mt-8 px-16'>
          <ul className="grid grid-cols-1 gap-6 text-center">
            <li className="bg-white shadow-md rounded-lg p-6 border-l-4 border-orange-600">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Your Goals, Our Support: Turning Aspirations Into Reality
              </h3>
              <p className="text-gray-500 text-lg">Whether you're looking for a loan to grow your business, secure property financing, or access microfinance to fulfill personal goals, we are here to help you succeed.
              </p>
              <p className="text-gray-600"><span className='  border-b-2 border-orange-300'>Join us</span> on this journey of growth and opportunity, and let us help you turn your aspirations into reality.
              </p>
            </li>
          </ul>
        </div>

        {/* call in action */}

        {/* Services Section */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Our Services</h2>
            <p className="text-lg text-gray-600 mb-12">Explore our tailored financial solutions designed to meet your needs.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Microfinance */}
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-left">
                <div className="flex justify-center mb-6">
                  <img src={MicroFinanceImage} alt="Microfinance Loans" className="w-24 h-24 object-cover rounded-full" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Microfinance Loans</h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Microfinance provides small loans and financial services to low-income individuals, empowering them to start small businesses and improve their livelihoods.
                </p>
                <div className="mt-6">
                  <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Business Loans */}
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-up">
                <div className="flex justify-center mb-6">
                  <img src={BusinessLoanImage} alt="Business Loans" className="w-24 h-24 object-cover rounded-full" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Business Loans</h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Business loans provide financial support to entrepreneurs and businesses for starting, expanding, or managing operations effectively.
                </p>
                <div className="mt-6">
                  <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Property Loans */}
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-right">
                <div className="flex justify-center mb-6">
                  <img src={PropertyloanImage} alt="Property Loans" className="w-24 h-24 object-cover rounded-full" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Property Loans</h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Property loans help individuals or businesses purchase, construct, or renovate property with long repayment terms and structured EMIs.
                </p>
                <div className="mt-6">
                  <button className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Testimonials Section */}
        <section className="bg-blue-100 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">What Our Clients Say</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-md shadow-md">
                <p className="text-gray-600 italic">
                  "FinancePro helped me start my dream business with their microfinance loan!"
                </p>
                <p className="mt-4 font-semibold">- Sarah J.</p>
              </div>
              {/* Testimonial 2 */}
              <div className="bg-white p-6 rounded-md shadow-md">
                <p className="text-gray-600 italic">
                  "The business loan process was so easy, and now my company is growing rapidly."
                </p>
                <p className="mt-4 font-semibold">- Michael T.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="bg-blue-950 text-white py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
            <p className="mt-4 text-lg">Apply for a loan today and take the first step towards achieving your financial goals.</p>
            <div className="mt-8">
              <Link to="/services/microfinance" className="bg-white text-gray-800 py-2 px-6 rounded-md font-semibold hover:bg-gray-200">
                Apply Now
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
