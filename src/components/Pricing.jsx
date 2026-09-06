import "./Pricing.css";

const plans = [
  {
    name: "Starter",
    price: "₹5,999",
    description: "Perfect for personal brands and students.",
    features: [
      "1 Landing Page",
      "Responsive Design",
      "Contact Form",
      "Basic SEO Setup",
      "1 Revision",
    ],
  },
  {
    name: "Business",
    price: "₹9,999",
    description: "Ideal for small businesses and startups.",
    features: [
      "Up to 5 Pages",
      "Premium UI Design",
      "SEO-Friendly Structure",
      "WhatsApp Integration",
      "3 Revisions",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "Custom",
    description: "For brands that need a custom experience.",
    features: [
      "Unlimited Pages",
      "Custom Animations",
      "E-commerce Ready",
      "Performance Optimization",
      "Priority Support",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="pricing-heading">
        <p>PRICING</p>
        <h2>Simple plans for every stage of your business.</h2>

        <span>
          Every project is customized to your requirements. These prices are
          starting estimates.
        </span>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
          >
            <h3>{plan.name}</h3>

            <div className="price">{plan.price}</div>

            <p className="plan-description">{plan.description}</p>

            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>✓ {feature}</li>
              ))}
            </ul>

            <button className="plan-btn">Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
}