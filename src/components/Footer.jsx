import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container footer-container">

        <div className="footer-brand">
          <h2>VELNOX <span>STUDIO</span></h2>

          <p>
            Premium websites designed for startups, creators and businesses across India.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>

          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>

          <p>📧 mishraswastik1711@gmail.com</p>
          <p>📍 Mohali, Punjab, India</p>

          <a
            href="https://wa.me/916230162159"
            target="_blank"
            rel="noreferrer"
            className="footer-btn"
          >
            💬 Chat on WhatsApp
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 VELNOX Studio • Designed by Swastik Mishra
      </div>
    </footer>
  );
}