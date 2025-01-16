import React from "react";

const BusinessLoan = () => {
  return (
    <div className="container mx-auto px-4 py-12 mt-28">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Business Loan</h1>
      <p className="text-lg text-gray-700 leading-relaxed">
        Expand your business with our tailor-made Business Loan solutions. 
        We provide the financial resources you need to grow your operations, purchase inventory, or invest in infrastructure.
      </p>
      <p className="mt-4 text-gray-600">
        Our goal is to support entrepreneurs and businesses with funding options that are flexible, transparent, and accessible.
      </p>
      <ul className="mt-6 space-y-2 list-disc list-inside text-gray-700">
        <li>High loan amounts to meet your business demands.</li>
        <li>Flexible tenure options to suit your cash flow.</li>
        <li>Quick processing and minimal documentation.</li>
      </ul>
    </div>
  );
};

export default BusinessLoan;
