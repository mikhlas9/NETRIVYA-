"use client"

import { useState } from "react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "Why Use Bulk SMS Marketing?",
      answer:
        "Bulk SMS marketing offers high open rates, immediate delivery, and direct customer engagement at affordable rates.",
    },
    {
      question: "How Do You Provide Support to Your Clients?",
      answer: "We provide 24/7 customer support through multiple channels including email, telegram, and phone.",
    },
    {
      question: "Do You Provide Prepay or Post Pay Plans?",
      answer: "We offer both prepay and postpay plans to suit different business needs.",
    },
    {
      question: "How Can i Make Payment & How Secure Your Payment Gateway is?",
      answer: "We accept all major payment methods and use industry-leading security protocols.",
    },
    {
      question: "Can i Upload Excel Sheet Directly to Send SMS?",
      answer: "Yes, our platform allows you to upload Excel files directly for bulk sending.",
    },
    {
      question: "How Can i Bind My System with Yours?",
      answer: "Integration is simple with our comprehensive API documentation and sample codes.",
    },
    {
      question: "How Do You Protect My Privacy & How Secure My Data is?",
      answer: "We use enterprise-grade encryption and comply with all data protection regulations.",
    },
    {
      question: "Do You Provide Bulk SMS Services Globally?",
      answer: "Yes, we deliver messages in 190+ countries worldwide.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                {faq.question}
                <span className="text-teal-600">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && <div className="px-6 py-4 bg-gray-50 text-gray-600">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
