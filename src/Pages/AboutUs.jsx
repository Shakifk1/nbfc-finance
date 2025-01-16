import React from 'react';
import microtrend from '../assets/micro-trend.jpg'

const AboutUs = () => {
  return (
    <div className="mt-28 bg-gray-100 text-gray-800 min-h-screen">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <header className="text-center mb-12">
          {/* Main Heading */}
          <h1 className="text-5xl font-extrabold text-blue-700">
          Get To Know Us
          </h1>
          <div className="w-16 mb-8 mt-2 text-center mx-auto border-b-4 border-orange-500 rounded"></div>


          {/* Subheading */}
          <p className="mt-6 text-xl text-gray-600 font-medium">
            Building trust and empowering your financial journey.
          </p>

          {/* Mission Statement */}
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            <span className="text-blue-700 font-semibold">"Our mission</span> is to make financial opportunities accessible to everyone, empowering individuals and businesses to achieve their goals."
          </p>
        </header>

        {/* trend Micro Finance */}
        <section className="bg-gray-100 p-8">
          <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start">
            {/* Left side image */}
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0 flex justify-center lg:justify-start">
              <img
                src={microtrend}
                alt="micro-trend"
                className="rounded-lg shadow-lg max-w-full h-96"
              />
            </div>

            {/* Right side text */}
            <div className="lg:w-1/2 w-full lg:pl-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-800 mb-4">
                Trend MicroFinance
              </h2>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                Non-banking financial firms (NBFCs) saw a{' '}
                <span className="text-blue-800 font-semibold">
                  15% compound annual growth rate (CAGR)
                </span>{' '}
                in credit during the fiscal years 2016 and 2018, mostly as a result
                of their aggressive footprint development and the arrival of
                multiple new competitors throughout India.
              </p>
              <p className="text-lg leading-relaxed text-gray-600 mb-4">
                However, a liquidity crisis and the{' '}
                <span className="text-red-500 font-semibold">September 2018 IL&FS failure</span>{' '}
                presented challenges for non-banks. Growth was then slowed by
                further pressures brought on by the{' '}
                <span className="text-blue-800 font-semibold">Covid-19 outbreak</span> and
                budgetary issues.
              </p>
              <p className="text-lg leading-relaxed text-gray-500">
                Banks benefited from this environment and increased their market
                share in a few important industries by using their excess liquidity.
                In fiscal 2021, the epidemic caused an abrupt halt to economic
                activity and reduced demand for borrowing.
              </p>
            </div>
          </div>
        </section>

        {/* nbfc insight */}
        <section className="bg-gray-50 p-8">
          <div className="container mx-auto space-y-6">
            {/* Paragraph 1 - Primary text color (50% emphasis) */}
            <p className="text-lg leading-relaxed text-blue-800 font-semibold">
              Following the second wave of the pandemic, lockdowns were loosened, and the economy started to recover in fiscal 2022. This resulted in the restoration of company operations, which in turn drove credit growth across the board.
            </p>

            {/* Paragraph 2 - Secondary text color (30% emphasis) */}
            <p className="text-lg leading-relaxed text-gray-700">
              With growth of <span className="text-blue-800 font-semibold">16.2%</span> in the most recent fiscal year, NBFCs were back on pace after the pandemic dampened lending growth. As a result, the total amount of credit that NBFCs (including HFCs, PFC, and REC but not HDFC) owed was Rs <span className="text-blue-800 font-semibold">34.8 trillion</span>. In the medium run, <span className="text-red-500 font-semibold">CRISIL MI&A Research</span> projects credit growth of <span className="text-blue-800">14–16%</span>. Micro, small, and medium enterprise (MSME) loans in the wholesale segment and retail home loans, personal loans, vehicle loans, and microfinance in the retail segment are the main growth drivers. Since NBFCs are growing their lending faster than banks, their market share is predicted to rise by about 200 basis points to <span className="text-blue-800">25%</span> by fiscal 2026.
            </p>

            {/* Paragraph 3 - Secondary text color (30% emphasis) */}
            <p className="text-lg leading-relaxed text-gray-700">
              With an emphasis on expanding the retail portfolio, NBFCs are anticipated to continue to outpace the growth of banking credit. Microfinance, retail home, auto, and gold loans are important retail areas that contribute to the entire NBFCs with double-digit credit growth between fiscal 2024 and 2026.
            </p>

            {/* Paragraph 4 - Primary and secondary colors combined */}
            <p className="text-lg leading-relaxed text-blue-800 font-medium">
              Non-banking financial firms (NBFCs) in India saw a <span className="text-red-500 font-semibold">15% compound annual growth rate (CAGR)</span> in credit growth between 2016 and 2018, primarily as a result of expansion and new competitors. However, the Covid-19 epidemic, liquidity crisis, and the <span className="text-red-500 font-semibold">2018 IL&FS default</span> had an effect on growth. Banks used excess liquidity to increase their market share in important industries. The epidemic decreased credit demand and stopped economic activity in fiscal 2021. The restoration of business operations in fiscal 2022 resulted in an increase in credit across the majority of segments. With a <span className="text-blue-800 font-semibold">16.2% increase</span> in fiscal 2022, NBFCs resumed their growth trajectory, reaching around Rs 34.8 trillion.
            </p>

            {/* Paragraph 5 - Tertiary color (10% emphasis) */}
            <p className="text-lg leading-relaxed text-gray-500">
              The government has relaxed controls on foreign trade and investment. Higher limits on foreign direct investment were permitted in a few key sectors, such as telecommunications. However, tariff spikes in sensitive categories, like agriculture, and incremental progress on economic reforms still hinder foreign access to India’s vast and growing market.
            </p>
          </div>
        </section>



        {/* Company History */}
        <section className="mb-12 p-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-700 mb-4">
            Our History
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Founded in <span className="text-blue-800 font-semibold">2010</span >, our organization began with a vision to bridge
            the gap between financial institutions and underserved communities. Over the
            years, we have helped <span className="text-blue-800 font-semibold">thousands of clients</span> secure loans and realize their dreams.
            With a <span className="text-red-500 font-semibold">customer-first approach</span>, we are proud to be a trusted financial partner.
          </p>
        </section>

        {/* Team Introductions */}
        <section className="mb-12">
          {/* Section Title */}
          <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
            Meet Our Team
          </h2>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 1"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 2"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Smith</h3>
              <p className="text-gray-600">Head of Operations</p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 3"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Emily Johnson</h3>
              <p className="text-gray-600">Financial Advisor</p>
            </div>
          </div>
        </section>

        {/* Why Trust Us */}
        <section className="mt-12">
          {/* Section Heading */}
          <h2 className="text-3xl font-bold text-blue-600 mb-6">
            Why Trust Us
          </h2>

          {/* List of Reasons */}
          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="flex items-start">
              <span className="text-blue-500 font-semibold mr-2">•</span>
              <span>Certified and licensed financial institution.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 font-semibold mr-2">•</span>
              <span>Over 10 years of experience in the financial sector.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 font-semibold mr-2">•</span>
              <span>Thousands of satisfied clients and successful projects funded.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 font-semibold mr-2">•</span>
              <span>Transparent and customer-centric approach.</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
