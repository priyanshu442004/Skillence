// src/components/ui/button.jsx

import React from "react";

export const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-4 py-2 bg-[#ED2A4F] text-white rounded-lg hover:bg-[#c52041] transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
