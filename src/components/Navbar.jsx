import { useEffect, useState } from "react";
import "./Navbar.css";

const links = [
  { name: "Home", id: "home" },
  { name: "Services", id: "services" },
  { name: "About", id: "about" },
  { name: "Portfolio", id: "portfolio" },
  { name: "Pricing", id: "pricing" },
  { name: "FAQ", id: "faq" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      links.forEach((link) => {
        const section = document.getElementById(link.id);
        if (!section) return;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(link.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scroll" : ""}`}>
      <div className="navbar-container">
        <a href="#home" className="logo">
          VELNOX <span>STUDIO</span>
        </a>

        <div className="nav-links">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? "active" : ""}
            >
              {link.name}
            </a>
          ))}
        </div>

        <a href="#contact" className="nav-btn">
          Let's Talk
        </a>
      </div>
    </nav>
  );
}