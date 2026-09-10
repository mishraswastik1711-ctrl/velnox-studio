import { Check } from "lucide-react";
import "./Pricing.css";

const plans = [
  {
    name: "Starter",
    price: "₹4,999",
    popular: false,
    features: [
      "1 Landing Page",
      "Responsive Design",
      "WhatsApp Button",
      "Contact Form",
      "Basic SEO Setup",
    ],
  },
  {
    name: "Business",
    price: "₹8,999",
    popular: true,
    features: [
      "Up to 5 Pages",
      "Premium UI/UX Design",
      "Animations",
      "Portfolio Section",
      "WhatsApp Integration",
      "SEO Optimized",
    ],
  },
  {
    name: "Premium",
    price: "Custom",
    popular: false,
    features: [
      "Unlimited Pages",
      "Custom Design",
      "Advanced Animations",
      "Booking / Forms",
      "Deployment Support",
      "Priority Support",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="section-heading">
          <p>PRICING</p>
          <h2>Choose your perfect website plan.</h2>
          <span>Simple pricing. Premium websites. No hidden charges.</span>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card ${plan.popular ? "popular" : ""}`}
            >
              {plan.popular && (
                <div className="popular-tag">MOST POPULAR</div>
              )}

              <h3>{plan.name}</h3>

              <div className="price">{plan.price}</div>

              <div className="features">
                {plan.features.map((item) => (
                  <div className="feature" key={item}>
                    <Check size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="pricing-btn">
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}