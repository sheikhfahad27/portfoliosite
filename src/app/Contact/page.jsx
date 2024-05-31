"use client";
import React from "react";
import { useState } from "react";

const Contact = () => {
  const [contactdata, setContactdata] = useState({
    name: "",
    email: "",
    message: "",
  });

  const postapi = async (e) => {
    try {
      e.preventDefault();
      const api = await fetch("http://localhost:4000/emailpost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactdata),
      });
      const resp = await api.json();
      if (api.status >= 404) {
        return console.log(resp);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r mt-10 flex items-center justify-center p-6">
      <div className="bg-white p-10 rounded-lg shadow-2xl w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Contact Us
        </h1>
        <form onSubmit={postapi}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              onChange={(e) =>
                setContactdata({ ...contactdata, name: e.target.value })
              }
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) =>
                setContactdata({ ...contactdata, email: e.target.value })
              }
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
              onChange={(e) =>
                setContactdata({ ...contactdata, message: e.target.value })
              }
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
