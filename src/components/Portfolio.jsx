import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import "./Portfolio.css";

const projects = [
  {
    title: "VELNOX Studio",
    category: "Web Design Agency",
    gradient: "blue",
  },
  {
    title: "LuxeSteps",
    category: "Women's Footwear & Bags",
    gradient: "pink",
  },
  {
    title: "Your Website Here",
    category: "Available Project",
    gradient: "dark",
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-heading">
          <p>PORTFOLIO</p>

          <h2>Designed for brands that want to stand out.</h2>

          <span>
            Every website is custom designed by VELNOX Studio with a premium
            modern interface.
          </span>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`portfolio-card ${project.gradient}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              {/* Browser Mockup */}
              <div className="mockup-window">
                <div className="browser-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="mockup-content">
                  <div className="mockup-top"></div>

                  <div className="mockup-banner"></div>

                  <div className="mockup-row">
                    <div></div>
                    <div></div>
                  </div>

                  <div className="mockup-row">
                    <div></div>
                    <div></div>
                  </div>

                  <div className="mockup-footer"></div>
                </div>
              </div>

              {/* Card Info */}
              <div className="portfolio-info">
                <p>{project.category}</p>

                <h3>{project.title}</h3>

                <a href="#contact" className="portfolio-btn">
                  View Design
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}