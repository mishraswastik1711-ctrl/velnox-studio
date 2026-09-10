import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./FAQ.css";

const faqs = [
  {
    question: "How long does a website take?",
    answer: "Most websites are completed in 5–10 days depending on the number of pages and design."
  },
  {
    question: "Will my website work on mobile?",
    answer: "Yes. Every VELNOX website is fully responsive for mobile, tablet and desktop."
  },
  {
    question: "Can you connect my domain?",
    answer: "Yes. We help connect your domain and deploy the website after it's completed."
  },
  {
    question: "Can I update the website later?",
    answer: "Absolutely. We can help you make updates or add new pages in the future."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-heading">
          <p>FAQ</p>
          <h2>Frequently Asked Questions</h2>
          <span>Everything you might want to know before starting your website.</span>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div className="faq-item" key={index}>
              <button
                className="faq-question"
                onClick={() => setOpen(open === index ? -1 : index)}
              >
                <span>{item.question}</span>

                <ChevronDown
                  className={open === index ? "rotate" : ""}
                  size={20}
                />
              </button>

              {open === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}