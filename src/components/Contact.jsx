import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    from_name: "",
    reply_to: "",
    phone: "",
    business: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.from_name,
          reply_to: form.reply_to,
          phone: form.phone,
          business: form.business,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setForm({
        from_name: "",
        reply_to: "",
        phone: "",
        business: "",
        message: "",
      });

      setStatus("success");
      setShowPopup(true);
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section className="contact" id="contact">
        <div className="container contact-container">
          {/* LEFT */}
          <div className="contact-info">
            <p className="section-tag">CONTACT VELNOX STUDIO</p>

            <h2>Let's build your dream website.</h2>

            <p className="contact-text">
              Tell us about your startup, business or brand. We'll contact you
              within 24 hours with a custom website plan and pricing.
            </p>

            <div className="contact-details">
              <p>📧 mishraswastik1711@gmail.com</p>
              <p>📍 Mohali, Punjab, India</p>
            </div>

            <a
              href="https://wa.me/91YOURNUMBER?text=Hi%20VELNOX%20Studio!%20I%20want%20a%20website."
              target="_blank"
              rel="noreferrer"
              className="whatsapp-contact-btn"
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          {/* RIGHT */}
          <form className="contact-form" onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              value={form.from_name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="reply_to"
              placeholder="Email Address"
              value={form.reply_to}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              pattern="[0-9]{10}"
              required
            />

            <input
              type="text"
              name="business"
              placeholder="Business Name (Optional)"
              value={form.business}
              onChange={handleChange}
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Tell us about your project..."
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={sending}>
              {sending ? "Sending..." : "Send Inquiry"}
            </button>

            {status === "error" && (
              <p className="error-message">
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </section>

      {showPopup && (
  <div className="popup-overlay">
    <div className="success-popup">
      <div className="popup-icon">
        <div className="check-circle">✓</div>
      </div>

      <p className="popup-tag">VELNOX STUDIO</p>

      <h2>Your Inquiry Has Been Sent!</h2>

      <p className="popup-text">
        Thank you for contacting <strong>VELNOX Studio.</strong>
        <br />
        We've received your request and will contact you within
        <strong> 24 hours.</strong>
      </p>

      <button
        className="popup-button"
        onClick={() => setShowPopup(false)}
      >
        Continue Exploring
      </button>
    </div>
  </div>
)}
    </>
  );
}