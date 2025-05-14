import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RequestCallbackModal = ({ isOpen, onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40 px-4"
        >
          <motion.div
            ref={modalRef}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative border border-pink-100"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-2">
              Request a Callback
            </h2>
            <p className="text-center text-slate-500 text-sm mb-6">
              Let us know your details — we’ll get back to you shortly!
            </p>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Mobile Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  pattern="[0-9]{10}"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
                  placeholder="10-digit mobile number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Your Query (Optional)
                </label>
                <textarea
                  rows="3"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
                  placeholder="Ask us anything!"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2.5 rounded-lg transition shadow-sm"
              >
                Submit Request
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RequestCallbackModal;
