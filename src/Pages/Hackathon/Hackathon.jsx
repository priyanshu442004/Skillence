import React from "react";
import { Users, Target, Clock } from "lucide-react";

const Hackathon = () => {
  const whatsappLink = "https://wa.me/your_group_invite_link"; // Replace with your actual group link

  return (
    <div className="min-h-screen bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Skillence Hackathon
        </h1>
        <p className="text-slate-600 text-lg mb-10">
          Join our hackathon and compete with fellow students to build amazing tech solutions. Form your team, brainstorm, build, and win!
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-12 text-left">
          <div className="flex items-start gap-4 bg-pink-50 p-6 rounded-xl shadow-sm">
            <Target className="text-pink-600 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-slate-800">Your Mission</h3>
              <p className="text-sm text-slate-600">Solve real-world problems with your team using any tech stack.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-pink-50 p-6 rounded-xl shadow-sm">
            <Users className="text-pink-600 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-slate-800">Build Your Team</h3>
              <p className="text-sm text-slate-600">Join the WhatsApp group to find teammates or come with your own.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-pink-50 p-6 rounded-xl shadow-sm">
            <Clock className="text-pink-600 w-6 h-6 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-slate-800">Time Bound</h3>
              <p className="text-sm text-slate-600">Complete your project within the given deadline and submit for review.</p>
            </div>
          </div>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white px-8 py-3 text-lg font-medium shadow-md  transition navbar-action1 thq-button-animated thq-button-filled thq-body-small"
        >
          Lets compete!
        </a>
        <p className="text-slate-600 text-sm mt-4">
          After clicking the button, you will be redirected to our WhatsApp group. Please join the group to stay updated on the hackathon details and connect with other participants.
        </p>
      </div>
      <div className="border-t pt-6 mt-12 text-sm text-center text-slate-500">
        If you have any questions, please contact us at{" "}
        <span className="text-pink-600 font-medium">
          skillence.team@gmail.com
        </span>
        </div>
    </div>
  );
};

export default Hackathon;
