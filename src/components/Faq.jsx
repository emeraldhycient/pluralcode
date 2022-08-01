import React, { useState } from "react";
import { Accordion } from "flowbite-react";

function Faq({ faqs, setfaqs }) {
  const handleToggle = (index) => {
    const newFaqs = [...faqs];
    newFaqs.map((faq, i) => {
      if (i === index) {
        faq.isActive = !faq.isActive;
      } else {
        faq.isActive = false;
      }
      return faq;
    });
    setfaqs(newFaqs);
  };

  return (
    <div className="w-11/12 md:w-10/12 mx-auto py-32">
      <h1 className="text-2xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h1>
      <div className=" rounded-lg p-4">
        {faqs?.map((faq, index) => (
          <div key={index} className="border rounded-lg mb-4">
            <div
              className={`shadow rounded p-4 font-bold text-slate-800 flex  items-center justify-between ${
                faq.isActive ? "bg-gray-100" : "bg-white"
              }`}
              onClick={(e) => handleToggle(index)}
            >
              <h4 className="flex items-center font-gilroy text-[#222057]">
                {faq.isActive && (
                  <div className="h-4 w-4 rounded-full bg-amber-500 mr-4"></div>
                )}
                {faq.title}
              </h4>
              {faq.isActive ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </div>
            {faq.isActive && (
              <div className=" p-4 font-gilroyregular text-[16px]">
                {faq.content}{" "}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
