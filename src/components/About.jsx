import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      {/* Left Side */}
      <div className="about-content">
        <p className="about-tag">ABOUT VELNOX</p>

        <h2>
          Designing websites that
          <span> look premium and perform fast.</span>
        </h2>

        <p className="about-text">
          VELNOX Studio is a newly launched web design studio focused on creating
          modern, responsive and high-performance websites for startups,
          creators, personal brands and small businesses.
        </p>

        <p className="about-text">
          Every website is built with clean design, smooth animations, fast
          loading speed and an SEO-friendly structure so your business has a
          strong online presence from day one.
        </p>

        <div className="features">
          <div className="feature">⚡ Fast Performance</div>
          <div className="feature">🎨 Premium UI Design</div>
          <div className="feature">📱 Fully Responsive</div>
          <div className="feature">🔍 SEO-Friendly Structure</div>
        </div>
      </div>

      {/* Right Side */}
      <div className="about-image">
     <div className="laptop">
  <img
    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80"
    alt="VELNOX Studio Website Preview"
  />
</div>

        <div className="badge">
          <h3>2026</h3>
          <p>VELNOX Studio Launch</p>
        </div>
      </div>
    </section>
  );
}