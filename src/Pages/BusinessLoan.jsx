import React from "react";
import business1 from "../assets/business1.jpg";
import business2 from "../assets/business2.jpg";
import business3 from "../assets/business3.jpg";
import business4 from "../assets/business4.jpg";

const BusinessLoan = () => {
  return (
    <>


      {/* something */}
      <section className="bg-gray-50 text-gray-700 px-6 py-12 mt-28">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4 border-b-4 border-orange-600 pb-2">
            Empower Your Business Growth with Flexible Loan Solutions
          </h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            Expand your business with our tailor-made Business Loan solutions. We provide the financial resources you need to grow your operations, purchase inventory, or invest in infrastructure.
          </p>
          <p className="text-lg font-semibold  mt-4">
            Tailored Business Loans to Fuel Your Ambitions
          </p>
          <p className="mt-2 text-gray-700">
            Low interest rates | Quick approvals | Flexible repayment options
          </p>
          {/* Highlighted Paragraph */}
          <p className="text-lg text-gray-600 font-medium bg-gray-100 p-4 rounded-lg text-center mt-6">
            Our goal is to support entrepreneurs and businesses with funding options that are flexible, transparent, and accessible.
          </p>

        </div>
        {/* What is a Business Loan */}
        <div className="mt-12 max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">What is a Business Loan?</h3>
          <p className="leading-relaxed">
            A <span className="font-semibold">business loan</span> is a financial product designed to help entrepreneurs and businesses fund their operations, expansion, or other needs. These loans can be tailored for startups, small businesses, or large enterprises.
          </p>
        </div>
        <div>
        </div>

        {/* Types of Business Loans */}
        <div className="mt-12 max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Types of Business Loans</h3>
          <ul className="space-y-3">
            <li>
              <span className="font-semibold">Term Loans:</span> Long-term and short-term financing for major business expenses.
            </li>
            <li>
              <span className="font-semibold">Working Capital Loans:</span> For day-to-day operational expenses like payroll, rent, or utilities.
            </li>
            <li>
              <span className="font-semibold">Equipment Financing:</span> Loans to purchase or lease machinery and equipment.
            </li>
            <li>
              <span className="font-semibold">Invoice Financing:</span> Get advances against unpaid invoices to maintain cash flow.
            </li>
            <li>
              <span className="font-semibold">Startup Loans:</span> Specifically designed for new entrepreneurs starting their businesses.
            </li>
            <li>
              <span className="font-semibold">Business Expansion Loans:</span> Funding to scale operations, open new branches, or invest in marketing.
            </li>
          </ul>
        </div>

        <section className="bg-gray-50 px-6 pt-12 text-gray-700">
          {/* Benefits of Business Loans */}
          <div className="mt-12 flex flex-col md:flex-row items-center gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-5/12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Benefits of a Business Loan</h3>
              <ul className="space-y-3">
                <li>Flexible repayment options tailored to cash flow.</li>
                <li>Competitive interest rates.</li>
                <li>Quick and easy approval process.</li>
                <li>Funding for a variety of business needs.</li>
                <li>Collateral-free loan options (if applicable).</li>
              </ul>
            </div>
            <img
              src={business1}
              alt="Benefits of Business Loan"
              className="w-full md:w-5/12 h-64 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Eligibility Criteria */}
          <div className="mt-12 flex flex-col md:flex-row-reverse items-center gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-5/12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Eligibility Criteria</h3>
              <ul className="space-y-3">
                <li>Minimum business turnover.</li>
                <li>Years of business operation.</li>
                <li>Credit score requirements.</li>
                <li>Documents needed (business financials, KYC, bank statements, etc.).</li>
              </ul>
            </div>
            <img
              src={business2}
              alt="Eligibility Criteria"
              className="w-full md:w-5/12 h-64 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Loan Process */}
          <div className="mt-12 flex flex-col md:flex-row items-center gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-5/12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Loan Process</h3>
              <ul className="space-y-3">
                <li>Apply Online: Submit your application and documents.</li>
                <li>Get Pre-Approved: Receive initial approval within a day.</li>
                <li>Loan Evaluation: Financial assessment by our team.</li>
                <li>Approval & Disbursement: Funds transferred to your account.</li>
              </ul>
            </div>
            <img
              src={business3}
              alt="Loan Process"
              className="w-full md:w-5/12 h-64 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Common Use Cases */}
          <div className="mt-12 flex flex-col md:flex-row-reverse items-center gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-5/12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Common Use Cases</h3>
              <ul className="space-y-3">
                <li>Purchasing raw materials or inventory.</li>
                <li>Hiring new staff or training employees.</li>
                <li>Investing in technology or equipment.</li>
                <li>Expanding to new locations.</li>
                <li>Launching marketing campaigns.</li>
              </ul>
            </div>
            <img
              src={business4}
              alt="Common Use Cases"
              className="w-full md:w-5/12 h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </section>
      </section>

      {/* why choose us */}
      <div className="container mx-auto px-6 py-8 mt-8 bg-gray-50 rounded-lg shadow-lg">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
          Why Choose Us?
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-800 text-center mb-8 leading-relaxed">
          Discover the advantages of partnering with us for your business loan needs. Here's why we're the right choice for your financial growth:
        </p>

        {/* Features List */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <li className="bg-white shadow-md rounded-lg p-6 border-l-4 border-orange-600">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Competitive Rates and Terms
            </h3>
            <p className="text-gray-700">
              Enjoy industry-leading interest rates and flexible repayment options tailored to your business.
            </p>
          </li>
          <li className="bg-white shadow-md rounded-lg p-6 border-l-4 border-orange-600">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Quick and Hassle-Free Process
            </h3>
            <p className="text-gray-700">
              Get your loan approved quickly with minimal paperwork and simple procedures.
            </p>
          </li>
          <li className="bg-white shadow-md rounded-lg p-6 border-l-4 border-orange-600">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Transparent Policies
            </h3>
            <p className="text-gray-700">
              No hidden charges or fine print—experience full transparency in all our offerings.
            </p>
          </li>
          <li className="bg-white shadow-md rounded-lg p-6 border-l-4 border-orange-600">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Tailored Loan Solutions
            </h3>
            <p className="text-gray-700">
              Solutions customized to meet diverse business needs and help you achieve your goals.
            </p>
          </li>
        </ul>
      </div>
      {/* why choose us end*/}


    </>
  );
};

export default BusinessLoan;
