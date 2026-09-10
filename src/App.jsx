import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Layers3,
  Menu,
  MonitorSmartphone,
  MoveUpRight,
  Send,
  ShoppingBag,
  X,
} from "lucide-react";
import "./App.css";

const navItems = [
  ["Home", "home"],
  ["Services", "services"],
  ["Work", "portfolio"],
  ["Process", "about"],
  ["Pricing", "pricing"],
  ["FAQ", "faq"],
];

const services = [
  { icon: MonitorSmartphone, number: "01", title: "Websites that feel like your brand", text: "High-converting marketing sites for ambitious businesses, creators, and startups." },
  { icon: ShoppingBag, number: "02", title: "E-commerce built to sell", text: "Premium storefronts that make browsing effortless and buying feel natural." },
  { icon: Layers3, number: "03", title: "Landing pages with momentum", text: "Focused launch pages that turn attention into sign-ups, calls, and customers." },
];

const projects = [
  { name: "LuxeSteps", type: "E-commerce / Fashion", tag: "L", className: "project-luxe" },
  { name: "VELNOX Studio", type: "Creative direction / Digital", tag: "V", className: "project-velnox" },
  { name: "Next chapter", type: "Your brand could be here", tag: "+", className: "project-next" },
];

const plans = [
  { name: "Launch", price: "₹24,900", description: "For a sharp, focused first impression.", features: ["One-page website", "Custom visual direction", "Responsive development", "Basic SEO setup"], featured: false },
  { name: "Signature", price: "₹49,900", description: "For brands ready to look established.", features: ["Up to 5 strategic pages", "Premium custom design", "Conversion-focused copy structure", "Speed & SEO optimisation", "30 days support"], featured: true },
  { name: "Commerce", price: "Let's talk", description: "For stores with bigger ambitions.", features: ["Custom store experience", "Product & collection templates", "Payment setup guidance", "Analytics-ready build", "60 days support"], featured: false },
];

const faqs = [
  ["How long does a website take?", "Most focused sites launch in 2–4 weeks. Larger e-commerce projects are scoped around your catalogue, content, and integrations."],
  ["Do you work with clients outside India?", "Yes. VELNOX Studio works remotely with ambitious brands anywhere. Communication, reviews, and handover are all handled online."],
  ["Can you help with copy and imagery?", "Absolutely. Every project includes a clear content direction, and we can help shape the words, imagery, and visual system your site needs."],
  ["What happens after I send an inquiry?", "You will hear from us within 24 hours with a few focused questions and a recommended next step. No vague proposals or pressure."],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [form, setForm] = useState({ from_name: "", reply_to: "", phone: "", business: "", message: "" });
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const current = navItems.map(([, id]) => document.getElementById(id)).filter(Boolean).find((element) => window.scrollY + 180 >= element.offsetTop && window.scrollY + 180 < element.offsetTop + element.offsetHeight);
      if (current) setActiveSection(current.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const submitInquiry = async (event) => {
    event.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { ...form, submitted_at: new Date().toLocaleString() },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setForm({ from_name: "", reply_to: "", phone: "", business: "", message: "" });
      setStatus("success");
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <button className="brand" onClick={() => scrollTo("home")} aria-label="Go to home"><span className="brand-mark">V</span><span>VELNOX <em>STUDIO</em></span></button>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, id]) => <button key={id} className={activeSection === id ? "active" : ""} onClick={() => scrollTo(id)}>{label}</button>)}
        </nav>
        <button className="header-cta" onClick={() => scrollTo("contact")}>Start a project <ArrowUpRight size={16} /></button>
        <button className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </header>
      {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{navItems.map(([label, id]) => <button key={id} onClick={() => scrollTo(id)}>{label}</button>)}<button className="mobile-cta" onClick={() => scrollTo("contact")}>Start a project <ArrowRight size={16} /></button></nav>}

      <main>
        <section className="hero" id="home">
          <div className="hero-grid"><div className="hero-copy reveal"><div className="eyebrow"><span className="eyebrow-dot" /> Independent digital studio <span className="eyebrow-line" /></div><h1>Make your <span>first impression</span> impossible to forget.</h1><p className="hero-lede">We design and build bold, thoughtful websites for brands that refuse to blend in.</p><div className="hero-actions"><button className="button button-primary" onClick={() => scrollTo("contact")}>Build something bold <ArrowRight size={17} /></button><button className="text-link" onClick={() => scrollTo("portfolio")}>Explore our work <ArrowDownIcon /></button></div><div className="hero-proof"><div className="avatar-stack"><span>V</span><span>L</span><span>+</span></div><div><strong>10+ projects</strong><small>designed with intention</small></div><span className="proof-divider" /><div><strong>Based in India</strong><small>working worldwide</small></div></div></div><div className="hero-art" aria-hidden="true"><div className="art-orbit orbit-a" /><div className="art-orbit orbit-b" /><div className="art-orbit orbit-c" /><div className="art-core"><span>V</span><small>VELNOX<br />STUDIO</small></div><div className="art-label label-top">BRAND<br />/ DIGITAL</div><div className="art-label label-bottom">01 — 24</div><div className="art-dot dot-one" /><div className="art-dot dot-two" /></div></div><div className="hero-bottom"><span>Scroll to explore</span><span className="scroll-line" /><span>Scroll 01 / 07</span></div>
        </section>

        <section className="section services-section" id="services"><div className="section-intro"><div><p className="section-kicker">What we do <span>01</span></p><h2>Digital, but <em>different.</em></h2></div><p>Strategy, design, and development working as one to give your brand the digital presence it deserves.</p></div><div className="service-grid">{services.map(({ icon: Icon, number, title, text }) => <article className="service-card" key={number}><div className="service-top"><span>{number}</span><Icon size={22} strokeWidth={1.5} /></div><h3>{title}</h3><p>{text}</p><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>Explore service <ArrowUpRight size={15} /></a></article>)}</div></section>

        <section className="section work-section" id="portfolio"><div className="section-intro"><div><p className="section-kicker">Selected work <span>02</span></p><h2>Good work <em>speaks.</em></h2></div><p>A small selection of digital experiences crafted to make the right people stop, look, and remember.</p></div><div className="project-grid">{projects.map((project) => <article className={`project-card ${project.className}`} key={project.name}><div className="project-visual"><div className="project-window"><div className="window-top"><span /><span /><span /><b>{project.tag}</b></div><div className="window-body"><div className="window-line line-wide" /><div className="window-line line-short" /><div className="window-block" /></div></div><span className="project-number">0{projects.indexOf(project) + 1}</span></div><div className="project-meta"><div><small>{project.type}</small><h3>{project.name}</h3></div><button onClick={() => scrollTo("contact")} aria-label={`Discuss ${project.name}`}><ArrowUpRight size={19} /></button></div></article>)}</div></section>

        <section className="section process-section" id="about"><div className="process-panel"><div className="process-heading"><p className="section-kicker">How we work <span>03</span></p><h2>From first thought<br />to <em>final pixel.</em></h2><p>No mystery process. No unnecessary layers. Just clear thinking and work that moves forward.</p></div><div className="process-list"><div><span>01</span><div><h3>Discover</h3><p>We learn what makes your brand tick, who it is for, and what success should look like.</p></div></div><div><span>02</span><div><h3>Design</h3><p>We turn the strategy into a distinctive visual world with a clear, confident point of view.</p></div></div><div><span>03</span><div><h3>Deliver</h3><p>We build, refine, and launch a fast experience that feels as good as it looks.</p></div></div></div></div></section>

        <section className="section pricing-section" id="pricing"><div className="section-intro"><div><p className="section-kicker">Simple pricing <span>04</span></p><h2>Choose your <em>starting point.</em></h2></div><p>Every project is different. These starting points make it easier to find the right level of ambition.</p></div><div className="pricing-grid">{plans.map((plan) => <article className={`pricing-card ${plan.featured ? "featured" : ""}`} key={plan.name}>{plan.featured && <span className="popular-pill">Most popular</span>}<p className="plan-name">{plan.name}</p><h3>{plan.price}</h3><p className="plan-description">{plan.description}</p><ul>{plan.features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul><button className={plan.featured ? "button button-primary" : "button button-outline"} onClick={() => scrollTo("contact")}>Start a conversation <ArrowRight size={16} /></button></article>)}</div></section>

        <section className="section faq-section" id="faq"><div className="faq-layout"><div><p className="section-kicker">The details <span>05</span></p><h2>Questions,<br /><em>answered.</em></h2><p className="faq-note">Still curious? We would love to hear what you are building.</p><button className="text-link" onClick={() => scrollTo("contact")}>Ask us anything <ArrowRight size={16} /></button></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? "open" : ""}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}><span>{question}</span><ChevronDown size={18} /></button>{openFaq === index && <p>{answer}</p>}</div>)}</div></div></section>

        <section className="section contact-section" id="contact"><div className="contact-layout"><div className="contact-copy"><p className="section-kicker">Your turn <span>06</span></p><h2>Have a good<br /><em>feeling?</em></h2><p>Tell us a little about what you are building. We will get back to you within 24 hours with a clear next step.</p><div className="contact-details"><a href="mailto:mishraswastik1711@gmail.com">mishraswastik1711@gmail.com <ArrowUpRight size={14} /></a><span>Mohali, Punjab · Working worldwide</span></div></div><form className="inquiry-form" onSubmit={submitInquiry}><div className="form-row"><label>Your name<input name="from_name" value={form.from_name} onChange={(e) => setForm({ ...form, from_name: e.target.value })} placeholder="Jane Smith" required /></label><label>Email address<input type="email" name="reply_to" value={form.reply_to} onChange={(e) => setForm({ ...form, reply_to: e.target.value })} placeholder="jane@company.com" required /></label></div><div className="form-row"><label>Phone number<input type="tel" name="phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210" required /></label><label>Business name<input name="business" value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} placeholder="Your brand" /></label></div><label>Tell us about the project<textarea name="message" rows="4" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="What are you hoping to build?" required /></label><div className="form-bottom"><button className="button button-primary" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send inquiry"} <Send size={15} /></button>{status === "success" && <p className="form-status success">Message sent. We will be in touch soon.</p>}{status === "error" && <p className="form-status error">Something went wrong. Please try again.</p>}</div></form></div></section>
      </main>

      <footer className="site-footer"><div className="footer-brand"><span className="brand-mark">V</span><div><strong>VELNOX <em>STUDIO</em></strong><small>Digital experiences with a point of view.</small></div></div><div className="footer-links"><span>© 2026 VELNOX Studio</span><a href="mailto:mishraswastik1711@gmail.com">Email us <ArrowUpRight size={14} /></a><a href="#home" onClick={(e) => { e.preventDefault(); scrollTo("home"); }}>Back to top <MoveUpRight size={14} /></a></div></footer>
    </div>
  );
}

function ArrowDownIcon() { return <span className="arrow-down">↓</span>; }

export default App;
