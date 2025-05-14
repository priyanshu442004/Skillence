import React from "react";
import { Laptop, Code, Layers, Brain } from "lucide-react";

const internships = [
  {
    title: "Frontend Internship",
    description: "Craft stunning UIs using HTML, CSS, JavaScript & React.",
    icon: <Laptop className="w-7 h-7 text-pink-600" />,
  },
  {
    title: "Backend Internship",
    description: "Build scalable APIs with Node.js, Express, and MongoDB.",
    icon: <Code className="w-7 h-7 text-pink-600" />,
  },
  {
    title: "Fullstack Internship",
    description: "Develop end-to-end solutions with the MERN stack.",
    icon: <Layers className="w-7 h-7 text-pink-600" />,
  },
  {
    title: "Core Java Internship",
    description: "Develop console based applications using Java.",
    icon: <Brain className="w-7 h-7 text-pink-600" />,
  },
];

const Internship = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-fuchsia-50 to-white px-6 py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800 mb-4">
          🚀 Kickstart Your Career
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 mb-12">
          Choose an internship that matches your passion and career goals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {internships.map((internship, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center bg-pink-100 w-12 h-12 rounded-full mb-4 mx-auto">
                {internship.icon}
              </div>
              <h2 className="text-xl font-bold text-slate-800 mb-2">
                {internship.title}
              </h2>
              <p className="text-sm text-slate-600 mb-6">
                {internship.description}
              </p>
              <button
               className="w-full py-2 px-4 bg-[#ED2A4F] text-white rounded-lg font-medium hover:bg-red-600 transition-all">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Internship;
