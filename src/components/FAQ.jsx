import { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    question: "How long does a website take to build?",
    answer:
      "Most VELNOX Studio websites are completed within 5–10 days depending on the project scope and revisions.",
  },
  {
    question: "Do you build mobile-friendly websites?",
    answer:
      "Yes. Every website is designed to work smoothly on desktop, tablet and mobile devices.",
  },
  {
    question: "Can I request changes after delivery?",
    answer:
      "Absolutely. Every plan includes revisions, and additional updates can be requested anytime.",
  },
  {
    question: "Will my website be SEO-friendly?",
    answer:
      "Yes. We build websites with a clean structure, fast loading speed and SEO-ready foundations.",
  },
  {
    question: "Can you deploy my website on my own domain?",
    answer:
      "Yes. We can help connect your website to your domain and publish it online.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="faq" id="faq">
      <div className="faq-heading">
        <p>FAQ</p>
        <h2>Frequently asked questions.</h2>
      </div>

      <div className="faq-list">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${active === index ? "open" : ""}`}
            onClick={() =>
              setActive(active === index ? null : index)
            }
          >
            <div className="faq-question">
              <h3>{item.question}</h3>

              <span>{active === index ? "−" : "+"}</span>
            </div>

            {active === index && (
              <p className="faq-answer">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}