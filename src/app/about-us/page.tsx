import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-gray-600 mb-6">
        We are a dedicated crowdfunding platform committed to connecting
        generous donors with meaningful causes. Our platform empowers
        individuals, nonprofits, and organizations to raise funds for urgent
        medical needs, education, disaster relief, and various humanitarian
        efforts. With a seamless and transparent donation process, we strive to
        make fundraising accessible to everyone, ensuring that those in need
        receive timely support.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="text-gray-700">
          Our mission is to create a world where financial limitations never
          stand in the way of help and hope. We aim to bridge the gap between
          those who want to give and those who need support by providing a
          trusted, secure, and user-friendly crowdfunding platform. Through
          collective generosity, we aspire to bring positive change, uplift
          communities, and make a lasting impact on lives across the globe.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="text-lg font-medium">Yuvraj</h3>
            <p className="text-gray-500">Leader</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="text-lg font-medium">Lokesh</h3>
            <p className="text-gray-500">Members</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="text-lg font-medium">Prachi</h3>
            <p className="text-gray-500">Member</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="text-lg font-medium">Vivaan</h3>
            <p className="text-gray-500">Member</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="text-lg font-medium">Tanishq</h3>
            <p className="text-gray-500">Member</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md">
            <h3 className="text-lg font-medium">Khushwant</h3>
            <p className="text-gray-500">Member</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
