import React from "react";

const PrivacyPolicy = () => {
  const points = [
    {
      title: "Information We Collect",
      description:
        "We may collect personal details such as your name, email, and phone number when you sign up or interact with our services. Technical information such as browser type, IP address, and device data may also be collected automatically.",
    },
    {
      title: "How We Use Your Information",
      description:
        "Your data is used to provide services like internships, interviews, and hackathon participation. It also helps us improve the platform and communicate updates, offers, or opportunities.",
    },
    {
      title: "Data Sharing",
      description:
        "We do not sell your data. Your information may be shared only with trusted partners for the sole purpose of delivering our services (e.g., project mentors or evaluators), under strict confidentiality agreements.",
    },
    {
      title: "Data Security",
      description:
        "We take security seriously. Industry-standard practices like encryption, secure hosting, and access control are followed to protect your data.",
    },
    {
      title: "Your Rights",
      description:
        "You have the right to access, update, or request deletion of your personal information at any time by contacting us.",
    },
    {
      title: "Changes to This Policy",
      description:
        "This policy may be updated occasionally. Major changes will be communicated via email or notification on the platform.",
    },
  ];
  return (
    <div className="min-h-screen bg-white px-6 py-16 text-slate-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-4">
          Privacy Policy
        </h1>
        <p className="text-center text-slate-600 text-lg mb-12">
          Your privacy matters to us. This policy explains how we collect, use, and protect your information.
        </p>

        {points.map((point, index) => (
          <section className="mb-10" key={index}>
            <h2 className="text-2xl font-semibold mb-2">{index + 1}{'. '}{point.title}</h2>
            <p className="text-slate-600 leading-relaxed">
              {point.description}
            </p>
          </section>
        ))}

     

        <div className="border-t pt-6 mt-12 text-sm text-center text-slate-500">
          If you have any questions about this policy, please contact us at <span className="text-pink-600 font-medium">info@skillence.com</span>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
