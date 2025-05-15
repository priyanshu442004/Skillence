import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [form, setForm] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        'service_5w0y969', //  service ID
        'template_meaiok7', //  template ID
        form,
        'kvOwKjPDsFKEUJomg'   //  public key
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setForm({ from_name: '', from_email: '', message: '' });
      })
      .catch(() => {
        setStatus("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          value={form.from_name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          value={form.from_email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition"
        >
          Send Message
        </button>
        {status && <p className="text-center text-sm mt-4 text-slate-600">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
