import { motion } from "framer-motion";
import { Code, ShoppingBag, Smartphone } from "lucide-react";
import "./Services.css";

const services = [
  {
    icon: <Code size={34} />,
    title: "Business Websites",
    text: "Modern websites for startups, creators and businesses."
  },
  {
    icon: <ShoppingBag size={34} />,
    title: "E-Commerce Stores",
    text: "Beautiful online stores with premium shopping experience."
  },
  {
    icon: <Smartphone size={34} />,
    title: "Landing Pages",
    text: "Fast, responsive landing pages designed to convert visitors."
  }
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-heading">
          <p>SERVICES</p>
          <h2>Everything your brand needs online.</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}