import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-heading">
        <p>CONTACT</p>

        <h2>Let's build something amazing together.</h2>

        <span>
          Have a project or an idea? Let's discuss it and create something
          premium for your business.
        </span>
      </div>

      <div className="contact-container">

        {/* LEFT - FORM */}

        <form className="contact-form">

          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Email Address" />

          <input type="text" placeholder="Project Type" />

          <textarea
            rows="6"
            placeholder="Tell us about your project..."
          ></textarea>

          <button type="submit">Send Message</button>

        </form>

        {/* RIGHT - INFO */}

        <div className="contact-info">

          <div className="info-box">
            <h3>Email</h3>
            <p>hello@velnoxstudio.com</p>
          </div>

          <div className="info-box">
            <h3>Location</h3>
            <p>Himachal Pradesh, India</p>
          </div>

          <div className="info-box">
            <h3>Availability</h3>
            <p>Open for freelance projects and business websites.</p>
          </div>

          <div className="socials">
            <a href="#">Instagram ↗</a>
            <a href="#">LinkedIn ↗</a>
            <a href="#">WhatsApp ↗</a>
          </div>

        </div>

      </div>
    </section>
  );
}