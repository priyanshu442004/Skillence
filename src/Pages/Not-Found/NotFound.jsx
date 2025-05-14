import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center px-6 text-center">
      <div className="flex flex-col items-center">
        <AlertTriangle className="w-16 h-16 text-pink-600 mb-4" />
        <h1 className="text-5xl font-bold text-slate-800 mb-2">404</h1>
        <p className="text-xl text-slate-600 mb-6">Oops! Page not found</p>
        <p className="text-slate-500 max-w-md mb-8">
          The page you are looking for doesn’t exist or may have been moved. Please check the URL or return to the homepage.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-pink-600 text-white rounded-xl text-sm font-medium hover:bg-pink-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
