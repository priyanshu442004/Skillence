import React, { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

const faqs = [
  {
    question: "What is the duration of internships?",
    answer:
      "Our internships typically last between 4 to 8 weeks, depending on the project and track you choose. You can work part-time or full-time based on your availability.",
  },
  {
    question: "Are the internships paid?",
    answer:
      "Currently, internships are unpaid. However, you gain real-world experience, certificates, and the opportunity to work on client projects. We are working on introducing paid internships in the future.",
  },
  {
    question: "What is included in the one-on-one interview service?",
    answer:
      "You get a live mock interview session with a real human evaluator, followed by feedback, score, and tips to improve. You can choose the interview type (technical, HR, etc.) and whatever the duration suitable for you.",
  },
  {
    question: "Do I need prior experience to apply?",
    answer:
      "No prior experience is needed. Our programs are beginner-friendly and designed to help you grow your skills from the ground up. You will learn through hands-on projects and teamwork.",
  },
  {
    question: "Can I participate in multiple programs?",
    answer:
      "Yes! You can join internships, participate in hackathons, and also book interview sessions — all at your own pace. Just ensure you manage your time effectively.",
  },
  {
  question: "Will I get a certificate after the internship?",
  answer: "Yes, every student who successfully applied for certificate and completes their internship receives a verified certificate from us. This certificate can be shared on LinkedIn and other platforms.",
},
{
  question: "How are real client projects assigned?",
  answer: "Once you're onboarded, we assess your skill level and match you with suitable client projects under mentor guidance. You will work in teams to deliver real-world solutions.",
},
{
  question: "Are there any prerequisites to join the programs?",
  answer: "Basic understanding of programming is helpful, but we also guide beginners through foundational tasks. You can choose your preferred track based on your current skills.",
},
{
  question: "How often are new internships added?",
  answer: "New internship openings are posted every 1-2 weeks based on current client requirements and project flow. Make sure to check back regularly or subscribe to our newsletter for updates.",
},
{
  question: "Is there any support during the internship?",
  answer: "Yes, mentors and coordinators are available to guide you through tasks and answer your questions on regular check-ins. You can also reach out via our platform for any immediate concerns.",
},
{
  question: "Do you offer group discounts for interviews?",
  answer: "Yes, if you're booking multiple interviews as a group (3+ people), we do offer discounted pricing. Contact us for details at info@skillence.com or directly call at 7017941890.",
},
{
  question: "Can I list this experience on my resume or LinkedIn?",
  answer: "Absolutely! Many students showcase their work on LinkedIn, and we provide all necessary project details for your resume. This experience can significantly enhance your profile.",
},
{
  question: "Is there any refund policy?",
  answer: "For paid services like one-on-one interviews, refunds are available only if you cancel at least 24 hours in advance.",
},
{
  question: "How do I contact support?",
  answer: "You can reach our support team via email at info@skillence.com or call us at 7017941890. We are here to help you with any queries or issues.",
},
{
  question: "What if I miss a session or deadline?",
  answer: "We understand that life can be unpredictable. If you miss a session, please inform your mentor or coordinator as soon as possible. We will do our best to accommodate you.",
},
{
  question: "Can I switch tracks during the internship?",
  answer: "Yes, if you feel that another track aligns better with your interests or skills, discuss it with your mentor. They will guide you on the best way to transition.",
},
{
  question: "Do I need to pay for Internships?",
  answer: "Doing internships is completely free. You will gain valuable experience without any financial burden. However, if you choose to apply for letter of recommendation, Certificate as well as if you want our team will help you to get full time job roles at some of the industry's best companies, there is a nominal fee. It will be discussed with you at the time of onboarding.",
}

];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white px-6 py-16 text-slate-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-2">FAQs</h1>
        <p className="text-center text-slate-600 text-lg mb-8">
          Got questions? We’ve got answers.
        </p>

        {/* Search bar */}
        <div className="relative mb-10 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search FAQs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
          />
          <Search className="absolute top-3.5 left-4 w-5 h-5 text-gray-400" />
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-xl transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium hover:bg-gray-100"
                >
                  <span>{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-pink-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-pink-600" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4 text-slate-600 text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-slate-500">
              No FAQs match your search.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
