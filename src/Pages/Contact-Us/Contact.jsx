import React, { useRef, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_5w0y969',    //service ID
      'template_meaiok7',   //template ID
      formRef.current,
      'kvOwKjPDsFKEUJomg'     //public key
    )
    .then(() => {
      setStatus('SUCCESS');
      formRef.current.reset();
    })
    .catch(() => {
      setStatus('FAILED');
    });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Contact Us</h1>
        <p className="text-slate-600 text-lg">
          Have questions or need support? We’re here to help you succeed.
        </p>
        <p className="text-slate-600 text-md mt-2 mb-12">
          Our team generally responds within 24 hours. If you have an urgent query, please reach out to us via the contact methods below.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <form 
          ref={formRef} 
          onSubmit={handleSubmit} 
          className="bg-pink-50 p-8 rounded-2xl shadow-md space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
            <input
              type="text"
              name="from_name" // EmailJS variable
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input
              type="email"
              name="from_email" // EmailJS variable
              placeholder="you@example.com"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
            <textarea
              name="message" // EmailJS variable
              rows="4"
              placeholder="How can we help you?"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#ED2A4F] text-white py-2 rounded-2xl hover:bg-pink-700 transition duration-300"
          >
            Send Message
          </button>

          {status === "SUCCESS" && (
            <p className="text-green-600 text-center mt-3">
              Message sent successfully!
            </p>
          )}
          {status === "FAILED" && (
            <p className="text-red-600 text-center mt-3">
              Oops! Something went wrong. Please try again.
            </p>
          )}
        </form>

        <div className="space-y-6">
          <div className="flex items-start gap-4 bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <Mail className="w-6 h-6 text-pink-600 mt-1" />
            <div>
              <h3 className="font-semibold text-slate-800">Email Us</h3>
              <p className="text-sm text-slate-600">info@skillence.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <Phone className="w-6 h-6 text-pink-600 mt-1" />
            <div>
              <h3 className="font-semibold text-slate-800">Call Us</h3>
              <p className="text-sm text-slate-600">+91 7017941890</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition">
            <MapPin className="w-6 h-6 text-pink-600 mt-1" />
            <div>
              <h3 className="font-semibold text-slate-800">Location</h3>
              <p className="text-sm text-slate-600">Currently operating remotely</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
