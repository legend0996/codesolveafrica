const ProjectsForSale = () => {
  const projects = [
    {
      id: 1,
      title: "Business Website",
      description:
        "A modern responsive business website suitable for SMEs and startups.",
      image: "https://via.placeholder.com/400x250",
      link: "https://example.com/business-website",
    },
    {
      id: 2,
      title: "Retail POS System",
      description:
        "A point of sale system for shops with inventory and sales tracking.",
      image: "https://via.placeholder.com/400x250",
      link: "https://example.com/pos-system",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "Personal portfolio website for developers, designers, and freelancers.",
      image: "https://via.placeholder.com/400x250",
      link: "https://example.com/portfolio-site",
    },
  ];

  return (
    <div>
      <h2>Projects For Sale</h2>
      <p>
        Click on any project image to preview the system. Customization is
        available after purchase.
      </p>

      <div style={styles.grid}>
        {projects.map((project) => (
          <div key={project.id} style={styles.card}>
            {/* IMAGE CLICKABLE */}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                style={styles.image}
              />
            </a>

            <h3 style={styles.title}>{project.title}</h3>
            <p style={styles.description}>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "#ffffff",
  },
  image: {
    width: "100%",
    height: "auto",
    cursor: "pointer",
  },
  title: {
    margin: "10px",
    fontSize: "18px",
  },
  description: {
    margin: "0 10px 15px",
    fontSize: "14px",
    color: "#555",
  },
};

export default ProjectsForSale;
