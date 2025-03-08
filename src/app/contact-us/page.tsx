import React from "react";

const ContactUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-6">
        Have any questions or feedback? Reach out to us via the details below.
      </p>

      <div className="bg-transparent border border-gray-300 rounded-lg p-6 border rounded-lg shadow-md text-left">
        <p className="text-lg font-semibold">Phone:</p>
        <p className="text-gray-700 mb-4">+91 82095 11129</p>

        <p className="text-lg font-semibold">Email:</p>
        <p className="text-gray-700 mb-4">yuvrajpoint@gmail.com</p>

        <p className="text-lg font-semibold">Address:</p>
        <p className="text-gray-700">Jodhpur, India - 340021</p>
      </div>
    </div>
  );
};

export default ContactUs;
