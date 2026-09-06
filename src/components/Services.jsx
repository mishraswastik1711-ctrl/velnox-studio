import { motion } from "framer-motion";
import { Code2, Palette, Rocket } from "lucide-react";
import "./Services.css";

const services = [
  {
    icon: Code2,
    title: "Website Development",
    text: "Fast, responsive and modern websites built with React and the latest web technologies.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    text: "Clean interfaces designed to feel premium on desktop, tablet and mobile devices.",
  },
  {
    icon: Rocket,
    title: "Launch & Optimization",
    text: "Deploy your website, connect your domain and optimize it for performance and SEO.",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-heading">
          <p>OUR SERVICES</p>

          <h2>
            Everything you need to
            <span> launch online.</span>
          </h2>

          <span>
            VELNOX Studio creates premium websites with a focus on performance,
            design and user experience.
          </span>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                className="service-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div className="icon-wrapper">
                  <Icon size={32} strokeWidth={2} />
                </div>

                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <a href="#contact">Let's build it →</a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}