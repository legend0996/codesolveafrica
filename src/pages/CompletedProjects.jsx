const CompletedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description:
        "A full e-commerce platform with product listings and admin management.",
      image: "https://via.placeholder.com/400x250",
      link: "https://example.com/ecommerce",
    },
    {
      id: 2,
      title: "School Management System",
      description:
        "System for managing students, teachers, fees, and academic records.",
      image: "https://via.placeholder.com/400x250",
      link: "https://example.com/school-system",
    },
    {
      id: 3,
      title: "Business Portfolio Website",
      description:
        "Professional company portfolio website built for brand visibility.",
      image: "https://via.placeholder.com/400x250",
      link: "https://example.com/portfolio",
    },
  ];

  return (
    <div>
      <h2>Completed Projects</h2>
      <p>
        Below are some of the projects successfully delivered by
        CodeSolveAfrica. Click on a project image to view it.
      </p>

      <div style={styles.grid}>
        {projects.map((project) => (
          <div key={project.id} style={styles.card}>
            {/* CLICKABLE IMAGE */}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                style={styles.image}
              />
            </a>

            <div style={styles.content}>
              <h3 style={styles.title}>{project.title}</h3>
              <p style={styles.description}>{project.description}</p>
              <span style={styles.status}>✔ Completed</span>
            </div>
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
  content: {
    padding: "12px",
  },
  title: {
    fontSize: "17px",
    marginBottom: "5px",
  },
  description: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "8px",
  },
  status: {
    fontSize: "13px",
    color: "#16a34a",
    fontWeight: "bold",
  },
};

export default CompletedProjects;
