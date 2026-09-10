import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import "./About.css";

const points = [
  "Modern UI/UX Design",
  "Fully Responsive Website",
  "Fast Performance",
  "SEO Friendly Structure",
  "Domain & Deployment Support",
  "WhatsApp & Contact Integration"
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-container">

        {/* LEFT */}

        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-tag">WHY VELNOX?</p>

          <h2>
            Websites that feel
            <span> premium from day one.</span>
          </h2>

          <p className="about-text">
            We don't use generic templates. Every VELNOX website is designed to
            look modern, load fast and work beautifully on every device.
          </p>

          <div className="about-list">
            {points.map((item) => (
              <div key={item} className="about-item">
                <CheckCircle2 size={20} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn-primary">
            Start Your Website
          </a>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="laptop">
            <div className="screen">

              <div className="browser-bar">
                <span></span><span></span><span></span>
              </div>

              <div className="ui-header"></div>
              <div className="ui-sub"></div>

              <div className="ui-card large"></div>

              <div className="ui-row">
                <div className="ui-card"></div>
                <div className="ui-card"></div>
              </div>

              <div className="ui-footer"></div>

            </div>

            <div className="laptop-base"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}