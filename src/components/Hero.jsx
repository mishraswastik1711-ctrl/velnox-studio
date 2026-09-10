import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  const handleMouseMove = (e) => {
    const globe = document.querySelector(".globe-wrapper");
    if (!globe) return;

    const rect = globe.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -18;

    globe.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  };

  const resetGlobe = () => {
    const globe = document.querySelector(".globe-wrapper");
    if (globe) {
      globe.style.transform = "rotateX(0deg) rotateY(0deg)";
    }
  };

  return (
    <section className="hero" id="home">
      <div className="container hero-content">

        {/* LEFT CONTENT */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-label">PREMIUM WEB DESIGN STUDIO</p>

          <h1>
            We Build <span>Modern Websites</span> That Grow Your Brand.
          </h1>

          <p className="hero-description">
            VELNOX Studio designs premium websites for startups, creators and
            businesses. Fast, responsive, modern and built to leave a powerful
            first impression.
          </p>

          <div className="hero-buttons">
            <a href="#portfolio" className="btn-primary">
              View Portfolio
              <ArrowRight size={18} />
            </a>

            <a href="#contact" className="btn-secondary">
              Start Your Website
            </a>
          </div>

          {/* STATS */}
          <div className="hero-stats">
            <div className="stat-card">
              <h3>10+</h3>
              <span>Projects Delivered</span>
            </div>

            <div className="stat-card">
              <h3>100%</h3>
              <span>Responsive Design</span>
            </div>

            <div className="stat-card">
              <h3>24/7</h3>
              <span>Support & Updates</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT GLOBE */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetGlobe}
        >
          <div className="globe-wrapper">

            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="orbit orbit-three"></div>

            <div className="globe"></div>

            <span className="particle p1"></span>
            <span className="particle p2"></span>
            <span className="particle p3"></span>
            <span className="particle p4"></span>
            <span className="particle p5"></span>
            <span className="particle p6"></span>

          </div>
        </motion.div>

      </div>
    </section>
  );
}