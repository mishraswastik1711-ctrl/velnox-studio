import { motion } from "framer-motion";
import { Code2, Palette, Rocket } from "lucide-react";
import "./Services.css";

const services = [
  {
    icon: Code2,
    title: "Website Development",
    description:
      "Responsive, high-performance websites built with modern technologies and clean code.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description:
      "Minimal, premium interfaces designed to create a smooth user experience on every device.",
  },
  {
    icon: Rocket,
    title: "Launch & Branding",
    description:
      "Landing pages, brand identity, deployment and optimization to help you launch online.",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="section-heading">
        <p>OUR SERVICES</p>
        <h2>Everything you need to build your online presence.</h2>
        <span>
          We focus on clean design, fast development and websites that feel
          modern from the very first interaction.
        </span>
      </div>

      <div className="services-grid">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -12 }}
            >
              <div className="service-icon">
                <Icon size={34} />
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button>Learn More →</button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}