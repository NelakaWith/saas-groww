"use client";

import { useState } from "react";
import SectionTag from "../common/sectionTag";
import IconifyClient from "../common/IconifyClient";

const faqData = [
  {
    id: 1,
    question: "How does the pricing work?",
    answer:
      "Our pricing is flexible and scales with your needs. Choose from our Starter, Pro, or Enterprise plans based on your requirements. You can upgrade or downgrade at any time.",
  },
  {
    id: 2,
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your access will continue until the end of your current billing period.",
  },
  {
    id: 3,
    question: "What integrations do you support?",
    answer:
      "We support a wide range of integrations including popular tools like Slack, Google Workspace, Microsoft Teams, Salesforce, and many more. Check our integrations page for the complete list.",
  },
  {
    id: 4,
    question: "Is my data secure?",
    answer:
      "Absolutely. We use industry-standard encryption, regular security audits, and comply with GDPR and SOC 2 standards. Your data is stored securely and never shared with third parties.",
  },
  {
    id: 5,
    question: "Do you offer customer support?",
    answer:
      "Yes! We provide 24/7 customer support via email and chat for all plans. Pro and Enterprise plans also include priority support and dedicated account managers.",
  },
];

function Faq() {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="mt-16 md:mt-52 md:mx-auto md:max-w-7xl">
      <div className="flex flex-col md:flex-row px-8">
        <div className="flex-1">
          <SectionTag title="FAQs" />
          <h2 className="font-bold text-2xl md:text-4xl mt-4">
            Common Questions
          </h2>
          <p className="text-sm mt-4 text-neutral-400">
            Haven’t found what you’re looking for?
            <span className="text-brand-300"> Contact us</span>
          </p>
        </div>
        <div className="flex-1 mt-8">
          <div className="space-y-4">
            {faqData.map((faq) => (
              <div key={faq.id} className="py-4">
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left font-semibold text-lg flex items-center justify-between"
                >
                  <span>{faq.question}</span>
                  <IconifyClient
                    icon={openId === faq.id ? "mdi:minus" : "mdi:plus"}
                    className="text-neutral-500"
                    width={20}
                  />
                </button>
                {openId === faq.id && (
                  <div className="mt-3">
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
