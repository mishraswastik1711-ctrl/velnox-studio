import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-gradient"></div>
      <div className="hero-grid"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="hero-tag">VELNOX STUDIO</p>

        <h1>
          Premium websites built for
          <span> modern brands.</span>
        </h1>

        <p className="hero-description">
          We design and develop fast, responsive websites that help startups,
          creators and businesses build a professional online presence.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">
            Start Your Project
            <ArrowRight size={18} />
          </a>

          <a href="#portfolio" className="btn-secondary">
            View Portfolio
          </a>
        </div>
      </motion.div>

      <div className="scroll-indicator">
        <div className="mouse">
          <span></span>
        </div>
        <p>SCROLL</p>
      </div>
    </section>
  );
}