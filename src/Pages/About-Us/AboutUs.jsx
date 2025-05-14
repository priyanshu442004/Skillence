import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white text-slate-800 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Empowering Freshers to Excel in IT</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We’re a passionate startup on a mission to bridge the gap between learning and real-world experience 😎 
            helping aspiring IT professionals become top performers.
          </p>
        </div>

        {/* Founders Background */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-slate-100 p-6 rounded-xl hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">Built by Experts</h2>
            <p className="text-slate-600">
              Our team includes seasoned Full Stack Java Developers, MERN developers, experienced in Cloud Computing and scalable systems. 
              The technical foundation is built to meet modern industry demands and give students real exposure.
            </p>
          </div>
          <div className="bg-slate-100 p-6 rounded-xl hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">Backed by Business Acumen</h2>
            <p className="text-slate-600">
              With a strong financial and strategic backbone, our platform benefits from professional financial planning 
              and a clear growth model that ensures sustainability and expansion.
            </p>
          </div>
        </div>

        {/* Our Offerings */}
        <div className="bg-pink-50 p-10 rounded-2xl">
          <h2 className="text-3xl font-bold text-center mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Real Internships",
                desc: "Work on actual client projects to gain meaningful experience.",
              },
              {
                title: "Hackathons",
                desc: "Compete, collaborate, and win while sharpening your tech skills.",
              },
              {
                title: "Mock Interviews",
                desc: "Prepare through one-on-one sessions that simulate real interviews.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white border p-6 rounded-xl hover:shadow-md transition">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Vision Timeline */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Where We're Headed</h2>
          <div className="space-y-6">
            {[
              "Expand into more domains like DevOps, QA, and Data Science.",
              "Introduce paid internship models with partner companies.",
              "Launch a certificate-based learning system integrated with projects.",
              "Host national-level hackathons and coding events.",
              "Develop a job placement assistance system.",
            ].map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-4 hover:bg-slate-100 p-4 rounded-lg transition"
              >
                <span className="text-pink-600 font-bold">{i + 1 < 10 ? `0${i + 1}` : i + 1}.</span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-4">
            Join us in shaping the next generation of IT professionals.
          </h3>
          <button
          onClick={() => navigate("/internship")}
          className="thq-button-animated thq-button-filled thq-body-small hover:bg-pink-700 text-white px-6 py-3 rounded-xl font-semibold transition">
            Explore Opportunities
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
