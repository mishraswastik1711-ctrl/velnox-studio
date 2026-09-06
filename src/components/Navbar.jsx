import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const links = [
  { name: "Services", id: "services" },
  { name: "About", id: "about" },
  { name: "Portfolio", id: "portfolio" },
  { name: "Pricing", id: "pricing" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`navbar ${scrolled ? "scrolled" : ""}`}
    >
      <a href="#home" className="logo">
        VELNOX
      </a>

      <nav className="desktop-nav">
        {links.map((link) => (
          <a key={link.id} href={`#${link.id}`}>
            {link.name}
          </a>
        ))}
      </nav>

      <a href="#contact" className="nav-button">
        Let's Talk
      </a>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="mobile-btn"
              onClick={() => setMenuOpen(false)}
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}