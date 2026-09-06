import "./Portfolio.css";

const projects = [
  {
    title: "LUXE Fashion Store",
    category: "E-commerce Concept",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Aura Restaurant",
    category: "Restaurant Website Concept",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Pulse Fitness",
    category: "Gym Website Concept",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Nova Café",
    category: "Café Landing Page Concept",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "AI Startup Landing Page",
    category: "Startup Website Concept",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Creator Portfolio",
    category: "Personal Portfolio Concept",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-heading">
        <p>PORTFOLIO</p>

        <h2>Concept websites crafted by VELNOX Studio.</h2>

        <span>
          These are showcase concepts that demonstrate our design and development
          style for different industries.
        </span>
      </div>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-overlay">
              <p>{project.category}</p>

              <h3>{project.title}</h3>

              <button>View Concept</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}