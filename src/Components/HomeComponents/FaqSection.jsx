import React, { useState } from "react";

const faqs = [
  {
    question: "How do I donate leftover food?",
    answer:
      "After signing up as a donor, you can create a food post by adding details like quantity, pickup time, and location.",
  },
  {
    question: "Who can request food?",
    answer:
      "Any registered user nearby can request available food listings posted by donors.",
  },
  {
    question: "Is the food quality guaranteed?",
    answer:
      "We encourage donors to only post fresh and safe-to-consume food. However, FoodLoop does not take responsibility for food quality.",
  },
  {
    question: "How do I track my requests?",
    answer:
      "You can see your requested foods and their status in your requester dashboard.",
  },
  {
    question: "Can I volunteer to help FoodLoop?",
    answer:
      "Absolutely! Please contact us through the 'Get Involved' section to learn about volunteering opportunities.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-base-100 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqs.map(({ question, answer }, index) => (
            <div
              key={index}
              className="shadow-2xl rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-4 bg-base-300 hover:bg-base-400  focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-text">{question}</span>
                <svg
                  className={`w-6 h-6 text-black transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-base-300 text-text">{answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
