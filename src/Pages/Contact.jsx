import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server or email)
    setIsSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 py-12 mt-28">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Have any questions or need assistance? Feel free to reach out to us. We’d love to hear from you!
      </p>

      {/* Contact Form */}
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded-md p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      ) : (
        <div className="text-center text-lg text-green-600 font-semibold">
          Thank you for contacting us! We’ll get back to you soon.
        </div>
      )}

      {/* Contact Info */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Contact Details</h2>
        <p className="text-gray-700">
          <strong>Email:</strong> email@email.com
        </p>
        <p className="text-gray-700">
          <strong>Phone:</strong> +91 99999 99999
        </p>
        <p className="text-gray-700">
          <strong>Address:</strong> 123 Business Road, Financial City, India
        </p>
      </div>
    </div>
  );
};

export default Contact;
