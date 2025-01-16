import React from "react";
import microp1 from "../assets/microp1.jpg";
import microp2 from "../assets/microp2.png";

const Microfinance = () => {
  return (
    <>
      {/* pre info  */}
      <div className="container mx-auto px-4 py-12 mt-28">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-blue-700 text-center">
          Microfinance
        </h1>
        <div className="w-16 mb-8 text-center mx-auto border-b-4 border-orange-500 rounded"></div>

        {/* Introductory Paragraph */}
        <p className="text-lg text-gray-800 leading-relaxed mb-6 text-center">
          Microfinance is designed to provide financial services to individuals and
          small businesses who lack access to traditional banking services. We
          empower entrepreneurs by offering small loans, savings programs, and
          financial literacy training.
        </p>

        {/* Subheading: What is Microfinance? */}
        <h2 className="text-3xl font-bold text-blue-600 mb-4">
          What is Microfinance?
        </h2>
        <p className="text-base text-gray-700 leading-relaxed mb-6">
          Microfinance refers to the provision of financial services such as small
          loans (<span className="text-green-700 font-medium">microloans</span>),
          savings accounts, insurance, and training to individuals or groups who
          lack access to traditional banking systems. These services are primarily
          targeted at low-income individuals, small entrepreneurs, and marginalized
          communities, enabling them to improve their economic situations.
        </p>

        {/* Highlighted Paragraph */}
        <p className="text-lg text-gray-600 font-medium bg-gray-100 p-4 rounded-lg">
          Our Microfinance services help individuals start or grow their businesses,
          achieve financial independence, and improve their quality of life.
        </p>

        {/* Key Features List */}
        <h3 className="text-2xl font-bold text-orange-600 mt-8 mb-4">
          Why Choose Our Microfinance Services?
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <span className="text-blue-700 font-medium">Small, easy-to-access loans:</span>{" "}
            Tailored to meet your specific needs.
          </li>
          <li>
            <span className="text-blue-700 font-medium">Flexible repayment options:</span>{" "}
            Designed to suit your financial capacity.
          </li>
          <li>
            <span className="text-blue-700 font-medium">Dedicated support:</span>{" "}
            Helping you ensure your business success.
          </li>
        </ul>
      </div>

      {/* pre info end */}

      {/* features */}
      <section className="bg-gray-100 py-12 px-6">
        {/* Key Features Section */}
        <div className="container mx-auto md:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
            {/* Left-side Image */}
            <img
              src={microp1}
              alt="Microfinance"
              className="w-full md:h-96 lg:w-1/2 mb-6 lg:mb-0 rounded-md shadow-md"
            />

            {/* Right-side Text */}
            <ul className="lg:w-1/2 space-y-4 text-gray-700 text-lg">
              <li>
                <h2 className="text-3xl font-bold text-blue-700 mb-8">
                  Key Features of Microfinance:
                </h2>
              </li>
              <li>
                <span className="font-semibold text-blue-700">Microloans:</span> Small, short-term loans, often without the need for collateral.
              </li>
              <li>
                <span className="font-semibold text-green-600">Savings Services:</span> Encouraging savings among low-income groups to build financial resilience.
              </li>
              <li>
                <span className="font-semibold text-orange-600">Group Lending Models:</span> Loans are often provided to groups rather than individuals, fostering a sense of responsibility and peer support.
              </li>
              <li>
                <span className="font-semibold text-blue-700">Focus on Financial Inclusion:</span> Helping the unbanked population gain access to essential financial services.
              </li>
            </ul>
          </div>
        </div>

        {/* Purpose Section */}
        <div className="container mx-auto mt-12 md:px-8">

          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
            {/* Left-side Text */}
            <ul className="lg:w-1/2 space-y-4 text-gray-700 text-lg">
              <li>
                <h2 className="text-3xl font-bold text-blue-700 mb-8">
                  Purpose of Microfinance:
                </h2>
              </li>
              <li>
                <span className="font-semibold text-blue-700">Empowering Individuals and Communities:</span> By providing the necessary resources to start or expand small businesses, microfinance promotes self-sufficiency and entrepreneurship.
              </li>
              <li>
                <span className="font-semibold text-green-600">Reducing Poverty:</span> Microfinance helps individuals and families break the cycle of poverty by generating income and creating sustainable livelihoods.
              </li>
              <li>
                <span className="font-semibold text-orange-600">Promoting Gender Equality:</span> Many microfinance programs target women, empowering them economically and socially.
              </li>
              <li>
                <span className="font-semibold text-blue-700">Encouraging Financial Literacy:</span> Clients often receive training in budgeting, business management, and savings, fostering a culture of financial responsibility.
              </li>
            </ul>

            {/* Right-side Image */}
            <img
              src={microp2}
              alt="Purpose of Microfinance"
              className="w-full md:h-96 lg:w-1/2 mt-6 lg:mt-0 rounded-md shadow-md"
            />
          </div>
        </div>
      </section>
      {/* features end*/}

      {/* history */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="container mx-auto">
          {/* Title */}
          <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">
            History and Evolution of Microfinance
          </h1>

          {/* Origins of Microfinance */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-blue-600 mb-4">
              Origins of Microfinance
            </h2>
            <ul className="space-y-4 text-gray-700 leading-relaxed">
              <li>
                <span className="font-semibold text-blue-700">
                  Informal Lending:
                </span>{" "}
                The concept of lending small amounts to those in need dates back
                centuries, with informal systems of credit and community savings
                circles existing in many cultures.
              </li>
              <li>
                <span className="font-semibold text-green-600">
                  Jonathan Swift’s Irish Loan Fund:
                </span>{" "}
                One of the earliest recorded microfinance initiatives was in the
                18th century by Jonathan Swift’s Irish Loan Fund, which provided
                small loans to rural farmers and tradespeople.
              </li>
            </ul>
          </div>

          {/* Modern Microfinance Movement */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-blue-600 mb-4">
              The Modern Microfinance Movement
            </h2>
            <div className="space-y-8">
              {/* 1970s */}
              <div>
                <h3 className="text-2xl font-semibold text-orange-600 mb-2">
                  1970s – The Birth of Modern Microfinance
                </h3>
                <p>
                  The modern microfinance movement began in the 1970s with the
                  establishment of the{" "}
                  <span className="font-semibold text-blue-700">
                    Grameen Bank
                  </span>{" "}
                  in Bangladesh by Dr. Muhammad Yunus. The Grameen Bank provided
                  small, collateral-free loans to impoverished women, enabling
                  them to start small businesses. This approach gained global
                  recognition for its success in reducing poverty and empowering
                  women.
                </p>
              </div>
              {/* 1980s and 1990s */}
              <div>
                <h3 className="text-2xl font-semibold text-orange-600 mb-2">
                  1980s and 1990s – Expansion
                </h3>
                <p>
                  Microfinance institutions (MFIs) began to proliferate globally,
                  especially in developing countries across Asia, Africa, and
                  Latin America. Organizations like{" "}
                  <span className="font-semibold text-green-600">BRAC</span>{" "}
                  (Bangladesh),{" "}
                  <span className="font-semibold text-green-600">
                    FINCA International
                  </span>
                  , and{" "}
                  <span className="font-semibold text-green-600">ACCION</span>{" "}
                  played key roles in expanding microfinance services.
                </p>
              </div>
              {/* 2000s */}
              <div>
                <h3 className="text-2xl font-semibold text-orange-600 mb-2">
                  2000s – Global Recognition
                </h3>
                <p>
                  In 2006,{" "}
                  <span className="font-semibold text-blue-700">
                    Muhammad Yunus
                  </span>{" "}
                  and the Grameen Bank were awarded the Nobel Peace Prize,
                  highlighting the role of microfinance in poverty alleviation and
                  peacebuilding. Governments and international organizations like
                  the{" "}
                  <span className="font-semibold text-green-600">World Bank</span>{" "}
                  began to support microfinance as a tool for economic
                  development.
                </p>
              </div>
              {/* Digital Transformation */}
              <div>
                <h3 className="text-2xl font-semibold text-orange-600 mb-2">
                  Digital Transformation (2010s–Present)
                </h3>
                <p>
                  The rise of{" "}
                  <span className="font-semibold text-green-600">FinTech</span>{" "}
                  has revolutionized microfinance, with digital payment platforms
                  and mobile banking making financial services more accessible to
                  remote and underserved areas. Companies like{" "}
                  <span className="font-semibold text-blue-700">M-Pesa</span> in
                  Kenya have become models of how mobile technology can expand
                  financial inclusion. Today, microfinance continues to evolve,
                  leveraging technology and innovative models to make a lasting
                  impact on global poverty reduction efforts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* history end */}

    </>
  );
};

export default Microfinance;
