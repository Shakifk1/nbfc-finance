import React from "react";

const PropertyLoan = () => {
  return (
    <>
    
    <div className="container mx-auto px-4 py-12 mt-28">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Property Loan</h1>
      <p className="text-lg text-gray-700 leading-relaxed">
        Our Property Loan services provide you with the financial assistance needed to purchase, renovate, or build the property of your dreams.
        With competitive interest rates and flexible repayment plans, we make property ownership achievable.
      </p>
      <p className="mt-4 text-gray-600">
        Whether you’re looking to invest in residential or commercial property, our team is here to support your financial journey.
      </p>
      <ul className="mt-6 space-y-2 list-disc list-inside text-gray-700">
        <li>Loan amounts tailored to your property's value and needs.</li>
        <li>Low-interest rates for easy repayment.</li>
        <li>Hassle-free documentation and approval process.</li>
      </ul>
    </div>



{/* some data comes here */}
    <div className="bg-gray-50 text-gray-800 min-h-screen py-10 px-5">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Title */}
        <h1 className="text-3xl font-bold text-blue-700 border-b-4 border-blue-500 pb-2">
          <span className="text-gray-700">What is a</span> Property Loan?
        </h1>
        <p className="text-lg leading-relaxed text-gray-700">
          A <span className="text-blue-600 font-medium">property loan</span> is a type of 
          <span className="text-blue-500 font-medium"> secured loan</span> in which an individual borrows money by pledging their property 
          (<span className="text-green-600 font-medium">residential</span>, 
          <span className="text-green-600 font-medium"> commercial</span>, or 
          <span className="text-green-600 font-medium"> industrial</span>) as collateral. The property serves as security for the lender until the loan is fully repaid. 
          Property loans are commonly used to finance the 
          <span className="text-blue-600 font-medium"> purchase</span>, 
          <span className="text-blue-600 font-medium"> renovation</span>, 
          <span className="text-blue-600 font-medium"> construction</span>, or improvement of a property.
        </p>

        {/* Types of Property Loans */}
        <h2 className="text-2xl font-semibold text-blue-700">Types of Property Loans</h2>
        <ul className="space-y-3">
          <li>
            <h3 className="text-xl font-semibold text-gray-800">Loan Against Property (LAP)</h3>
            <p className="text-gray-700">
              This type of loan allows individuals to borrow money by mortgaging an existing property they own. It can be used for purposes like 
              <span className="text-blue-600"> business expansion</span>, 
              <span className="text-blue-600"> medical expenses</span>, 
              <span className="text-blue-600"> education</span>, or personal needs.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-gray-800">Home Purchase Loan</h3>
            <p className="text-gray-700">
              Used specifically for buying a new or resale residential property.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-gray-800">Home Construction Loan</h3>
            <p className="text-gray-700">
              Designed for constructing a house on a plot of land owned by the borrower.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-gray-800">Land Purchase Loan</h3>
            <p className="text-gray-700">
              Used for purchasing a piece of land for residential or commercial purposes.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-gray-800">
              Home Renovation or Improvement Loan
            </h3>
            <p className="text-gray-700">
              Taken to fund renovations, repairs, or upgrades to an existing property.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold text-gray-800">Balance Transfer Loan</h3>
            <p className="text-gray-700">
              Enables borrowers to transfer their existing property loan to another lender offering better interest rates or terms.
            </p>
          </li>
        </ul>

        {/* Difference Between Property Loans and Home Loans */}
        <h2 className="text-2xl font-semibold text-blue-700">
          Difference Between Property Loans and Home Loans
        </h2>
        <table className="table-auto w-full border-collapse border border-gray-300 text-left text-sm text-gray-700">
          <thead className="bg-blue-100 text-blue-800 font-semibold">
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
                Can be used for any <span className="text-blue-600">personal or business</span> purpose (with no restriction).
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Restricted to the <span className="text-blue-600">purchase or construction</span> of a home.
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
        <h2 className="text-2xl font-semibold text-blue-700">Use Cases for Property Loans</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-3">
          <li>To acquire residential or commercial properties.</li>
          <li>Funding home or office renovations like repairs, upgrades, or remodeling.</li>
          <li>Building a home or commercial structure on a plot of land.</li>
          <li>Addressing personal needs like education, weddings, or medical emergencies.</li>
          <li>Consolidating high-interest debts into a single, lower-interest payment.</li>
        </ul>
      </div>
    </div>

{/* some data comes here end */}


    </>
  );
};

export default PropertyLoan;
