import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const DemoTest = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (ms)
      mirror: true,   // Enable animations on scroll up
      once: false,    // Allow animations to reset and replay
    });

    // Reinitialize AOS on scroll
    const resetAOSOnScroll = () => {
      document.querySelectorAll('[data-aos]').forEach((el) => {
        el.classList.remove('aos-animate');
      });
    };

    window.addEventListener('scroll', resetAOSOnScroll);
    
    return () => {
      window.removeEventListener('scroll', resetAOSOnScroll);
    };
  }, []);

  return (
    <div className="bg-gray-100">
      {/* Section 1 */}
      <div className="parallax bg-blue-500 text-white py-20">
        <div className="container mx-auto px-4" data-aos="fade-up" data-aos-offset="200">
          <h2 className="text-4xl font-bold text-center">Section 1</h2>
          <p className="mt-4 text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20 bg-gray-200">
        <div className="container mx-auto px-4" data-aos="fade-up" data-aos-offset="200">
          <h2 className="text-3xl font-bold text-center">Regular Section</h2>
          <p className="mt-4 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>

      {/* Parallax Section 2 */}
      <div className="parallax bg-green-500 text-white py-20">
        <div className="container mx-auto px-4" data-aos="fade-right" data-aos-offset="200">
          <h2 className="text-4xl font-bold text-center">Section 2</h2>
          <p className="mt-4 text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20 bg-gray-200">
        <div className="container mx-auto px-4" data-aos="fade-left" data-aos-offset="200">
          <h2 className="text-3xl font-bold text-center">Regular Section</h2>
          <p className="mt-4 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DemoTest;
