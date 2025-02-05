import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import propert from "../assets/property.jpg";

const PropertyLoan = () => {

      useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration (ms)
          once: true, // Only animate on first scroll
        });
      }, []);

  return (
    <div className="bg-gray-50">

      <div className="max-w-4xl mx-auto px-6 py-16 mt-24 bg-white shadow-lg rounded-lg">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-gray-800 border-b-4 border-orange-600 inline-block pb-2" data-aos="fade-down">
          Turn Your Dream Property Into Reality
        </h1>

        {/* Description */}
        <div className="textAndImage" data-aos="fade-up">
          <p className="text-lg text-gray-800 mt-6 leading-relaxed">
            Our <span className=" font-semibold">Property Loan</span> services provide you with the financial assistance needed to
            <span className="font-semibold"> purchase</span>,
            <span className="font-semibold"> renovate</span>, or
            <span className="font-semibold"> build</span> the property of your dreams. With competitive interest rates and flexible repayment plans, we make property ownership achievable.
          </p>
          <img src={propert} alt="property" className="w-full rounded-lg shadow-md" data-aos="fade-up" />
        </div>
        <p className="mt-4 text-gray-700 leading-relaxed" data-aos="fade-right">
          Whether you’re looking to invest in
          <span className=" font-semibold"> residential</span> or
          <span className=" font-semibold"> commercial</span> property, our team is here to support your financial journey.
        </p>

        {/* Features */}
        <ul className="mt-8 space-y-3 list-disc pl-5 text-gray-700">
          <li data-aos="fade-right">
            <span className="font-medium ">Loan amounts</span> tailored to your property's value and needs.
          </li>
          <li data-aos="fade-right">
            <span className="font-medium ">Low-interest rates</span> for easy repayment.
          </li>
          <li data-aos="fade-right">
            <span className="font-medium ">Hassle-free documentation</span> and approval process.
          </li>
        </ul>
      </div>

      {/* some data comes here */}
      <div className="bg-gray-50 text-gray-800 min-h-screen py-10 px-5">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-950 border-b-4 border-orange-600 pb-2" data-aos="fade-down">
            <span className="text-gray-700">What is a</span> Property Loan?
          </h1>
          <p className="text-lg leading-relaxed text-gray-700" data-aos="fade-up">
            A <span className=" font-medium">property loan</span> is a type of
            <span className=" font-medium"> secured loan</span> in which an individual borrows money by pledging their property
            (<span className=" font-medium">residential</span>,
            <span className=" font-medium"> commercial</span>, or
            <span className=" font-medium"> industrial</span>) as collateral. The property serves as security for the lender until the loan is fully repaid.
            Property loans are commonly used to finance the
            <span className=" font-medium"> purchase</span>,
            <span className=" font-medium"> renovation</span>,
            <span className=" font-medium"> construction</span>, or improvement of a property.
          </p>

          {/* Types of Property Loans */}
          <h2 className="text-2xl font-semibold text-gray-800" data-aos="fade-down">Types of Property Loans</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <li className="bg-white shadow-md rounded-lg p-6 border-l-4 border-orange-600" data-aos="fade-right">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
            Loan Against Property (LAP)
            </h3>
            <p className="text-gray-600">This type of loan allows individuals to borrow money by mortgaging an existing property they own. It can be used for purposes like business expansion, medical expenses, education, or personal needs.
            </p>
          </li>
          <li className="bg-white shadow-md rounded-lg p-6 border-l-4 border-orange-600" data-aos="fade-left">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
            Home Purchase Loan
            </h3>
            <p className="text-gray-600">
            Used specifically for buying a new or resale residential property.
            </p>
          </li>
          <li className="bg-white shadow-md rounded-lg p-6 border-l-4 border-orange-600" data-aos="fade-right">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
            Home Construction Loan
            </h3>
            <p className="text-gray-600">
              Designed for constructing a house on a plot of land owned by the borrower.
            </p>
          </li>
          <li className="bg-white shadow-md rounded-lg p-6 border-l-4 border-orange-600" data-aos="fade-left">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
            Land Purchase Loan
            </h3>
            <p className="text-gray-600">
            Used for purchasing a piece of land for residential or commercial purposes.
            </p>
          </li>
          <li className="bg-white shadow-md rounded-lg p-6 border-l-4 border-orange-600" data-aos="fade-right">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
            Home Renovation or Improvement Loan
            </h3>
            <p className="text-gray-600">
            Taken to fund renovations, repairs, or upgrades to an existing property.
            </p>
          </li>
          <li className="bg-white shadow-md rounded-lg p-6 border-l-4 border-orange-600" data-aos="fade-left">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
            Balance Transfer Loan
            </h3>
            <p className="text-gray-600">
            Enables borrowers to transfer their existing property loan to another lender offering better interest rates or terms.
            </p>
          </li>
        </ul>
          {/* Types of property loans end */}





          {/* Difference Between Property Loans and Home Loans */}
          <h2 className="text-2xl font-semibold text-gray-800" data-aos="fade-down">
            Difference Between Property Loans and Home Loans
          </h2>
          <table className="table-auto w-full border-collapse border border-gray-300 text-left text-sm text-gray-700" data-aos="fade-up">
            <thead className="bg-blue-100 font-semibold">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Aspect</th>
                <th className="border border-gray-300 px-4 py-2">Property Loan</th>
                <th className="border border-gray-300 px-4 py-2">Home Loan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Purpose</td>
                <td className="border border-gray-300 px-4 py-2">
                  Can be used for any <span className="">personal or business</span> purpose (with no restriction).
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Restricted to the <span className="">purchase or construction</span> of a home.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Collateral</td>
                <td className="border border-gray-300 px-4 py-2">
                  Requires mortgaging an existing property.
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  The home being purchased or constructed serves as collateral.
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Interest Rates</td>
                <td className="border border-gray-300 px-4 py-2">
                  Slightly higher compared to home loans.
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  Generally lower as it is tied to specific property use.
                </td>
              </tr>
            </tbody>
          </table>

          {/* Use Cases */}
          <h2 className="text-2xl font-semibold text-gray-800" data-aos="fade-down">Use Cases for Property Loans</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-3" data-aos="fade-up">
            <li>To acquire residential or commercial properties.</li>
            <li>Funding home or office renovations like repairs, upgrades, or remodeling.</li>
            <li>Building a home or commercial structure on a plot of land.</li>
            <li>Addressing personal needs like education, weddings, or medical emergencies.</li>
            <li>Consolidating high-interest debts into a single, lower-interest payment.</li>
          </ul>
        </div>
      </div>

      {/* some data comes here end */}


    </div>
  );
};

export default PropertyLoan;
